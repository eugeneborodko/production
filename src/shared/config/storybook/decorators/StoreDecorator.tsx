import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { articleRecommendationsReducer } from 'features/ArticleRecommendationsList';
import { articleSortReducer } from 'features/ArticleSort/model/slice/articleSortSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { switchArticlesViewReducer } from 'features/SwitchArticlesView';
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader';
import { articleDetailsCommentsReducer } from 'widgets/ArticleDetailsComments';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  articleRecommendations: articleRecommendationsReducer,
  articleSort: articleSortReducer,
  articlesView: switchArticlesViewReducer,
};

// eslint-disable-next-line max-len
export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
