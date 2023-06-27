import {
  ProfileCard,
  ValidateProfileErrors,
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileValidateErrors,
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
import { Currencies } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { Typography } from 'shared/ui';
import { TypographyVariants } from 'shared/ui/Typography/Typography';
import { useTranslation, TFunction } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  useDynamicModuleLoader(reducers);
  const formData = useSelector(getProfileFormData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validationErrorTranslates: Record<ValidateProfileErrors, TFunction> = {
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('incorrect user data'),
    [ValidateProfileErrors.INCORRECT_CITY]: t('incorrect city'),
    [ValidateProfileErrors.INCORRECT_COUNTRY]: t('incorrect country'),
    [ValidateProfileErrors.INCORRECT_CURRENCY]: t('incorrect currency'),
    [ValidateProfileErrors.NO_DATA]: t('no data'),
    [ValidateProfileErrors.SERVER_ERROR]: t('server error'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('incorrect age'),
  };

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ firstName: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ lastName: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency?: Currencies) => {
      dispatch(updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country?: Countries) => {
      dispatch(updateProfile({ country }));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchProfileData());
  });

  return (
    <div>
      <ProfilePageHeader />
      {validateErrors?.length
        && validateErrors.map((error) => (
          <Typography
            variant={TypographyVariants.ERROR}
            text={validationErrorTranslates[error]}
            key={error}
          />
        ))}
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
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  );
};

export default ProfilePage;
