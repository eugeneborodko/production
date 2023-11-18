import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';

export const getArticlesSort = (state: StateSchema) => state.articleSort?.sort || ArticleSortField.CREATED_AT;
export const getArticlesOrder = (state: StateSchema) => state.articleSort?.order || 'desc';
