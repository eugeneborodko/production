import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import {
  cancelEdit,
  saveProfile,
  setReadOnlyProfile,
} from '../../model/slice/profileSlice';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, Typography } from '@/shared/ui/deprecated';
import { ButtonVariants } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned';

interface EditableProfileCardHeaderDeprecatedProps {
  className?: string;
}

export const EditableProfileCardHeaderDeprecated: FC<
  EditableProfileCardHeaderDeprecatedProps
> = ({ className }) => {
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
    <HStack justify="between">
      <Typography title={t('profile')} />
      {canEdit && (
        <div>
          {readOnly ? (
            <Button
              variant={ButtonVariants.OUTLINED}
              onClick={onEdit}
              data-testid="EditableProfileCardHeader.EditButton"
            >
              {t('edit profile')}
            </Button>
          ) : (
            <HStack gap="16">
              <Button
                variant={ButtonVariants.OUTLINED_GREEN}
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveButton"
              >
                {t('save')}
              </Button>
              <Button
                variant={ButtonVariants.OUTLINED_RED}
                onClick={onCancel}
                data-testid="EditableProfileCardHeader.CancelButton"
              >
                {t('cancel')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};
