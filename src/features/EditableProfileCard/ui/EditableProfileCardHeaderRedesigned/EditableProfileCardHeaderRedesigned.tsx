import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import {
  cancelEdit,
  saveProfile,
  setReadOnlyProfile,
} from '../../model/slice/profileSlice';
import { ProfileCardHeader } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface EditableProfileCardHeaderRedesignedProps {
  avatar: string | undefined;
  username: string | undefined;
}

export const EditableProfileCardHeaderRedesigned = ({
  avatar,
  username,
}: EditableProfileCardHeaderRedesignedProps) => {
  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);

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
    <ProfileCardHeader
      avatar={avatar}
      username={username}
      onSave={onSave}
      onCancel={onCancel}
      onEdit={onEdit}
      readOnly={readOnly}
    />
  );
};
