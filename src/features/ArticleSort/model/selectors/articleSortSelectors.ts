import { StateSchema } from 'app/providers/StoreProvider';

// export const getArticlesView = (state: StateSchema) => state.articlesPage?.view || 'tile';
export const getArticlesView = (state: StateSchema) => state.articleSort?.view || 'tile';
