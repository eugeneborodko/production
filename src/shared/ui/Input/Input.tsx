import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  id?: string;
  label?: string;
  type?: string;
  onChange: (value: string) => void;
  value: string;
  autoFocus?: boolean;
}

export const Input: FC<InputProps> = ({
  className,
  id,
  label,
  type = 'text',
  onChange,
  value,
  autoFocus,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(classes.inputWrapper, {}, [className])}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={classes.input}
        ref={ref}
        type={type}
        id={id}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};
