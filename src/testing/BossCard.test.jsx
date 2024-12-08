import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import BossCard from '../components/BossCard'; 

describe('BossCard Component', () => {
  const mockBoss = {
    id: 1,
    name: 'Dark Lord',
    image: 'dark-lord.jpg',
  };

  const mockOnFavorite = vi.fn();

  it('renders the boss name, image, and favorite button correctly', () => {
    render(
      <MemoryRouter>  
        <BossCard boss={mockBoss} isFavorite={false} onFavorite={mockOnFavorite} />
      </MemoryRouter>
    );


    expect(screen.getByText('Dark Lord')).toBeInTheDocument();


    const img = screen.getByAltText('Dark Lord');
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('dark-lord.jpg');


    expect(screen.getByText('♡')).toBeInTheDocument();
  });

  it('handles the favorite button click', () => {
    render(
      <MemoryRouter>  
        <BossCard boss={mockBoss} isFavorite={false} onFavorite={mockOnFavorite} />
      </MemoryRouter>
    );

    const favoriteButton = screen.getByText('♡');
    fireEvent.click(favoriteButton);


    expect(mockOnFavorite).toHaveBeenCalledTimes(1);
    expect(mockOnFavorite).toHaveBeenCalledWith(mockBoss);
  });

  it('shows the correct favorite icon when isFavorite is true', () => {
    render(
      <MemoryRouter> 
        <BossCard boss={mockBoss} isFavorite={true} onFavorite={mockOnFavorite} />
      </MemoryRouter>
    );

    expect(screen.getByText('♥')).toBeInTheDocument();
  });
});
