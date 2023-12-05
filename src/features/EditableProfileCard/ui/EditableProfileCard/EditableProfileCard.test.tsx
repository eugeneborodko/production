import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

describe('EditableProfileCard', () => {
  const profile: Profile = {
    // TODO: move mocks into a separate file
    id: '1',
    firstName: 'ALEX',
    lastName: 'THUNDERR',
    age: 22,
    currency: Currencies.BYN,
    country: Countries.POLAND,
    city: 'Minsk',
    username: 'username132',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU',
  };

  beforeEach(() => {
    renderComponent(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readOnly: true,
          data: profile,
          formData: profile,
        },
        user: {
          authData: {
            id: '1',
            username: 'user',
          },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });
  });

  it('read only mode should be switched when edit button is clicked', async () => {
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    ).toBeInTheDocument();
  });

  it('should reset form data when fields were edited and cancel button was clicked', async () => {
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'John');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'Snow');

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('John');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Snow');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    );

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('ALEX');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('THUNDERR');
  });

  it('error message should be shown when form has invalid fields', async () => {
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Text'),
    ).toBeInTheDocument();
  });

  it('should make put request when no validation errors and save button is clickedS', async () => {
    const request = jest.spyOn($api, 'put');
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );
    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'John');
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'Snow');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    expect(request).toHaveBeenCalled();
  });
});
