import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: Pick<StateSchema, 'counter'> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounterValue(state)).toBe(10);
  });
});
