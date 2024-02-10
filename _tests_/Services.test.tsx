import { render, screen } from '@testing-library/react';
import Services from '@/components/Services';

describe('Services component', () => {
  test('renders services section', () => {
    render(<Services />);
    
    // Check if the section containing services is rendered
    const servicesSection = screen.getByTestId('services-container');
    expect(servicesSection).toBeInTheDocument();

    // Check if services are rendered
    const serviceTitles = screen.getAllByRole('heading', { level: 1 });
    expect(serviceTitles.length).toBeGreaterThan(0);

    // Check if service descriptions are rendered
    const serviceDescriptions = screen.getAllByRole('paragraph');
    expect(serviceDescriptions.length).toBeGreaterThan(0);

    // Check if service icons are rendered
    const serviceIcons = screen.getAllByRole('img');
    expect(serviceIcons.length).toBeGreaterThan(0);
  });

  test('renders mobile view cards', () => {
    render(<Services />);

    // Check if the mobile view cards container is rendered
    const mobileViewCardsContainer = screen.getByTestId('mobile-view-cards-container');
    expect(mobileViewCardsContainer).toBeInTheDocument();
  });
});
