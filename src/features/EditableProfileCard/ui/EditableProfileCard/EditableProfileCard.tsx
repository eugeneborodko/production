import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ValidateProfileErrors } from '../../model/consts/consts';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileReducer, updateProfile } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Typography } from '@/shared/ui/deprecated';
import { TypographyVariants } from '@/shared/ui/deprecated/Typography';
import { VStack } from '@/shared/ui/redesigned';

export interface EditableProfileCardProps {
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ id }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const isProfileLoading = useSelector(getProfileIsLoading);
  const profileError = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);
  const readOnly = useSelector(getProfileReadOnly);

  useDynamicModuleLoader(reducers);

  const validationErrorTranslates: Record<ValidateProfileErrors, string> = {
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
    if (!id) return;
    dispatch(fetchProfileData(id));
  });

  return (
    <VStack gap="16">
      <EditableProfileCardHeader />
      {validateErrors?.length
        && validateErrors.map((error) => (
          <Typography
            variant={TypographyVariants.ERROR}
            text={validationErrorTranslates[error]}
            key={error}
            data-testid="EditableProfileCard.Error"
          />
        ))}
      <ProfileCard
        data={formData}
        isLoading={isProfileLoading}
        error={profileError}
        readOnly={readOnly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </VStack>
  );
};
