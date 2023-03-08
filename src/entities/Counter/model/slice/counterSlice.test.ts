import { CounterSchema } from '../types/counterSchema';
import { counterReducer, increment, decrement } from './counterSlice';

describe('counterSlice', () => {
  it('should increment value', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, increment)).toEqual({ value: 11 });
  });

  it('should decrement value', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, decrement)).toEqual({ value: 9 });
  });

  it('should work with empty state', () => {
    expect(counterReducer(undefined, increment)).toEqual({ value: 1 });
  });
});
