import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Typography, VStack } from 'shared/ui';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { getArticleCommentsLoading } from '../model/selectors/articleDetailsCommentSelectors';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
  id: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsComments = memo(
  ({ id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsLoading);

    useDynamicModuleLoader(reducers, false);

    return (
      <VStack gap="8">
        <Typography title={t('comments')} />
        <VStack gap="16">
          <AddCommentForm id={id} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
      </VStack>
    );
  },
);
