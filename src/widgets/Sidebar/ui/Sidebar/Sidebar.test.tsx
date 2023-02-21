import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from './Sidebar';
import
{ renderWithTranslation }
  from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  it('should render sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('test', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle-button');
    userEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
