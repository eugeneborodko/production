import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/consts/router';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

describe('AppRouter', () => {
  it('should render page', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAbout(),
    });
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  it('should redirect to main page when user not logged in and trying to access auth only page', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          authData: undefined,
        },
      },
    });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  it('should stay on auth only page when logged in', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          authData: {},
        },
      },
    });
    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  it('should redirect to forbidden page if user has no appropriate role', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          authData: {
            roles: ['user'],
          },
        },
      },
    });
    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  it('should stay on the page when user has appropriate role', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          authData: {
            roles: ['admin', 'manager'],
          },
        },
      },
    });
    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });

  it('should redirect to not found page when trying to access nonexistent page', async () => {
    renderComponent(<AppRouter />, {
      route: '/page-does-not-exist',
    });
    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });
});
