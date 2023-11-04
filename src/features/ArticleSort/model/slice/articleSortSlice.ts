import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleSortField, ArticleView } from 'entities/Article/index';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortSchema } from '../types/articleSortSchema';

const initialState: ArticleSortSchema = {
  order: 'desc',
  sort: ArticleSortField.CREATED_AT,
  search: '',
  view: 'tile',
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
    },
  },
});

export const {
  setOrder, setSort, setSearch, setView,
} = articleSortSlice.actions;
export const { reducer: articleSortReducer } = articleSortSlice;
