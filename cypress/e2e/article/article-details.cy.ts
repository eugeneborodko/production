describe('Article details', () => {
  let articleId: string;
  let userId: string;

  describe('real data', () => {
    it('should render article details', () => {
      cy.login();
      cy.createArticle().then((article) => {
        articleId = article.id;
        cy.visit(`articles/${articleId}`);
        cy.getByTestId('ArticleDetails').should('exist');
        cy.getByTestId('ArticleDetails.Heading.Title').should(
          'have.text',
          'Javascript news first 12345',
        );
        cy.removeArticle(articleId);
      });
    });
  });

  describe('stubbed data', () => {
    beforeEach(() => {
      cy.login().then((user) => {
        userId = user.id;
        cy.visit(`articles/${articleId}`);
        cy.intercept('GET', '**/articles/*', {
          fixture: 'article-details.json',
        });
      });
    });

    it('should render comments form', () => {
      cy.getByTestId('AddCommentForm.Input').should('exist');
      cy.getByTestId('AddCommentForm.Button').should('exist');
    });

    it('should render recommendations', () => {
      cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('should add comments', () => {
      cy.addComment('Some test comment', articleId, userId).then((comment) => {
        cy.getByTestId(`CommentCard${comment.id}.Text`).should(
          'have.text',
          comment.text,
        );
      });
      cy.getByTestId('CommentList').children().should('have.length', 1);
    });

    it('should add rating', () => {
      cy.addRating(articleId, 4, 'Test review text', userId).then((rating) => {
        cy.getByTestId(`StarRating.rating-${rating.rate}`).should(
          'have.attr',
          'data-selected',
          'true',
        );
      });
    });
  });
});
