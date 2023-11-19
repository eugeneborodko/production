import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleSortField } from 'entities/Article/index';
import { SortOrder } from 'shared/types/sort';
import { ArticleTypes } from 'entities/Article/model/types/article';
import { ArticleSortSchema } from '../types/articleSortSchema';

const initialState: ArticleSortSchema = {
  order: 'desc',
  sort: ArticleSortField.CREATED_AT,
  search: '',
  type: ArticleTypes.ALL,
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
      // TODO: might worth to move into a separate search component - 59
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleTypes>) => {
      // TODO: might worth to move into a separate search component - 59
      state.type = action.payload;
    },
  },
});

export const {
  setOrder, setSort, setSearch, setType,
} = articleSortSlice.actions;
export const { reducer: articleSortReducer } = articleSortSlice;
