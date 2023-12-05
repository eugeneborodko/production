import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleTypes } from '@/entities/Article';

export const getArticlesType = (state: StateSchema) => state.switchArticlesType?.type || ArticleTypes.ALL;
