import { FC } from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';
import {
  Avatar, Input, Loader, Typography,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { Profile, getProfileReadOnly } from 'entities/Profile';
import { TypographyVariants } from 'shared/ui/Typography/Typography';
import { useSelector } from 'react-redux';
import { Currencies, CurrencySelect } from 'entities/Currency';
import { Countries, CountrySelect } from 'entities/Country';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile | undefined;
  isLoading?: boolean;
  error?: string;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currencies) => void;
  onChangeCountry?: (country?: Countries) => void;
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
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  const readOnly = useSelector(getProfileReadOnly);

  const modes: Modes = {
    [classes.editing]: !readOnly,
  };

  return (
    <div className={classNames(classes.profileCard, modes, [className])}>
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
          {data?.avatar && (
            <div className={classes.avatarWrapper}>
              <Avatar src={data.avatar} alt={data?.username} />
            </div>
          )}
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
            value={String(data?.age)}
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
          <Input
            className={classes.input}
            value={data?.username}
            placeholder={t('Your username')}
            onChange={onChangeUsername}
            readOnly={readOnly}
          />
          <Input
            className={classes.input}
            value={data?.avatar}
            placeholder={t('Your avatar')}
            onChange={onChangeAvatar}
            readOnly={readOnly}
          />
          <div className={classes.selectWrapper}>
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readOnly={readOnly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readOnly={readOnly}
            />
          </div>
        </div>
      )}
    </div>
  );
};
