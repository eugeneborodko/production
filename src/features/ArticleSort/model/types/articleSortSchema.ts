import { ArticleSortField, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types/sort';

export interface ArticleSortSchema {
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  view: ArticleView;
}
