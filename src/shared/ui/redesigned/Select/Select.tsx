import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Select.module.scss';

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

type SelectBorder = 'normal' | 'rounded';

interface SelectProps<T extends string>
  extends Omit<React.HTMLProps<HTMLSelectElement>, 'onChange' | 'value'> {
  className?: string;
  options: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
  border?: SelectBorder;
}

export const Select = <T extends string>({
  // TODO: add memo
  className,
  options,
  value,
  onChange,
  readOnly,
  border = 'rounded',
  ...props
}: SelectProps<T>) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  const optionsList = useMemo(
    () => options.map(({ value, content }) => (
      <option className={classes.option} value={value} key={value}>
        {content}
      </option>
    )),
    [options],
  );

  return (
    <div className={classes.selectWrapper}>
      <select
        className={classNames(classes.select, {}, [className, classes[border]])}
        value={value}
        onChange={onChangeHandler}
        disabled={readOnly}
        {...props}
      >
        {optionsList}
      </select>
    </div>
  );
};
