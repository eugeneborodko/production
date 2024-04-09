import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Typography } from '@/shared/ui/deprecated';
import { VStack } from '@/shared/ui/redesigned';

interface CommentListProps {
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = ({ comments, isLoading }) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="4">
        <CommentCard isLoading fullWidth />
        <CommentCard isLoading fullWidth />
        <CommentCard isLoading fullWidth />
      </VStack>
    );
  }

  return (
    <VStack gap="8" data-testId="CommentList">
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            comment={comment}
            isLoading={isLoading}
            key={comment.id}
            fullWidth
          />
        ))
      ) : (
        <Typography text={t('no comments')} />
      )}
    </VStack>
  );
};
