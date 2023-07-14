import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import { Article, ArticleView } from '../../../Article/model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

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
  view = 'grid',
}) => {
  const { t } = useTranslation();

  const getSkeletonsView = (view: ArticleView) => new Array(view === 'grid' ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} />
  );

  if (isLoading) {
    return (
      <div
        className={classNames(classes.articleList, {}, [
          className,
          classes[view],
        ])}
      >
        {getSkeletonsView(view)}
      </div>
    );
  }

  return (
    <div
      className={classNames(classes.articleList, {}, [
        className,
        classes[view],
      ])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
