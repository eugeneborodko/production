import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Button, Input, Typography } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(classes.profileCard, {}, [className])}>
      <div className={classes.profileHeader}>
        <Typography title={t('profile')} />
        <Button className={classes.editButton}>{t('edit profile')}</Button>
      </div>
      <div className={classes.profileData}>
        <Input
          className={classes.input}
          value={profileData?.first}
          placeholder={t('Your first name')}
          onChange={() => console.log('1')}
        />
        <Input
          className={classes.input}
          value={profileData?.lastname}
          placeholder={t('Your last name')}
          onChange={() => console.log('')}
        />
      </div>
    </div>
  );
};
