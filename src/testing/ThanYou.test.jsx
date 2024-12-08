import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';  
import { MemoryRouter, useLocation } from 'react-router-dom';
import ThankYou from '../components/ThankYou';  


vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();  
  return {
    ...actual,  
    useLocation: vi.fn(),  
  };
});

describe('ThankYou Component', () => {


  it('displays empty details when query parameters are missing', () => {
    useLocation.mockReturnValue({
      search: '',
    });

    render(
      <MemoryRouter>
        <ThankYou />
      </MemoryRouter>
    );


    expect(screen.getByText('Gracias :)')).toBeInTheDocument();
    expect(screen.getByText('Hemos recibido tu mensaje')).toBeInTheDocument();

    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('Comentario:')).toBeInTheDocument();
  });
});
