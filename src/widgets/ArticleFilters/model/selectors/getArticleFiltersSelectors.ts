import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleTypes } from '@/entities/Article';

export const getArticleFiltersSearch = (state: StateSchema) => state.articleFilters?.search || '';
export const getArticleFiltersType = (state: StateSchema) => state.articleFilters?.type || ArticleTypes.ALL;
export const getArticleFiltersOrder = (state: StateSchema) => state.articleFilters?.order || 'asc';
export const getArticleFiltersSort = (state: StateSchema) => state.articleFilters?.sort || ArticleSortField.VIEWS;
export const getArticleFiltersIsLoading = (state: StateSchema) => state.articleFilters?.isLoading || false;
export const getArticleFiltersError = (state: StateSchema) => state.articleFilters?.error || '';
export const getArticleFiltersPage = (state: StateSchema) => state.articleFilters?.page || 1;
export const getArticleFiltersLimit = (state: StateSchema) => state.articleFilters?.limit || 9;
export const getArticleFiltersHasMore = (state: StateSchema) => state.articleFilters?.hasMore || false;
export const getArticleFiltersInited = (state: StateSchema) => state.articleFilters?._inited || false;
