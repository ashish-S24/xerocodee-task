
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

describe('Navbar component', () => {
  test('renders logo', () => {
    render(<Navbar />);
    const logoElement = screen.getByAltText('logo') as HTMLImageElement;
    expect(logoElement).toBeInTheDocument();
  });

  test('renders nav links', () => {
    render(<Navbar />);
    const homeLink = screen.getByText('Home') as HTMLAnchorElement;
    expect(homeLink).toBeInTheDocument();

  });

  test('renders "Schedule a Call" button', () => {
    render(<Navbar />);
    const scheduleButton = screen.getByText('Schedule a Call') as HTMLButtonElement;
    expect(scheduleButton).toBeInTheDocument();
  });

  test('renders language selector', () => {
    render(<Navbar />);
    const languageSelector = screen.getByText('EN') as HTMLLabelElement;
    expect(languageSelector).toBeInTheDocument();
  });

  test('renders mobile menu icon', () => {
    render(<Navbar />);
    const menuIcon = screen.getByAltText('menu') as HTMLImageElement;
    expect(menuIcon).toBeInTheDocument();
  });
});