import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPositionSchema } from '../types/saveScrollPosition';

const initialState: ScrollPositionSchema = {
  scrollPosition: {},
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; scrollPosition: number }>,
    ) => {
      state.scrollPosition[payload.path] = payload.scrollPosition;
    },

    // setScrollPosition({path: '/about', scrollPosition: 500})

    // reducer:
    // scroll: {
    // '/about': 500,
    // '/home': 700,
    // }
  },
});

export const { setScrollPosition } = pageSlice.actions;
export const { reducer: pageReducer } = pageSlice;
