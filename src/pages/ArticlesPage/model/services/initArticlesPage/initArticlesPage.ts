import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { setInited, setLimit } from '../../slices/articlesPageSlice';
import { ArticlesSortParams } from '../../types/articlesPageSchema';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from '@/entities/Article';
import { setOrder, setSort } from '@/features/ArticleSort';
import { setSearch } from '@/features/ArticlesSearch';
import { setArticlesView } from '@/features/SwitchArticlesView';
import { LOCAL_STORAGE_ARTICLES_VIEW } from '@/shared/consts/localStorage';
import { SortOrder } from '@/shared/types/sort';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, { dispatch, getState }) => {
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      searchParams.forEach((searchParam, key) => {
        switch (key as ArticlesSortParams) {
        case 'order':
          dispatch(setOrder(searchParam as SortOrder));
          break;
        case 'sort':
          dispatch(setSort(searchParam as ArticleSortField));
          break;
        case 'search':
          dispatch(setSearch(searchParam));
          break;
        default:
          break;
        }
      });

      const storedView = (localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticleView)
        || 'tile';

      dispatch(setArticlesView(storedView));
      dispatch(setLimit(storedView === 'tile' ? 8 : 4));
      dispatch(fetchArticlesList({}));
      dispatch(setInited());
    }
  },
);
