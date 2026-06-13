import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './header';

test('muestra el menu principal', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByText('Inicio')).toBeInTheDocument();
  expect(screen.getByText('Nosotros')).toBeInTheDocument();
  expect(screen.getByText('Información')).toBeInTheDocument();
  expect(screen.getByText('Contactos')).toBeInTheDocument();
  expect(screen.getByText('Personajes')).toBeInTheDocument();
});

test('muestra la marca del proyecto', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByText('React Components Lab')).toBeInTheDocument();
});
