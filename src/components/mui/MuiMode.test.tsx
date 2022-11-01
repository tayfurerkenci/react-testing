import { render, screen } from '../../test-utils';
import { MuiMode } from './MuiMode';

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />, {
      //wrapper: AppProviders
    });
    const headingElement = screen.getByRole('heading', {
      name: 'dark mode'
    });

    expect(headingElement).toHaveTextContent('dark mode');
  });
});