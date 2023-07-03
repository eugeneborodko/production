import {
  cancelEdit,
  getProfileData,
  getProfileReadOnly,
  saveProfile,
  setReadOnlyProfile,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, Typography } from 'shared/ui';
import { ButtonVariants } from 'shared/ui/Button/Button';
import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo(
  ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readOnly = useSelector(getProfileReadOnly);
    const authData = useSelector(getUserAuthData); // TODO: use reselect to combine authData and profileData selectors
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
      dispatch(setReadOnlyProfile(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
      dispatch(cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(saveProfile());
      dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <div className={classes.profilePageHeader}>
        <Typography title={t('profile')} />
        {canEdit && (
          <div>
            {readOnly ? (
              <Button
                className={classes.editButton}
                variant={ButtonVariants.OUTLINED}
                onClick={onEdit}
              >
                {t('edit profile')}
              </Button>
            ) : (
              <div>
                <Button
                  className={classes.saveButton}
                  variant={ButtonVariants.OUTLINED_GREEN}
                  onClick={onSave}
                >
                  {t('save')}
                </Button>
                <Button
                  className={classes.cancelButton}
                  variant={ButtonVariants.OUTLINED_RED}
                  onClick={onCancel}
                >
                  {t('cancel')}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);
