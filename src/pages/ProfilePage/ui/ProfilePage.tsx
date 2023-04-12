import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from 'entities/Profile';

import { useEffect } from 'react';
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
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader />
      <ProfileCard data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default ProfilePage;
