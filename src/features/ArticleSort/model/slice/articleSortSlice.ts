import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ArticleSortSchema } from '../types/articleSortSchema';

import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

const initialState: ArticleSortSchema = {
  order: 'desc',
  sort: ArticleSortField.CREATED_AT,
};

const articleSortSlice = createSlice({
  name: 'articleSortSlice',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
  },
});

export const { setOrder, setSort } = articleSortSlice.actions;
export const { reducer: articleSortReducer } = articleSortSlice;
