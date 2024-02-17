import { Rating } from '../../../src/entities/Rating';

export const addRating = (
  articleId: string,
  rate: number,
  reviewText: string,
  userId: string,
) => cy
  .request({
    method: 'POST',
    url: 'http://localhost:8000/article-ratings',
    headers: {
      Authorization: 'token',
    },
    body: {
      articleId,
      rate,
      reviewText,
      userId,
    },
  })
  .then(({ body }) => body);

declare global {
  namespace Cypress {
    interface Chainable {
      addRating(
        articleId: string,
        rate: number,
        reviewText: string,
        userId: string
      ): Chainable<Rating>;
    }
  }
}
