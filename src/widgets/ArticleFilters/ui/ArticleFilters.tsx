import { useArticleFilters } from '../lib/hooks/useArticleFilters';
import { articleFilterReducer } from '../model/slices/articleFiltersSlice';
import { ArticleSort } from '@/features/ArticleSort';
import { ArticleTabs } from '@/features/ArticleTabs';
import { ArticlesSearch } from '@/features/ArticlesSearch';
import { getVStack } from '@/shared/lib/helpers/flex';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { Card } from '@/shared/ui/redesigned';
import classes from './ArticleFilters.module.scss';

const reducers: ReducersList = {
  articleFilters: articleFilterReducer,
};

export const ArticleFilters = () => {
  useDynamicModuleLoader(reducers);

  const {
    sort,
    order,
    type,
    search,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
  } = useArticleFilters();

  return (
    <Card
      className={classes.articleFilters}
      padding="24"
      border="round"
      style={getVStack({ gap: '24' })}
    >
      <ArticlesSearch search={search} onChangeSearch={onChangeSearch} />
      <ArticleTabs type={type} onChangeType={onChangeType} />
      <ArticleSort
        order={order}
        sort={sort}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
      />
    </Card>
  );
};
