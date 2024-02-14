let profileId: string;

describe('edit profile page', () => {
  beforeEach(() => {
    cy.login().then((user) => {
      profileId = user.id;
      cy.visit(`profile/${profileId}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('should render profile card', () => {
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'test1');
    cy.getByTestId('ProfileCard.LastName').should('have.value', 'user1');
  });

  it('user edits the page', () => {
    const firstName = 'new first name';
    const lastName = 'new last name';
    const age = 31;

    cy.updateProfile(firstName, lastName, age);
    cy.getByTestId('ProfileCard.FirstName').should('have.value', firstName);
    cy.getByTestId('ProfileCard.LastName').should('have.value', lastName);
    cy.getByTestId('ProfileCard.Age').should('have.value', age);
  });
});
