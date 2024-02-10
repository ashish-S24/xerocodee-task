import { render } from '@testing-library/react';
import Technologies from '@/components/Technologies';

describe('Technologies component', () => {
  test('renders Marquee', () => {
    const { getByText } = render(<Technologies />);
    const marquee = getByText('Trusted by Leading Organizations');
    expect(marquee).toBeInTheDocument();
  });

  test('renders buttons', () => {
    const { getByRole } = render(<Technologies />);
    const button = getByRole('button', { name: 'Our full repertorie' });
    expect(button).toBeInTheDocument();
  });
});
