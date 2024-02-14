import { Article, ArticleTypes } from '../../../src/entities/Article';

const defaultArticle = {
  id: 'test-article',
  title: 'Javascript news first 12345',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT'] as ArticleTypes[],
  userId: '1',
  blocks: [],
};

export const createArticle = (article: Article) => cy
  .request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: {
      Authorization: 'token',
    },
    body: article || defaultArticle,
  })
  .then(({ body }) => body);

export const removeArticle = (articleId: string) => cy.request({
  method: 'DELETE',
  url: `http://localhost:8000/articles/${articleId}`,
  headers: {
    Authorization: 'token',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
