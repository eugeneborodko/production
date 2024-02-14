let articleId: string;

describe('Article details', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      articleId = article.id;
      cy.log(JSON.stringify(article));
      cy.visit(`articles/${articleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(articleId);
  });

  it('should render article details', () => {
    cy.getByTestId('ArticleDetails').should('exist');
    cy.getByTestId('ArticleDetails.Heading.Title').should('have.text', 'Javascript news first 12345');
  });
});
