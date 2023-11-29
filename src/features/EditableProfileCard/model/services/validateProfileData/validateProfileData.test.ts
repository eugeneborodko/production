import { mockProfileData } from 'shared/__mocks__/profileData';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../consts/consts';

describe('validateProfileData', () => {
  it('correct data', () => {
    const result = validateProfileData(mockProfileData);
    expect(result).toEqual([]);
  });

  it('without first and last name', () => {
    const result = validateProfileData({
      ...mockProfileData,
      firstName: '',
      lastName: '',
    });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  it('incorrect age', () => {
    const result = validateProfileData({ ...mockProfileData, age: undefined });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  it('incorrect city', () => {
    const result = validateProfileData({ ...mockProfileData, city: undefined });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
  });

  it('incorrect country', () => {
    const result = validateProfileData({
      ...mockProfileData,
      country: undefined,
    });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
  });

  it('incorrect currency', () => {
    const result = validateProfileData({
      ...mockProfileData,
      currency: undefined,
    });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_CURRENCY]);
  });

  it('no data', () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_CITY,
      ValidateProfileErrors.INCORRECT_COUNTRY,
      ValidateProfileErrors.INCORRECT_CURRENCY,
    ]);
  });
});
