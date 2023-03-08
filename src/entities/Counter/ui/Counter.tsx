import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { increment, decrement } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {}

export const Counter: FC<CounterProps> = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const plus = () => {
    dispatch(increment());
  };

  const minus = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-title">{counterValue}</h1>
      <Button data-testid="plus" onClick={plus}>Plus</Button>
      <Button data-testid="minus" onClick={minus}>Minus</Button>
    </div>
  );
};
