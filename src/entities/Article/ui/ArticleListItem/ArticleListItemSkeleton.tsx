import { FC } from 'react';
import { ArticleView } from '../../../Article/model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/Skeleton';
import classes from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({
  className,
  view = 'tile',
}) => {
  if (view === 'grid') {
    return (
      <div
        className={classNames(classes.articleListItem, {}, [
          className,
          classes[view],
        ])}
      >
        <Card className={classes.card}>
          <header className={classes.header}>
            <Skeleton
              className={classes.avatar}
              width={30}
              height={30}
              borderRadius="50%"
            />
            <Skeleton className={classes.username} width={150} height={16} />
            <Skeleton className={classes.date} width={100} height={16} />
          </header>
          <Skeleton className={classes.title} width={250} height={24} />
          <Skeleton className={classes.image} width="100%" height={250} />
          <footer className={classes.footer}>
            <Skeleton className={classes.footer} width={200} height={36} />
          </footer>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(classes.articleListItem, {}, [
        className,
        classes[view],
      ])}
    >
      <Card className={classes.card}>
        <div className={classes.imageWrapper}>
          <Skeleton className={classes.image} width={200} height={200} />
        </div>
        <div className={classes.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton className={classes.title} width={150} height={16} />
      </Card>
    </div>
  );
};
