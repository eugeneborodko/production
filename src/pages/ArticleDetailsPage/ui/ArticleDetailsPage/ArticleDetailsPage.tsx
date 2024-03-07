import { FC, Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { WriteArticleReview } from '@/features/WriteArticleReview';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getFeatureFlag } from '@/shared/lib/helpers/featureFlags';
import { Loader } from '@/shared/ui';
import { ArticleDetailsComments } from '@/widgets/ArticleDetailsComments';
import { Page } from '@/widgets/Page';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

export type ArticleDetailsParams = {
  id: string;
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<ArticleDetailsParams>();

  const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
  const isArticleCommentsEnabled = getFeatureFlag('isArticleCommentsEnabled');

  if (!id) {
    return <h2>{t('article not found')}</h2>;
  }

  return (
    <Page className={classNames(classes.articleDetailsPage, {}, [className])}>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />
      {isArticleRatingEnabled && <WriteArticleReview articleId={id} />}

      <Suspense fallback={<Loader />}>
        <ArticleRecommendationsList />
      </Suspense>
      {isArticleCommentsEnabled && <ArticleDetailsComments id={id} />}
    </Page>
  );
};

export default memo(ArticleDetailsPage);
