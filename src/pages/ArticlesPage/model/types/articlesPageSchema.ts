import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  page: number;
  limit?: number;
  hasMore: boolean;
  inited: boolean;
}

export type ArticlesSortParams = 'order' | 'sort' | 'search'
