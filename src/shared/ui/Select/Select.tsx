import { ChangeEvent, useMemo } from 'react';
import { Modes, classNames } from '@/shared/lib/classNames/classNames';
import classes from './Select.module.scss';

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}

export const Select = <T extends string>({ // TODO: add memo
  className,
  label,
  options,
  value,
  onChange,
  readOnly,
}: SelectProps<T>) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  const optionsList = useMemo(
    () => options.map(({ value, content }) => (
      <option value={value} key={value}>
        {content}
      </option>
    )),
    [options],
  );

  const modes: Modes = {
    [classes.readOnly]: readOnly,
  };

  return (
    <div className={classes.selectWrapper}>
      {label && (
        <span className={classNames(classes.label, modes, [])}>{label}</span>
      )}
      <select
        className={classNames(classes.select, {}, [className])}
        value={value}
        onChange={onChangeHandler}
        disabled={readOnly}
      >
        {optionsList}
      </select>
    </div>
  );
};
