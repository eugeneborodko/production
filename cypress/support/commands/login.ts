import { LOCAL_STORAGE_USER_KEY } from '../../../src/shared/consts/localStorage';

export const login = (
  username: string = 'testuser',
  password: string = '123',
) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login', // TODO: use env variable
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(body));
  });
};
