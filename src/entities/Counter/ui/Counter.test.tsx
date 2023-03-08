import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';

describe('Counter', () => {
  it('should render counter title', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
  });

  it('increment', async () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const button = screen.getByRole('button', { name: /plus/i });
    const counter = screen.getByTestId('counter-title');
    await userEvent.click(button);
    expect(counter).toHaveTextContent('11');
  });

  it('decrement', async () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const button = screen.getByRole('button', { name: /minus/i });
    const counter = screen.getByTestId('counter-title');
    await userEvent.click(button);
    expect(counter).toHaveTextContent('9');
  });
});
