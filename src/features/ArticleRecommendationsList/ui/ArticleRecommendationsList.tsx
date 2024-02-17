import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsListApi';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Typography } from '@/shared/ui';

export interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = ({ className }) => {
  const { t } = useTranslation();

  const { data: recommendations = [], isLoading } = useGetArticleRecommendationsQuery(4);

  return (
    <div className={classNames('', {}, [className])} data-testid="ArticleRecommendationsList">
      <Typography title={t('we recommend')} />
      <ArticleList
        articles={recommendations}
        isLoading={isLoading}
        target="_blank"
      />
    </div>
  );
};
