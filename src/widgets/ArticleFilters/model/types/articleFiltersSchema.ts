import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleTypes } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticleFiltersSchema extends EntityState<Article> {
  search: string;
  type: ArticleTypes;
  sort: ArticleSortField;
  order: SortOrder;
  limit: number;
  hasMore: boolean;
  page: number;
  isLoading?: boolean;
  error?: string;
  _inited: boolean;
}

export type ArticleSortParams = 'order' | 'sort' | 'search';
