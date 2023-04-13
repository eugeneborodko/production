import { memo, useCallback } from 'react';
import { Select } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { Currencies } from '../../model/types/currency';

const currencies = [
  { value: Currencies.BYN, content: Currencies.USD },
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
  value?: Currencies;
  onChange?: (value: Currencies) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo(
  ({ value, onChange, readOnly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currencies);
      },
      [onChange],
    );

    return (
      <Select
        label={t('Your currency')}
        options={currencies}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
      />
    );
  },
);
