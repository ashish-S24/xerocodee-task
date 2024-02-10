import { render, fireEvent } from '@testing-library/react';
import Testimonials from '@/components/Testimonials';

describe('Testimonials component', () => {
  it('should scroll cards to the left when left arrow button is clicked', () => {
    const { getByTestId } = render(<Testimonials />);
    const cardContainer = getByTestId('card-container');
    const scrollPositionBeforeLeftClick = cardContainer.scrollLeft;

    const leftArrowButton = getByTestId('left-arrow-button');
    fireEvent.click(leftArrowButton);

    setTimeout(() => {
      const scrollPositionAfterLeftClick = cardContainer.scrollLeft;

      expect(scrollPositionAfterLeftClick).toBeLessThan(scrollPositionBeforeLeftClick);
    }, 1000);
  });

  it('should scroll cards to the right when right arrow button is clicked', () => {
    const { getByTestId } = render(<Testimonials />);
    const cardContainer = getByTestId('card-container');
    const scrollPositionBeforeRightClick = cardContainer.scrollLeft;

    const rightArrowButton = getByTestId('right-arrow-button');
    fireEvent.click(rightArrowButton);

    
    setTimeout(() => {
      const scrollPositionAfterRightClick = cardContainer.scrollLeft;
      
      expect(scrollPositionAfterRightClick).toBeGreaterThan(scrollPositionBeforeRightClick);
    }, 1000); 
  });
});
