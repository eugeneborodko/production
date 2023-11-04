import { ChangeEvent, memo, useMemo } from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';

interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select = memo(
  ({
    className, label, options, value, onChange, readOnly,
  }: SelectProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
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
  },
);
