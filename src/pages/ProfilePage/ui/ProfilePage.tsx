import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  profileReducer,
  updateProfile,
} from 'entities/Profile';

import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  useDynamicModuleLoader(reducers);
  const formData = useSelector(getProfileFormData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(updateProfile({ firstName: value || '' }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(updateProfile({ lastName: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(updateProfile({ age: Number(value) || 0 }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
      />
    </div>
  );
};

export default ProfilePage;
