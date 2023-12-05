import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getPageScrollPosition = (state: StateSchema) => state.scroll.scrollPosition;
export const getPageScrollPositionByPath = createSelector(
  getPageScrollPosition,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
