import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ContactForm from '../pages/ContactForm';

describe('ContactForm Component', () => {
  it('should update form fields when typing', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const commentInput = screen.getByLabelText(/comentario/i);

    expect(emailInput).toHaveValue('');
    expect(commentInput).toHaveValue('');


    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(commentInput, { target: { value: 'Great service!' } });


    expect(emailInput).toHaveValue('test@example.com');
    expect(commentInput).toHaveValue('Great service!');
  });

  it('should submit the form when filled out and clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </MemoryRouter>
    );


    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/comentario/i), {
      target: { value: 'Great service!' },
    });


    fireEvent.click(screen.getByText('Enviar'));

  });
});
