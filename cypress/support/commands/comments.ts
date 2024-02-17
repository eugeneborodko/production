import { Comment } from '../../../src/entities/Comment';

// TODO: comment is not visible in cypress env. To fix

export const addComment = (text: string, articleId: string, userId: string) => cy
  .request({
    method: 'POST',
    url: 'http://localhost:8000/comments',
    headers: {
      Authorization: 'token',
    },
    body: {
      articleId,
      text,
      userId,
    },
  })
  .then(({ body }) => body);

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(
        text: string,
        articleId: string,
        userId: string
      ): Chainable<Comment>;
    }
  }
}
