import { render, screen } from '@testing-library/react';
import PersonajeCard from './personaje';

test('muestra correctamente el nombre del personaje', () => {
  render(
    <PersonajeCard
      nombre="Rick Sanchez"
      especie="Humano"
      url="rick.png"
    />
  );

  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  expect(screen.getByText('Humano')).toBeInTheDocument();
  expect(screen.getByText('Rick and Morty API')).toBeInTheDocument();
});

test('renderiza imagen con alt igual al nombre', () => {
  render(
    <PersonajeCard
      nombre="Morty Smith"
      especie="Humano"
      url="morty.png"
    />
  );

  expect(screen.getByRole('img', { name: 'Morty Smith' })).toBeInTheDocument();
});
