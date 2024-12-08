import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import FavoriteBossProvider from '../context/FavoriteBossProvider'; 
import { FavoriteBossContext } from '../context/FavoriteBossContext';

// Mock localStorage
beforeEach(() => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
    if (key === 'favoriteBoss') {
      return JSON.stringify({ id: 1, name: 'Boss 1' });
    }
    return null;
  });
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
  vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {});
});

const TestComponent = () => {
  const { favoriteBoss, updateFavoriteBoss } = useContext(FavoriteBossContext);

  return (
    <div>
      <p>{favoriteBoss ? `Favorite Boss: ${favoriteBoss.name}` : 'No Favorite Boss'}</p>
      <button onClick={() => updateFavoriteBoss({ id: 2, name: 'Boss 2' })}>Set Favorite Boss 2</button>
      <button onClick={() => updateFavoriteBoss({ id: 1, name: 'Boss 1' })}>Remove Favorite Boss</button>
    </div>
  );
};

describe('FavoriteBossProvider', () => {
  it('should render the provider and show favorite boss from localStorage', () => {
    render(
      <FavoriteBossProvider>
        <TestComponent />
      </FavoriteBossProvider>
    );


    expect(screen.getByText('Favorite Boss: Boss 1')).toBeInTheDocument();
  });

  it('should update favorite boss when clicked', () => {
    render(
      <FavoriteBossProvider>
        <TestComponent />
      </FavoriteBossProvider>
    );


    fireEvent.click(screen.getByText('Set Favorite Boss 2'));


    expect(screen.getByText('Favorite Boss: Boss 2')).toBeInTheDocument();
  });

});
