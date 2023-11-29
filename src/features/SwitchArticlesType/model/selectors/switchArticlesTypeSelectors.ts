import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleTypes } from 'entities/Article/model/consts/consts';

export const getArticlesType = (state: StateSchema) => state.switchArticlesType?.type || ArticleTypes.ALL;
