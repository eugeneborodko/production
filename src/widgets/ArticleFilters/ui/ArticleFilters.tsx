import { useArticleFilters } from '../lib/hooks/useArticleFilters';
import { articleFilterReducer } from '../model/slices/articleFiltersSlice';
import { ArticleSort } from '@/features/ArticleSort';
import { ArticleTabs } from '@/features/ArticleTabs';
import { ArticlesSearch } from '@/features/ArticlesSearch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { Card } from '@/shared/ui/redesigned';

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
    <Card>
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
