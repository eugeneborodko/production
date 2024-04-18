import {
  ChangeEvent,
  memo,
  InputHTMLAttributes,
  useEffect,
  useRef,
  ReactNode,
  useState,
} from 'react';
import { HStack } from '../../redesigned/Stack';
import { classNames, Modes } from '@/shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
type InputBorder = 'normal' | 'rounded';

interface InputProps extends HTMLInputProps {
  className?: string;
  id?: string;
  type?: string;
  onChange?: (value: string) => void;
  value?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  border?: InputBorder;
  fullWidth?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Input = memo(
  ({
    className,
    id,
    type = 'text',
    onChange,
    value = '',
    border = 'rounded',
    addonLeft,
    addonRight,
    readOnly,
    autoFocus,
    fullWidth,
    ...props
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const onFocus = () => {
      setIsFocused(true);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    useEffect(() => {
      if (autoFocus) {
        ref.current?.focus();
      }
    }, [autoFocus]);

    const modes: Modes = {
      [classes.readOnly]: readOnly,
      [classes.fullWidth]: fullWidth,
      [classes.withAddonLeft]: !!addonLeft,
      [classes.withAddonRight]: !!addonRight,
      [classes.focused]: isFocused,
    };

    return (
      <HStack
        className={classNames(classes.inputWrapper, modes, [
          className,
          classes[border],
        ])}
      >
        {addonLeft}
        <input
          {...props}
          className={classes.input}
          ref={ref}
          type={type}
          id={id}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          readOnly={readOnly}
        />
        {addonRight}
      </HStack>
    );
  },
);
