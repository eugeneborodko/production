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
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeCity: (value: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
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
            value={data?.firstName}
            placeholder={t('Your first name')}
            onChange={onChangeFirstName}
            readOnly={readOnly}
          />
          <Input
            className={classes.input}
            value={data?.lastName}
            placeholder={t('Your last name')}
            onChange={onChangeLastName}
            readOnly={readOnly}
          />
          <Input
            className={classes.input}
            type="number"
            value={data?.age}
            placeholder={t('Your age')}
            onChange={onChangeAge}
            readOnly={readOnly}
          />
          <Input
            className={classes.input}
            value={data?.city}
            placeholder={t('Your city')}
            onChange={onChangeCity}
            readOnly={readOnly}
          />
        </div>
      )}
    </div>
  );
};
