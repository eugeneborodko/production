import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleSortField } from 'entities/Article/index';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortSchema } from '../types/articleSortSchema';

const initialState: ArticleSortSchema = {
  order: 'desc',
  sort: ArticleSortField.CREATED_AT,
  search: '',
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
    setSearch: (state, action: PayloadAction<string>) => { // TODO: might worth to move into a separate search component - 59 comments
      state.search = action.payload;
    },
  },
});

export const { setOrder, setSort, setSearch } = articleSortSlice.actions;
export const { reducer: articleSortReducer } = articleSortSlice;
