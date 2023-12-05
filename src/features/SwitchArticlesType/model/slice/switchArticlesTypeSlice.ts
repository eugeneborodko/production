import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SwitchArticlesTypeSchema } from '../types/switchArticlesType';

import { ArticleTypes } from '@/entities/Article';

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
