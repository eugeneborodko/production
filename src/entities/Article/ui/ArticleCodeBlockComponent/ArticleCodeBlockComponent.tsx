import { memo } from 'react';

import { ArticleCodeBlock } from '../../../Article/model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui';

import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  block: ArticleCodeBlock;
  className?: string;
}

export const ArticleCodeBlockComponent = memo(
  ({ block, className }: ArticleCodeBlockComponentProps) => (
    <div className={classNames(classes.articleCodeBlockComponent, {}, [
      className,
    ])}
    >
      <Code text={block.code} />
    </div>
  ),
);
