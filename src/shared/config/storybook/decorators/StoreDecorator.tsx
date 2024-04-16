import { Story } from '@storybook/react';
import { ReducersList } from '../../../lib/hooks/useDynamicModuleLoader';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
// TODO: imports like import { profileReducer } from '@/features/EditableProfileCard still pass. To fix
// TODO: import like import { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader' still pass. To fix
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { switchArticlesViewReducer } from '@/features/SwitchArticlesView/testing';
import { articleDetailsCommentsReducer } from '@/widgets/ArticleDetailsComments/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
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
