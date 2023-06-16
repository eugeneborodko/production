import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar, Typography } from 'shared/ui';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../index';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
      return (
        <div className={classNames(classes.commentCard, {}, [className])}>
          <div className={classes.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton className={classes.username} width={150} height={20} />
          </div>
          <Skeleton className={classes.text} width="100%" height={50} />
        </div>
      );
    }

    return (
      <div className={classNames(classes.commentCard, {}, [className])}>
        <div className={classes.header}>
          {comment.user.avatar && (
            <Avatar size={30} src={comment.user.avatar} />
          )}
          <Typography
            className={classes.username}
            title={comment.user.username}
          />
        </div>
        <Typography className={classes.text} text={comment.text} />
      </div>
    );
  },
);
