import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
// import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Typography } from '@/shared/ui';
import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsListApi';
// import { getArticleRecommendationsLoading } from '../model/selectors/getArticleRecommendationsList/getArticleRecommendationsList';
// import { fetchArticlesRecommendations } from '../model/services/fetchArticleRecommendationsList/fetchArticleRecommendationsList';
// import { articleRecommendationsReducer } from '../model/slice/articleRecommendationsList';

export interface ArticleRecommendationsListProps {
  className?: string;
}

// const reducers: ReducersList = {
//   articleRecommendations: articleRecommendationsReducer,
// };

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { data: recommendations = [], isLoading } = useGetArticleRecommendationsQuery(4);

  // const recommendations = useSelector(getArticleRecommendations.selectAll);
  // const recommendationsIsLoading = useSelector(
  //   getArticleRecommendationsLoading,
  // );

  // useDynamicModuleLoader(reducers, false);

  // useInitialEffect(() => {
  //   dispatch(fetchArticlesRecommendations());
  // });

  return (
    <div className={classNames('', {}, [className])}>
      <Typography title={t('we recommend')} />
      <ArticleList
        articles={recommendations}
        isLoading={isLoading}
        target="_blank"
      />
    </div>
  );
};
