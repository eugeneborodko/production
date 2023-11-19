import { ArticleSortField } from 'entities/Article';
import { ArticleTypes } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types/sort';

export interface ArticleSortSchema {
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleTypes;
}
