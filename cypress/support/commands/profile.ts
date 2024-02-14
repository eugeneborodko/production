export const updateProfile = (
  firstName: string = 'first name',
  lastName: string = 'last name',
  age: number = 31,
) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.FirstName').clear().type(firstName);
  cy.getByTestId('ProfileCard.LastName').clear().type(lastName);
  cy.getByTestId('ProfileCard.Age').clear().type(String(age));
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: 'token',
    },
    body: {
      id: '4',
      firstName: 'test1',
      lastName: 'user1',
      age: 38,
      currency: 'USD',
      country: 'Belarus',
      city: 'Minsk',
      username: 'testuser',
      avatar:
        'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(
        firstName?: string,
        lastName?: string,
        age?: number
      ): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
