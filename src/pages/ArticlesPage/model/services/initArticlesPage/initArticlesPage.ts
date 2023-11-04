import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'shared/const/localstorage';
import { setArticlesView } from 'features/SwitchArticlesView';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { setInited, setLimit } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, { dispatch, getState }) => {
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    const storedView = (localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticleView)
      || 'tile';

    dispatch(setArticlesView(storedView));
    dispatch(setLimit(storedView === 'tile' ? 8 : 4));
    dispatch(setInited());
    // setIsLimitInitialized(true);

    // if (isLimitInitialized) {
    //   dispatch(fetchArticlesList({ page: 1, limit }));
    // }
  }
});
