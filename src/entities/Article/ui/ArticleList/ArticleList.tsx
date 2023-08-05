import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../../Article/model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import classes from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  view = 'tile',
}) => {
  const getSkeletonsView = (view: ArticleView) => new Array(view === 'tile' ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} />
  );

  return (
    <div
      className={classNames(classes.articleList, {}, [
        className,
        classes[view],
      ])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletonsView(view)}
    </div>
  );
};
