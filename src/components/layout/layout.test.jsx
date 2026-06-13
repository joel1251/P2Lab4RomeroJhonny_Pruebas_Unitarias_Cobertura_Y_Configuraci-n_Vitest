import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';

test('renderiza el contenido hijo', () => {
  render(
    <BrowserRouter>
      <Layout>
        <h1>Contenido de prueba</h1>
      </Layout>
    </BrowserRouter>
  );

  expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
});

test('incluye header y footer', () => {
  render(
    <BrowserRouter>
      <Layout>
        <p>Seccion principal</p>
      </Layout>
    </BrowserRouter>
  );

  expect(screen.getAllByText('React Components Lab').length).toBeGreaterThanOrEqual(2);
  expect(screen.getByText('Seccion principal')).toBeInTheDocument();
});
