import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';
import { ArticleFiltersSchema } from '../types/articleFiltersSchema';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleTypes } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articleFilters || articlesAdapter.getInitialState(),
);

const articleFiltersSlice = createSlice({
  name: 'articleFiltersSlice',
  initialState: articlesAdapter.getInitialState<ArticleFiltersSchema>({
    search: '',
    type: ArticleTypes.ALL,
    sort: ArticleSortField.VIEWS,
    order: 'asc',
    entities: {},
    ids: [],
    limit: 9,
    hasMore: true,
    page: 1,
    isLoading: false,
    error: undefined,
    _inited: false,
  }),
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleTypes>) => {
      state.type = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setInited: (state) => {
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length > 0; // TODO: >= state.limit
        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setSearch,
  setOrder,
  setSort,
  setType,
  setPage,
  setLimit,
  setInited,
} = articleFiltersSlice.actions;
export const { reducer: articleFilterReducer } = articleFiltersSlice;
