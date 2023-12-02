import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui';
import { Countries } from '../../model/types/country';

const countries = [
  { value: Countries.USA, content: Countries.USA },
  {
    value: Countries.POLAND,
    content: Countries.POLAND,
  },
  {
    value: Countries.BELARUS,
    content: Countries.BELARUS,
  },
];

interface CountrySelectProps {
  className?: string;
  value?: Countries;
  onChange?: (value: Countries) => void;
  readOnly?: boolean;
}

export const CountrySelect = memo(
  ({
    className, value, onChange, readOnly,
  }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Countries);
      },
      [onChange],
    );

    return (
      <Select
        className={className}
        label={t('Your country')}
        options={countries}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
      />
    );
  },
);
