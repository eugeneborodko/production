import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  it('should return counter with correct value', () => {
    const state: Pick<StateSchema, 'counter'> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
