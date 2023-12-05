import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ArticlesViewSchema } from '../types/articlesViewSchema';

import { ArticleView } from '@/entities/Article';

const initialState: ArticlesViewSchema = {
  view: 'tile',
};

const switchArticlesViewSlice = createSlice({
  name: 'switchArticlesViewSlice',
  initialState,
  reducers: {
    setArticlesView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
    },
  },
});

export const { setArticlesView } = switchArticlesViewSlice.actions;
export const { reducer: switchArticlesViewReducer } = switchArticlesViewSlice;
