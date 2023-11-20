import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageCommentsReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsPageCommentsReducer,
  recommendations: articleDetailsPageRecommendationsReducer,
});
