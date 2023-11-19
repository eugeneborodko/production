import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { ArticleTypes } from 'entities/Article/model/types/article';

export const getArticlesSort = (state: StateSchema) => state.articleSort?.sort || ArticleSortField.CREATED_AT;
export const getArticlesOrder = (state: StateSchema) => state.articleSort?.order || 'desc';
export const getArticlesSearch = (state: StateSchema) => state.articleSort?.search || '';
export const getArticlesType = (state: StateSchema) => state.articleSort?.type || ArticleTypes.ALL;
