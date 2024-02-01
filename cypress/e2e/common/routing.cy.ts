import { selectByTextId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('User logged in', () => {
    beforeEach(() => {
      cy.login();
    });

    it('should open articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTextId('ArticlesPage')).should('exist');
    });

    it('should open profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTextId('ProfilePage')).should('exist');
    });

    it('should open admin page', () => {
      cy.visit('/admin');
      cy.get(selectByTextId('AdminPanelPage')).should('exist');
    });
  });

  describe('User not logged in', () => {
    it('should not open articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTextId('MainPage')).should('exist');
    });

    it('should not open profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTextId('MainPage')).should('exist');
    });

    it('should open not found page if opened non-existent url', () => {
      cy.visit('/non-existent-url');
      cy.get(selectByTextId('NotFoundPage')).should('exist');
    });
  });
});
