import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, Loader, Typography } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { Profile, getProfileReadOnly } from 'entities/Profile';
import { TypographyVariants } from 'shared/ui/Typography/Typography';
import { useSelector } from 'react-redux';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data: Profile | undefined;
  isLoading?: boolean;
  error?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
}) => {
  const { t } = useTranslation('profile');

  const readOnly = useSelector(getProfileReadOnly);

  return (
    <div className={classNames(classes.profileCard, {}, [className])}>
      {isLoading && <Loader />}
      {error && (
        <Typography
          variant={TypographyVariants.ERROR}
          title={t('error occurred')}
          text={t('refresh page')}
        />
      )}
      {!isLoading && !error && (
        <div className={classes.profileData}>
          <Input
            className={classes.input}
            value={data?.first}
            placeholder={t('Your first name')}
            onChange={() => console.log('1')}
            readOnly={readOnly}
          />
          <Input
            className={classes.input}
            value={data?.lastname}
            placeholder={t('Your last name')}
            onChange={() => console.log('2')}
            readOnly={readOnly}
          />
        </div>
      )}
    </div>
  );
};
