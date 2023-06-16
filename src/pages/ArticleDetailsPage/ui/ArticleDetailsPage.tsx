import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared/ui';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetaisPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

type ArticleDetailsParams = {
  id: string;
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<ArticleDetailsParams>();

  if (!id) {
    return <h2>{t('article not found')}</h2>;
  }

  return (
    <div className={classNames(classes.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Typography className={classes.commentTitle} title={t('comments')} />
      <CommentList
        isLoading
        comments={[]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
