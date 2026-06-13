import { render, screen } from '@testing-library/react';
import MateriaItem from './materia-item';

test('muestra correctamente la asignatura', () => {
  render(
    <MateriaItem
      nombre="Programacion Web"
      descripcion="Desarrollo Frontend"
    />
  );

  expect(screen.getByText('Programacion Web')).toBeInTheDocument();
  expect(screen.getByText('Desarrollo Frontend')).toBeInTheDocument();
});

test('renderiza el icono cuando se proporciona', () => {
  render(
    <MateriaItem
      icon={<span>RJ</span>}
      nombre="React"
      descripcion="Biblioteca de UI"
    />
  );

  expect(screen.getByText('RJ')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
});
