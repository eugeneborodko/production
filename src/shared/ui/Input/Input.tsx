import {
  ChangeEvent,
  memo,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { classNames, Modes } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  id?: string;
  label?: string;
  type?: string;
  onChange: (value: string) => void;
  value?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
}

export const Input = memo(
  ({
    className,
    id,
    label,
    type = 'text',
    onChange,
    value = '',
    readOnly,
    autoFocus,
    ...props
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    useEffect(() => {
      if (autoFocus) {
        ref.current?.focus();
      }
    }, [autoFocus]);

    const modes: Modes = { [classes.readOnly]: readOnly };

    return (
      <div className={classNames(classes.inputWrapper, {}, [className])}>
        {label && (
          <label className={classes.label} htmlFor={id}>
            {label}
          </label>
        )}
        <input
          {...props}
          className={classNames(
            classes.input,
            modes,
            [className],
          )}
          ref={ref}
          type={type}
          id={id}
          onChange={onChangeHandler}
          value={value}
          readOnly={readOnly}
        />
      </div>
    );
  },
);
