import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render button', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });

  // it('should render button with variant', () => {
  //   render(<Button variant={ButtonVariants.ICON}>Button</Button>);
  //   expect(screen.getByText(/Button/i)).toHaveClass('icon');
  // });
});
