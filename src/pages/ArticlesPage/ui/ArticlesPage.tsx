import { ArticleList, ArticleView } from 'entities/Article';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { SwitchArticlesView } from 'features/SwitchArticlesView';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'shared/const/localstorage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
  articlesPageReducer,
  getArticles,
  setPageView,
} from '../model/slices/articlesPageSlice';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useDynamicModuleLoader(reducers);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(
      setPageView(
        localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticleView,
      ),
    );
  });

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(setPageView(view));
    },
    [dispatch],
  );

  return (
    <div className={classNames(classes.articlesPage, {}, [className])}>
      <SwitchArticlesView view={view} onViewClick={onChangeView} />
      <ArticleList view={view} isLoading={isLoading} articles={articles} />
    </div>
  );
};

export default memo(ArticlesPage);
