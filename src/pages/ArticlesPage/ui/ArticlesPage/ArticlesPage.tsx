import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '@/entities/Article';
import {
  SwitchArticlesViewRedesigned,
  getArticlesView,
} from '@/features/SwitchArticlesView';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned';
import {
  ArticleFilters,
  fetchNextArticlePage,
  getArticleFiltersIsLoading,
  getArticles,
  initArticleFilters,
} from '@/widgets/ArticleFilters';
import { Page } from '@/widgets/Page';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticleFiltersIsLoading);
  const view = useSelector(getArticlesView);

  useInitialEffect(() => {
    dispatch(initArticleFilters(searchParams));
  });

  const onLoadMoreArticles = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  // TODO
  // if (error) {}

  // TODO: add ArticleInfiniteLIst feature instead of ArticleList entity

  const content = (
    <ToggleFeature
      feature="isAppRedesigned"
      on={(
        <StickyContentLayout
          left={<SwitchArticlesViewRedesigned />}
          content={(
            <Page
              onScrollEnd={onLoadMoreArticles}
              className={classNames('', {}, [className])}
              data-testid="ArticlesPage"
            >
              <VStack gap="16">
                <ArticleList
                  view={view}
                  isLoading={isLoading}
                  articles={articles}
                />
              </VStack>
            </Page>
          )}
          right={<ArticleFilters />}
        />
      )}
      off={(
        <Page
          onScrollEnd={onLoadMoreArticles}
          className={classNames('', {}, [className])}
          data-testid="ArticlesPage"
        >
          <VStack gap="16">
            <ArticleList
              view={view}
              isLoading={isLoading}
              articles={articles}
            />
          </VStack>
        </Page>
      )}
    />
  );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{content}</>;
};

export default memo(ArticlesPage);
