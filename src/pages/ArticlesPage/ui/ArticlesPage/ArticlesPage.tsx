import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getArticlesPageIsLoading } from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageReducer,
  getArticles,
  setPage,
} from '../../model/slices/articlesPageSlice';
import { ArticleList } from '@/entities/Article';
import { articleSortReducer } from '@/features/ArticleSort';
import {
  getArticlesView,
  switchArticlesViewReducer,
} from '@/features/SwitchArticlesView';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { VStack } from '@/shared/ui';
import { ArticleDetailsFilters } from '@/widgets/ArticleDetailsFilters';
import { Page } from '@/widgets/Page';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
  articleSort: articleSortReducer,
  articlesView: switchArticlesViewReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesView);

  const fetchFiltersData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true, setSearchParams }));
  }, [dispatch, setSearchParams]);

  useDynamicModuleLoader(reducers, false);
  const debouncedFetchFiltersData = useDebounce(fetchFiltersData, 500);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadMoreArticles = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  // TODO
  // if (error) {}

  // TODO: add ArticleInfiniteLIst feature instead of ArticleList entity

  return (
    <Page
      onScrollEnd={onLoadMoreArticles}
      className={classNames('', {}, [className])}
      data-testid="ArticlesPage"
    >
      <VStack gap="16">
        <ArticleDetailsFilters
          fetchFiltersData={debouncedFetchFiltersData}
          setPage={setPage} // TODO: refactor
        />
        <ArticleList
          className={classes.list}
          view={view}
          isLoading={isLoading}
          articles={articles}
        />
      </VStack>
    </Page>
  );
};

export default memo(ArticlesPage);
