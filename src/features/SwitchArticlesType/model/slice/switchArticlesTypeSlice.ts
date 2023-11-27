import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleTypes } from 'entities/Article/model/types/article';
import { SwitchArticlesTypeSchema } from '../types/switchArticlesType';

const initialState: SwitchArticlesTypeSchema = {
  type: ArticleTypes.ALL,
};

export const articlesSearchSlice = createSlice({
  name: 'articlesSearch',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<ArticleTypes>) => {
      state.type = action.payload;
    },
  },
});

export const { setType } = articlesSearchSlice.actions;
export const { reducer: switchArticlesTypeReducer } = articlesSearchSlice;
