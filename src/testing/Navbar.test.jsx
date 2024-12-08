import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Navbar from '../components/Navbar';  

describe('Navbar Component', () => {
  it('renders the logo and navigation links correctly', () => {
    render(
      <MemoryRouter> 
        <Navbar />
      </MemoryRouter>
    );


    expect(screen.getByText('CUPHEAD')).toBeInTheDocument();

    const homeLink = screen.getByText('Inicio');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');


    const contactLink = screen.getByText('Contacto');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
  });
});
