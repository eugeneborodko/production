import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currencies } from '../../model/types/currency';
import { Select } from '@/shared/ui/deprecated';

const currencies = [
  { value: Currencies.BYN, content: Currencies.BYN },
  {
    value: Currencies.EUR,
    content: Currencies.EUR,
  },
  {
    value: Currencies.USD,
    content: Currencies.USD,
  },
];

interface CurrencySelectProps {
  className?: string;
  value?: Currencies;
  onChange?: (value: Currencies) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo(
  ({
    className, value, onChange, readOnly,
  }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currencies);
      },
      [onChange],
    );

    return (
      <Select
        className={className}
        label={t('Your currency')}
        options={currencies}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
      />
    );
  },
);
