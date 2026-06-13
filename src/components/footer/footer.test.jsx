import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

test('muestra la informacion institucional', () => {
  render(<Footer />);

  expect(screen.getByText('React Components Lab')).toBeInTheDocument();
  expect(
    screen.getByText(/Proyecto de practica con React, Router, CSS Modules y consumo de API/i)
  ).toBeInTheDocument();
});

test('muestra el anio actual', () => {
  render(<Footer />);

  const anioActual = new Date().getFullYear().toString();
  expect(screen.getByText(new RegExp(anioActual))).toBeInTheDocument();
});
