import { ArticleList, ArticleView } from 'entities/Article';
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
import { ArticleSort, articleSortReducer } from 'features/ArticleSort';
import { Card, Input } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { getArticlesPageIsLoading } from '../model/selectors/articlesPageSelectors';

import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageReducer,
  getArticles,
} from '../model/slices/articlesPageSlice';
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
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesView);

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

  // TODO
  // if (error) {}

  return (
    <Page
      onScrollEnd={onLoadMoreArticles}
      className={classNames('', {}, [className])}
    >
      <div className={classes.filters}>
        <ArticleSort />
        <SwitchArticlesView view={view} onViewClick={onChangeView} />
      </div>
      <Card className={classes.search}>
        <Input placeholder={t('search')} />
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
