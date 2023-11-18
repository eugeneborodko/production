import { ArticleList, ArticleSortField, ArticleView } from 'entities/Article';
import {
  SwitchArticlesView,
  getArticlesView,
  setArticlesView,
  switchArticlesViewReducer,
} from 'features/SwitchArticlesView';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'widgets/Page';
import {
  ArticleSort,
  articleSortReducer,
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort,
} from 'features/ArticleSort';
import { Card, Input } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import {
  setOrder,
  setSearch,
  setSort,
} from 'features/ArticleSort/model/slice/articleSortSlice';
import { SortOrder } from 'shared/types/sort';
import { getArticlesPageIsLoading } from '../model/selectors/articlesPageSelectors';

import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageReducer,
  getArticles,
  setPage,
} from '../model/slices/articlesPageSlice';
import classes from './ArticlesPage.module.scss';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
  articleSort: articleSortReducer,
  articlesView: switchArticlesViewReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesView);
  const sort = useSelector(getArticlesSort);
  const order = useSelector(getArticlesOrder);
  const search = useSelector(getArticlesSearch);

  useDynamicModuleLoader(reducers, false);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onLoadMoreArticles = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(setArticlesView(view));
    },
    [dispatch],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(setSort(newSort));
      dispatch(setPage(1));
      dispatch(fetchArticlesList({ replace: true }));
    },
    [dispatch],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(setOrder(newOrder));
      dispatch(setPage(1));
      dispatch(fetchArticlesList({ replace: true }));
    },
    [dispatch],
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(setSearch(newSearch));
      dispatch(setPage(1));
      dispatch(fetchArticlesList({ replace: true }));
    },
    [dispatch],
  );

  // TODO
  // if (error) {}

  return (
    <Page
      onScrollEnd={onLoadMoreArticles}
      className={classNames('', {}, [className])}
    >
      <div className={classes.filters}>
        <ArticleSort
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
          sort={sort}
          order={order}
        />
        <SwitchArticlesView view={view} onViewClick={onChangeView} />
      </div>
      <Card className={classes.search}>
        <Input
          placeholder={t('search')}
          onChange={onChangeSearch}
          value={search}
        />
      </Card>
      <ArticleList
        className={classes.list}
        view={view}
        isLoading={isLoading}
        articles={articles}
      />
    </Page>
  );
};

export default memo(ArticlesPage);
