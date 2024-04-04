import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SidebarRedesigned } from './SidebarRedesigned';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
  it('should render sidebar', () => {
    renderComponent(<SidebarRedesigned />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should collapse sidebar after collapse button is clicked', async () => {
    renderComponent(<SidebarRedesigned />);
    const toggleButton = screen.getByTestId('sidebar-toggle-button');
    await userEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
