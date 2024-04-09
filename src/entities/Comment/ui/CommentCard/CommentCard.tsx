import { memo } from 'react';
import { Comment } from '../../index';
import { getRouteProfile } from '@/shared/consts/router';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, Typography } from '@/shared/ui/deprecated';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/redesigned';
import classes from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const CommentCard = memo(
  ({
    className, comment, isLoading, fullWidth,
  }: CommentCardProps) => {
    const modes: Modes = {
      [classes.fullWidth]: fullWidth,
    };

    if (isLoading) {
      return (
        <div
          className={classNames(classes.commentCard, modes, [
            className,
            classes.loading,
          ])}
        >
          <div className={classes.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton className={classes.username} width={150} height={20} />
          </div>
          <Skeleton className={classes.text} width="100%" height={50} />
        </div>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <div
        className={classNames(classes.commentCard, modes, [className])}
        data-testid={`CommentCard${comment.id}`}
      >
        <AppLink
          className={classes.header}
          to={getRouteProfile(comment.user.id)}
        >
          {comment.user.avatar && (
            <Avatar size={30} src={comment.user.avatar} />
          )}
          <Typography
            className={classes.username}
            title={comment.user.username}
          />
        </AppLink>
        <Typography
          className={classes.text}
          text={comment.text}
          data-testid={`CommentCard${comment.id}`}
        />
      </div>
    );
  },
);
