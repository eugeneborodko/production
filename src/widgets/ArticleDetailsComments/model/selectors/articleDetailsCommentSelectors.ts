import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) return false;

    return article.user.id === user.id;
  },
);
