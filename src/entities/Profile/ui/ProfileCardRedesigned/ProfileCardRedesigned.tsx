import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Profile } from '../..';
import { Countries, CountrySelect } from '@/entities/Country';
import { Currencies, CurrencySelect } from '@/entities/Currency';
import { Input, Loader, Typography } from '@/shared/ui/deprecated';
import { TypographyVariants } from '@/shared/ui/deprecated/Typography';
import { HStack } from '@/shared/ui/redesigned';
import classes from './ProfileCardRedesigned.module.scss';

interface ProfileCardRedesignedProps {
  className?: string;
  data?: Profile | undefined;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currencies) => void;
  onChangeCountry?: (country?: Countries) => void;
}

export const ProfileCardRedesigned: FC<ProfileCardRedesignedProps> = ({
  className,
  data,
  isLoading,
  error,
  readOnly,
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

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Typography
          variant={TypographyVariants.ERROR}
          title={t('error occurred')}
          text={t('refresh page')}
        />
      )}
      {!isLoading && !error && (
        <HStack align="start">
          <div className={classes.column}>
            <Input
              value={data?.firstName}
              placeholder={t('Your first name')}
              onChange={onChangeFirstName}
              readOnly={readOnly}
              fullWidth
              data-testid="ProfileCard.FirstName"
            />
            <Input
              value={data?.lastName}
              placeholder={t('Your last name')}
              onChange={onChangeLastName}
              readOnly={readOnly}
              fullWidth
              data-testid="ProfileCard.LastName"
            />
            <Input
              value={String(data?.age)}
              placeholder={t('Your age')}
              onChange={onChangeAge}
              readOnly={readOnly}
              fullWidth
              data-testid="ProfileCard.Age"
            />
            <Input
              value={data?.city}
              placeholder={t('Your city')}
              onChange={onChangeCity}
              readOnly={readOnly}
              fullWidth
            />
          </div>
          <div className={classes.column}>
            <Input
              value={data?.username}
              placeholder={t('Your username')}
              onChange={onChangeUsername}
              readOnly={readOnly}
              fullWidth
            />
            <Input
              value={data?.avatar}
              placeholder={t('Your avatar')}
              onChange={onChangeAvatar}
              readOnly={readOnly}
              fullWidth
            />
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
        </HStack>
      )}
    </>
  );
};
