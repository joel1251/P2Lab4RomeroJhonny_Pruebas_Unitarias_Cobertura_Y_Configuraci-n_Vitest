import { render, screen } from '@testing-library/react';
import ConceptoCard from './concepto-card';

test('muestra correctamente el titulo recibido', () => {
  render(
    <ConceptoCard
      titulo="React"
      descripcion="Biblioteca para interfaces"
      imagen="react.png"
    />
  );

  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('Biblioteca para interfaces')).toBeInTheDocument();
  expect(screen.getByText('Concepto clave')).toBeInTheDocument();
});

test('muestra placeholder cuando no recibe imagen', () => {
  render(
    <ConceptoCard
      titulo="Hooks"
      descripcion="Estado y efectos"
    />
  );

  expect(screen.getByText('Hooks')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
});
