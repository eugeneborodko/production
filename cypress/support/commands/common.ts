import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { User } from '../../../src/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '../../../src/shared/consts/localStorage';

export const login = (
  username: string = 'testuser',
  password: string = '123',
) => cy
  .request({
    method: 'POST',
    url: 'http://localhost:8000/login', // TODO: use env variable
    body: {
      username,
      password,
    },
  })
  .then(({ body }) => {
    window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(body));
    return body;
  });

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>;
      getByTestId(tetId: string): ReturnType<typeof cy.get>;
    }
  }
}
