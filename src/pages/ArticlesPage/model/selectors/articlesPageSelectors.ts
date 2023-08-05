import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || 'tile';
export const getArticlesPage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesLimit = (state: StateSchema) => (state.articlesPage?.limit || 8);
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
