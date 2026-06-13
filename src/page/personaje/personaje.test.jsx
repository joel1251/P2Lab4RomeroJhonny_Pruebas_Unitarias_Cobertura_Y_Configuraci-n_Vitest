import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import PersonajesPage from './personaje';

vi.mock('../../services/rick-and-morty-service', () => ({
  obtenerPersonajes: vi.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: 'Rick Sanchez',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
    ])
  ),
}));

import { obtenerPersonajes } from '../../services/rick-and-morty-service';

test('carga personajes desde la API', async () => {
  render(<PersonajesPage />);

  expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
  expect(obtenerPersonajes).toHaveBeenCalledTimes(1);
});

test('muestra estado de carga inicial', () => {
  render(<PersonajesPage />);

  expect(screen.getByText('Cargando personajes...')).toBeInTheDocument();
});
