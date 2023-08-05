import { ArticleList, ArticleView } from 'entities/Article';
import { SwitchArticlesView } from 'features/SwitchArticlesView';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'shared/ui';
import {
  getArticlesLimit,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  articlesPageReducer,
  getArticles,
  setLimit,
  setPageView,
} from '../model/slices/articlesPageSlice';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const [isLimitInitialized, setIsLimitInitialized] = useState<boolean>(false);

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const limit = useSelector(getArticlesLimit);

  useDynamicModuleLoader(reducers);

  useInitialEffect(() => {
    const storedView = (localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticleView)
      || 'tile';

    dispatch(setPageView(storedView));
    dispatch(setLimit(storedView === 'tile' ? 8 : 4));
    setIsLimitInitialized(true);
    if (isLimitInitialized) {
      dispatch(fetchArticlesList({ page: 1, limit }));
    }
  });

  const onLoadMoreArticles = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(setPageView(view));
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
      <SwitchArticlesView view={view} onViewClick={onChangeView} />
      <ArticleList view={view} isLoading={isLoading} articles={articles} />
    </Page>
  );
};

export default memo(ArticlesPage);
