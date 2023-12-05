import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { createReducerManager } from './reducerManager';

import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { pageReducer } from '@/widgets/Page';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scroll: pageReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgs: ThunkExtraArgs = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArgs,
      },
    }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
