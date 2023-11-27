import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { mockProfileData } from 'shared/__mocks__/profileData';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileErrors } from '../../types/editableProfileCard';

describe('updateProfileData', () => {
  it('update profile data successful', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: mockProfileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: mockProfileData }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockProfileData);
  });

  it('update profile data with error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: mockProfileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });

  it('update profile data with validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: { ...mockProfileData, firstName: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
});
