describe('Article list', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('articles');
  });

  it('should render articles', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
