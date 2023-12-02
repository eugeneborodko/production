import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui';
import { ButtonVariants } from '@/shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(classes.pageError, {}, [className])}>
      <p>{t('error occurred')}</p>
      <Button variant={ButtonVariants.OUTLINED} onClick={refreshPage}>
        {t('refresh page')}
      </Button>
    </div>
  );
});
