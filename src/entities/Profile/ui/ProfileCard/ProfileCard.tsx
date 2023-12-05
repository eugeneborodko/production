import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../../Profile';
import { Countries, CountrySelect } from '@/entities/Country';
import { Currencies, CurrencySelect } from '@/entities/Currency';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import {
  Avatar, HStack, Input, Loader, Typography, VStack,
} from '@/shared/ui';
import { TypographyVariants } from '@/shared/ui/Typography';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
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

export const ProfileCard: FC<ProfileCardProps> = ({
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

  const modes: Modes = {
    [classes.editing]: !readOnly,
  };

  return (
    <VStack
      className={classNames(classes.profileCard, modes, [className])}
      align="center"
      gap="16"
    >
      {isLoading && <Loader />}
      {error && (
        <Typography
          variant={TypographyVariants.ERROR}
          title={t('error occurred')}
          text={t('refresh page')}
        />
      )}
      {!isLoading && !error && (
        <>
          {data?.avatar && (
            <HStack justify="center">
              <Avatar src={data.avatar} alt={data?.username} />
            </HStack>
          )}
          <VStack gap="16">
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
              type="number"
              value={String(data?.age)}
              placeholder={t('Your age')}
              onChange={onChangeAge}
              readOnly={readOnly}
              fullWidth
            />
            <Input
              value={data?.city}
              placeholder={t('Your city')}
              onChange={onChangeCity}
              readOnly={readOnly}
              fullWidth
            />
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
          </VStack>
          <HStack justify="between">
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
          </HStack>
        </>
      )}
    </VStack>
  );
};
