import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SidebarDeprecated } from './SidebarDeprecated';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
  it('should render sidebar', () => {
    renderComponent(<SidebarDeprecated />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should collapse sidebar after collapse button is clicked', async () => {
    renderComponent(<SidebarDeprecated />);
    const toggleButton = screen.getByTestId('sidebar-toggle-button');
    await userEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
