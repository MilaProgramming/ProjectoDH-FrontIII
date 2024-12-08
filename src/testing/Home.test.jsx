import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { FavoriteBossContext } from '../context/FavoriteBossContext';
import { MemoryRouter } from 'react-router-dom'; 
import Home from '../pages/Home';  

const mockContextValue = {
  favoriteBoss: null,  
  updateFavoriteBoss: () => {}, 
};

describe('Home Component', () => {
  it('renders the title and a list of bosses after the delay', async () => {
    render(
      <MemoryRouter>  
        <FavoriteBossContext.Provider value={mockContextValue}>
          <Home />
        </FavoriteBossContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('¡Elige tu boss favorito!')).toBeInTheDocument();


    console.log(document.body.innerHTML); 


    expect(screen.queryByText('The Root Pack')).toBeNull();


    await waitFor(() => {
      expect(screen.getByText('The Root Pack')).toBeInTheDocument();
      expect(screen.getByText('Goopy Le Grande')).toBeInTheDocument();
      expect(screen.getByText('Hilda Berg')).toBeInTheDocument();
      expect(screen.getByText('Baroness Von Bon Bon')).toBeInTheDocument();
    }, { timeout: 3000 }); 
  });
});
