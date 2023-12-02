import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleView } from '@/entities/Article';
import { ArticlesViewSchema } from '../types/articlesViewSchema';

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
