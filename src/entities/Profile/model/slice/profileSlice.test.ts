import { mockProfileData } from 'shared/__mocks__/profileData';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import {
  cancelEdit,
  profileReducer,
  saveProfile,
  setReadOnlyProfile,
  updateProfile,
} from './profileSlice';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice', () => {
  it('setReadOnly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readOnly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, setReadOnlyProfile(true)),
    ).toEqual({ readOnly: true });
  });

  it('updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      formData: {
        ...mockProfileData,
      },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfile({
          ...mockProfileData,
          lastName: 'Jackson',
        }),
      ),
    ).toEqual({
      formData: {
        ...mockProfileData,
        lastName: 'Jackson',
      },
    });
  });

  it('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: {
        ...mockProfileData,
        lastName: 'Smith',
      },
      formData: {
        ...mockProfileData,
      },
    };
    expect(profileReducer(state as ProfileSchema, cancelEdit())).toEqual({
      data: state.data,
      formData: {
        ...state.data,
      },
      readOnly: true,
      validateErrors: undefined,
    });
  });

  it('saveProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      formData: { ...mockProfileData, age: 30 },
      data: mockProfileData,
      readOnly: false,
    };
    expect(profileReducer(state as ProfileSchema, saveProfile())).toEqual({
      data: state.formData,
      formData: state.formData,
      readOnly: true,
    });
  });

  it('fetch profile data pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      error: 'Error',
      isLoading: false,
    };
    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending),
    ).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  it('fetch profile data fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.fulfilled(mockProfileData, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      data: mockProfileData,
      formData: mockProfileData,
    });
  });

  it('fetch profile data rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      error: undefined,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.rejected(null, '', '', 'Error'),
      ),
    ).toEqual({
      isLoading: false,
      error: 'Error',
    });
  });

  it('update profile data pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      validateErrors: [ValidateProfileErrors.INCORRECT_COUNTRY],
      isLoading: false,
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      validateErrors: undefined,
      isLoading: true,
    });
  });

  it('update profile data fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(mockProfileData, ''),
      ),
    ).toEqual({
      isLoading: false,
      data: mockProfileData,
      formData: mockProfileData,
      validateErrors: undefined,
    });
  });

  it('fetch profile data rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: undefined,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.rejected(null, '', undefined, [
          ValidateProfileErrors.INCORRECT_COUNTRY,
        ]),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: [ValidateProfileErrors.INCORRECT_COUNTRY],
    });
  });
});
