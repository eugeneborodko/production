import { memo, useCallback } from 'react';

import { Button, ButtonVariants } from '../Button/Button';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import classes from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(classes.code, {}, [className])}>
      <Button
        className={classes.copyButton}
        variant={ButtonVariants.TEXT}
        onClick={onCopy}
      >
        <CopyIcon />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
