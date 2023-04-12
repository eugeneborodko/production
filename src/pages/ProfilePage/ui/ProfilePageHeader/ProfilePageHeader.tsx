import { memo, useCallback } from 'react';
import { Typography, Button } from 'shared/ui';
import { ButtonVariants } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getProfileReadOnly, setReadOnlyProfile } from 'entities/Profile';
import { useSelector } from 'react-redux';
import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo(
  ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readOnly = useSelector(getProfileReadOnly);

    const onEdit = useCallback(() => {
      dispatch(setReadOnlyProfile(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
      dispatch(setReadOnlyProfile(true));
    }, [dispatch]);

    return (
      <div className={classes.profilePageHeader}>
        <Typography title={t('profile')} />
        {readOnly ? (
          <Button
            className={classes.editButton}
            variant={ButtonVariants.OUTLINED}
            onClick={onEdit}
          >
            {t('edit profile')}
          </Button>
        ) : (
          <Button
            className={classes.cancelButton}
            variant={ButtonVariants.OUTLINED_GREEN}
            onClick={onCancel}
          >
            {t('cancel')}
          </Button>
        )}
      </div>
    );
  },
);
