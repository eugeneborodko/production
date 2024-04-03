import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from '../../../Article/model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Typography } from '@/shared/ui/deprecated';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
      <div
        className={classNames(classes.articleTextBlockComponent, {}, [className])}
      >
        {block.title && (
          <Typography className={classes.title} title={block.title} />
        )}
        {block.paragraphs.map((paragraph) => (
          <Typography className={classes.paragraph} text={paragraph} key={paragraph} />
        ))}
      </div>
    );
  },
);
