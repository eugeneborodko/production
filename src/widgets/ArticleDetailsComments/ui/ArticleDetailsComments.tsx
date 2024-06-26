import { Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleCommentsLoading } from '../model/selectors/articleDetailsCommentSelectors';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { Loader, Typography } from '@/shared/ui/deprecated';
import { VStack } from '@/shared/ui/redesigned';

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
          <Suspense fallback={<Loader />}>
            <AddCommentForm id={id} />
          </Suspense>

          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
      </VStack>
    );
  },
);
