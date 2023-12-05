import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesSearchSchema } from '../types/articlesSearch';

const initialState: ArticlesSearchSchema = {
  search: '',
};

export const articlesSearchSlice = createSlice({
  name: 'articlesSearch',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = articlesSearchSlice.actions;
export const { reducer: articlesSearchReducer } = articlesSearchSlice;
