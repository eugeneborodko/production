import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList/ui/ArticleRecommendationsList';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetailsComments } from '@/widgets/ArticleDetailsComments/ui/ArticleDetailsComments';
import { Page } from '@/widgets/Page';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import classes from './ArticleDetailsPage.module.scss';
import { WriteArticleReview } from '@/features/WriteArticleReview';

interface ArticleDetailsPageProps {
  className?: string;
}

export type ArticleDetailsParams = {
  id: string;
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<ArticleDetailsParams>();

  if (!id) {
    return <h2>{t('article not found')}</h2>;
  }

  return (
    <Page className={classNames(classes.articleDetailsPage, {}, [className])}>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />
      <WriteArticleReview id={id} />
      <ArticleRecommendationsList />
      <ArticleDetailsComments id={id} />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
