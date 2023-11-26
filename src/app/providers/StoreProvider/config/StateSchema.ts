import {
  AnyAction,
  CombinedState,
  Dispatch,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticleRecommendationsSchema } from 'features/ArticleRecommendationsList';
import { ArticleSortSchema } from 'features/ArticleSort';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticlesViewSchema } from 'features/SwitchArticlesView';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ArticleDetailsCommentsSchema } from 'widgets/ArticleDetailsComments';
import { ScrollPositionSchema } from 'widgets/Page';

export interface StateSchema {
  user: UserSchema;
  scroll: ScrollPositionSchema;

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleRecommendations?: ArticleRecommendationsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleSort?: ArticleSortSchema;
  articlesView?: ArticlesViewSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, actin: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  dispatch?: Dispatch;
  state: StateSchema;
}
