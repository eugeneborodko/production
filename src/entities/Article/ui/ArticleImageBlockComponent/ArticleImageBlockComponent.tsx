import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Typography } from '@/shared/ui';
import { TextAlign } from '@/shared/ui/Typography';
import { ArticleImageBlock } from '../../../Article/model/types/article';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => (
    <div
      className={classNames(classes.articleImageBlockComponent, {}, [
        className,
      ])}
    >
      <img className={classes.image} src={block.src} alt={block.title} />
      {block.title && <Typography text={block.title} align={TextAlign.CENTER} />}
    </div>
  ),
);
