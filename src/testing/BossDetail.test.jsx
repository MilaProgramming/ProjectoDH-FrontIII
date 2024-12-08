import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BossDetail from '../pages/BossDetail'; 

describe('BossDetail Component', () => {
  it('should render the correct boss details based on URL parameter', () => {
    render(
      <MemoryRouter initialEntries={['/boss/1']}>
        <Routes>
          <Route path="/boss/:id" element={<BossDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('The Root Pack')).toBeInTheDocument();

    expect(screen.getByText(/grupo de enemigos traviesos con temática de papa/i)).toBeInTheDocument();

    const img = screen.getByAltText('The Root Pack gameplay');
    expect(img).toHaveAttribute('src', expect.stringContaining('1Papa.gif'));
  });

  it('should display "Boss not found!" if the boss does not exist', () => {
    render(
      <MemoryRouter initialEntries={['/boss/999']}>
        <Routes>
          <Route path="/boss/:id" element={<BossDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Boss not found!')).toBeInTheDocument();
  });
});
