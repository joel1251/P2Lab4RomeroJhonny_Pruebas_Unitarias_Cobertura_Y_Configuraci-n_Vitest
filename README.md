# React Components Lab

## Información académica

| Campo | Detalle |
|-------|---------|
| **Universidad** | Universidad de las Fuerzas Armadas ESPE |
| **Carrera** | Ingeniería en Tecnologías de la Información |
| **Asignatura** | Programación Integrativa de Componentes Web |
| **Práctica** | N.º 4 — Implementación de pruebas unitarias y despliegue usando herramientas de CI/CD |
| **Base** | Proyecto desarrollado en la Guía de Laboratorio N.º 3 |
| **Período lectivo** | 202650 |
| **NRC** | 29544 |
| **Docente** | Ing. Kevin Chuquitarco, Mgtr. |
| **Laboratorio** | LA103 |
| **Autor** | Jhonny Joel Romero Lopez |
| **Correo** | jjromero5@espe.edu.ec |
| **Teléfono** | +593 997173609 |

---

## Descripción general

Aplicación web SPA (Single Page Application) desarrollada con **React** y **Vite** que implementa los conceptos de la Práctica de Laboratorio 3 — componentes reutilizables, Props, PropTypes, Hooks, CSS Modules, React Router y consumo de API REST — y extiende el proyecto con los objetivos de la Práctica 4: **pruebas unitarias** con Vitest y React Testing Library, **cobertura de código** y preparación para despliegue con **GitHub** y **Vercel**.

El proyecto organiza el código en tres capas principales:

- **Componentes** (`src/components/`) — piezas reutilizables de interfaz
- **Páginas** (`src/page/`) — vistas completas que componen la aplicación
- **Servicios** (`src/services/`) — funciones para consumir APIs externas

Toda la aplicación se envuelve en un **Layout** compartido con **Header** y **Footer**, de modo que la navegación y la estructura visual se mantienen consistentes en todas las rutas.

---

## Nuevos logros del Laboratorio 4

> Auditoría verificada el 13/06/2026 — detalle completo en [`LAB4_STATUS.md`](./LAB4_STATUS.md)

| Logro | Estado | Evidencia |
|-------|--------|-----------|
| Configuración Vitest | ✅ | `vite.config.js` L6-10 |
| React Testing Library | ✅ | `@testing-library/react` ^16.3.2 |
| Jest DOM | ✅ | `src/setupTests.js` |
| Archivos de prueba | ✅ | 7 archivos `.test.jsx` |
| Ejecución de pruebas | ✅ | **14 passed · 0 failed** |
| Cobertura de código | ✅ | Statements **84.44 %** · Branches **41.66 %** · Functions **80 %** · Lines **84.44 %** |
| Scripts npm | ✅ | `test`, `test:watch`, `test:coverage` |
| Build de producción | ✅ | `npm run build` exitoso |
| `.gitignore` | ✅ | Excluye `node_modules/`, `dist/`, `coverage/`, `.env`, `*.log` |

### Resultados de pruebas verificados

```
Test Files  7 passed (7)
     Tests  14 passed (14)
```

| Archivo de prueba | Componente / Página |
|-------------------|---------------------|
| `concepto-card.test.jsx` | `ConceptoCard` |
| `materia-item.test.jsx` | `MateriaItem` |
| `Personaje/personaje.test.jsx` | `PersonajeCard` |
| `header.test.jsx` | `Header` (con `BrowserRouter`) |
| `footer.test.jsx` | `Footer` |
| `layout.test.jsx` | `Layout` (con `BrowserRouter`) |
| `page/personaje/personaje.test.jsx` | `PersonajesPage` (mock `obtenerPersonajes` con `vi.fn()`) |

### Adaptaciones respecto a la guía Lab 4

| Guía | Proyecto real |
|------|---------------|
| `personaje-card/` | `Personaje/personaje.jsx` — prop `url` |
| `personajes.test.jsx` | `page/personaje/personaje.test.jsx` |
| Mock `global.fetch` | Mock del servicio `obtenerPersonajes` |
| Footer `/ESPE/i` | Prueba sobre `"React Components Lab"` |

---

## Objetivos de la práctica (Lab 3)

| # | Objetivo | Cómo se cumple en el proyecto |
|---|----------|-------------------------------|
| 1 | Diseñar una estructura organizada (componentes, páginas, servicios) | Carpetas `components/`, `page/` y `services/` con archivos `index.jsx` de re-exportación |
| 2 | Construir componentes reutilizables con Props, PropTypes y Hooks | `ConceptoCard`, `MateriaItem`, `PersonajeCard`, `Card` con PropTypes; `Card` y `PersonajesPage` usan `useState` |
| 3 | Implementar navegación con React Router | `BrowserRouter`, `Routes`, `Route`, `Link` y `NavLink` en `App.jsx` y `Header` |
| 4 | Aplicar CSS Modules para encapsular estilos | Componentes estructurales y reutilizables usan `.module.css` |
| 5 | Consumir API REST con funciones asíncronas | `obtenerPersonajes()` con `fetch` en `rick-and-morty-service.js` |
| 6 | Integrar todo en una aplicación funcional | `App.jsx` conecta Layout, rutas, páginas y servicio de personajes |

---

## Tecnologías y dependencias

### Producción

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | ^19.2.6 | Biblioteca principal de interfaz |
| React DOM | ^19.2.6 | Renderizado en el navegador |
| React Router DOM | ^7.15.1 | Navegación SPA entre páginas |
| PropTypes | ^15.8.1 | Validación de propiedades en componentes |
| Vite | ^8.0.12 | Herramienta de desarrollo y build |

### Desarrollo, calidad y pruebas (Lab 4)

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Vitest | ^4.1.8 | Ejecución de pruebas unitarias |
| jsdom | ^29.1.1 | Entorno DOM para pruebas |
| React Testing Library | ^16.3.2 | Renderizado y consultas en pruebas |
| Jest DOM | ^6.9.1 | Matchers (`toBeInTheDocument`, etc.) |
| @vitest/coverage-v8 | ^4.1.8 | Reportes de cobertura |
| ESLint | ^10.3.0 | Análisis estático del código |

### Despliegue e integración

| Herramienta | Uso | Estado |
|-------------|-----|--------|
| Git / GitHub | ✅ Repositorio inicializado y versionado
| Vercel | Hosting y despliegue continuo | ⚠️ `vercel.json` configurado, sin URL pública |

---

## Estructura completa del proyecto

```
practicareact/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── card/
│   │   ├── concepto-card/
│   │   │   ├── concepto-card.jsx
│   │   │   ├── concepto-card.test.jsx      ✅ Lab 4
│   │   │   └── index.jsx
│   │   ├── footer/
│   │   │   ├── footer.jsx
│   │   │   ├── footer.test.jsx             ✅ Lab 4
│   │   │   └── index.jsx
│   │   ├── header/
│   │   │   ├── header.jsx
│   │   │   ├── header.test.jsx             ✅ Lab 4
│   │   │   └── index.jsx
│   │   ├── layout/
│   │   │   ├── layout.jsx
│   │   │   ├── layout.test.jsx             ✅ Lab 4
│   │   │   └── index.jsx
│   │   ├── materia-item/
│   │   │   ├── materia-item.jsx
│   │   │   ├── materia-item.test.jsx       ✅ Lab 4
│   │   │   └── index.jsx
│   │   ├── Personaje/
│   │   │   ├── personaje.jsx               → PersonajeCard
│   │   │   ├── personaje.test.jsx          ✅ Lab 4
│   │   │   └── index.jsx
│   │   ├── userCard/
│   │   └── index.jsx
│   ├── page/
│   │   ├── inicio/
│   │   ├── nosotros/
│   │   ├── informacion/
│   │   ├── contactos/
│   │   ├── personaje/
│   │   │   ├── personaje.jsx               → PersonajesPage
│   │   │   ├── personaje.test.jsx          ✅ Lab 4
│   │   │   └── index.jsx
│   │   └── index.jsx
│   ├── services/
│   │   └── rick-and-morty-service.js
│   ├── setupTests.js                       ✅ Lab 4
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── coverage/                               (generado, en .gitignore)
├── dist/                                   (generado, en .gitignore)
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
├── README.md
├── LAB4_STATUS.md
└── PROJECT_SUMMARY.md
```

---

## Desarrollo por actividades (Lab 3)

### Actividad 1 — Creación y configuración del proyecto

- Proyecto creado con **Vite + React + JavaScript**.
- Dependencias: `react-router-dom`, `prop-types`.
- Estructura base en `src/` con carpetas de componentes, páginas y servicios.
- Punto de entrada en `src/main.jsx`.

### Actividad 2 — Componentes reutilizables

#### `ConceptoCard` (`src/components/concepto-card/`)

| Prop | Tipo | Requerida | Descripción |
|------|------|-----------|-------------|
| `imagen` | `string` | No | URL de la imagen; placeholder si no se envía |
| `titulo` | `string` | Sí | Título del concepto |
| `descripcion` | `string` | No | Texto descriptivo |

- **Usado en:** página Inicio.
- **Prueba Lab 4:** `concepto-card.test.jsx` (2 tests).

#### `MateriaItem` (`src/components/materia-item/`)

| Prop | Tipo | Requerida | Descripción |
|------|------|-----------|-------------|
| `icon` | `node` | No | Elemento React (icono o texto) |
| `nombre` | `string` | Sí | Nombre de la materia |
| `descripcion` | `string` | No | Descripción breve |

- **Usado en:** página Nosotros.
- **Prueba Lab 4:** `materia-item.test.jsx` (2 tests).

#### `PersonajeCard` (`src/components/Personaje/`)

| Prop | Tipo | Requerida | Descripción |
|------|------|-----------|-------------|
| `nombre` | `string` | Sí | Nombre del personaje |
| `especie` | `string` | No | Especie del personaje |
| `url` | `string` | No | URL de la imagen |

- **Usado en:** página Personajes (renderizado con `.map()`).
- **Prueba Lab 4:** `personaje.test.jsx` (2 tests).

#### `Card` (`src/components/card/`)

| Prop | Tipo | Requerida | Descripción |
|------|------|-----------|-------------|
| `nombre` | `string` | Sí | Nombre mostrado |
| `edad` | `number` | Sí | Edad del perfil |

- Usa **`useState`** para alternar visibilidad de la edad.
- **Usado en:** páginas Información y Contactos.

### Actividad 3 — Componentes de estructura

#### `Header` — menú con `NavLink`, enlaces a todas las rutas
#### `Footer` — año dinámico con `new Date().getFullYear()`
#### `Layout` — recibe `children`, incluye Header y Footer

- **Pruebas Lab 4:** `header.test.jsx`, `footer.test.jsx`, `layout.test.jsx` (2 tests c/u).

### Actividad 4 — Páginas

| Página | Ruta | Descripción |
|--------|------|-------------|
| `InicioPage` | `/` | Hero y tarjetas `ConceptoCard` |
| `NosotrosPage` | `/nosotros` | Info académica y `MateriaItem` |
| `ContactosPage` | `/contactos` | Datos de contacto y `Card` |
| `PersonajesPage` | `/personajes` | API Rick and Morty + `PersonajeCard` |
| `InformacionPage` | `/informacion` | Página extra con `Card` y formulario |

- **Prueba Lab 4:** `page/personaje/personaje.test.jsx` (2 tests, mock de servicio).

### Actividad 5 — Servicios y consumo de API

**Archivo:** `src/services/rick-and-morty-service.js`

```javascript
const API_URL = import.meta.env.VITE_API_RUL;

export const obtenerPersonajes = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
};
```

| Paso | Implementación |
|------|----------------|
| URL base | Variable `VITE_API_RUL` en `.env` |
| Función | `obtenerPersonajes()` con `fetch` |
| Consumidor | `PersonajesPage` con `useEffect` + `useState` |
| Renderizado | `.map()` + `PersonajeCard` |

### Actividad 6 — Integración

**Archivo:** `src/App.jsx`

```jsx
<BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/informacion" element={<InformacionPage />} />
      <Route path="/contactos" element={<ContactosPage />} />
      <Route path="/personajes" element={<PersonajesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Layout>
</BrowserRouter>
```

---

## Rutas de la aplicación

| Ruta | Componente | Requerida en guía | Descripción |
|------|------------|-------------------|-------------|
| `/` | `InicioPage` | Sí | Presentación y conceptos |
| `/nosotros` | `NosotrosPage` | Sí | Información académica |
| `/contactos` | `ContactosPage` | Sí | Datos de contacto |
| `/personajes` | `PersonajesPage` | Sí | Listado Rick and Morty API |
| `/informacion` | `InformacionPage` | No (extra) | Card y formulario |
| `*` | Redirección a `/` | — | Rutas no encontradas |

---

## Flujo de datos (página Personajes)

```
Rick and Morty API
        │
        ▼  GET (VITE_API_RUL)
rick-and-morty-service.js  →  obtenerPersonajes()
        │
        ▼  Promise<results[]>
PersonajesPage
        ├── useEffect()  → consulta al montar
        ├── useState()   → personajes, loading, error
        └── .map()       → PersonajeCard (nombre, especie, url)
```

---

## Hooks utilizados

| Hook | Dónde se usa | Propósito |
|------|--------------|-----------|
| `useState` | `Card` | Alternar visibilidad de la edad |
| `useState` | `PersonajesPage` | personajes, loading, error |
| `useEffect` | `PersonajesPage` | Cargar personajes al montar |

---

## Instalación y ejecución

### Requisitos previos

- Windows, Linux o macOS
- [Node.js](https://nodejs.org/) (LTS)
- npm
- Git (para GitHub)
- Navegador web actualizado

### Instalación

```bash
cd practicareact
npm install
cp .env.example .env
# VITE_API_RUL=https://rickandmortyapi.com/api/character
```

### Ejecución local

```bash
npm run dev          # http://localhost:5173
npm run build        # genera dist/
npm run preview      # previsualiza build
npm run lint         # ESLint
```

---

## Pruebas unitarias (Lab 4)

### Configuración

**`vite.config.js`:**

```javascript
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/setupTests.js',
}
```

**`src/setupTests.js`:**

```javascript
import '@testing-library/jest-dom';
```

### Ejecución

```bash
npm test              # vitest run — 14 tests
npm run test:watch    # modo observación
npm run test:coverage # reporte de cobertura
```

### Resultados verificados

| Métrica | Valor |
|---------|-------|
| Archivos de prueba | 7 |
| Tests ejecutados | 14 |
| Tests aprobados | 14 |
| Tests fallidos | 0 |

---

## Cobertura de código

Comando: `npm run test:coverage`

| Métrica | Porcentaje |
|---------|------------|
| Statements | **84.44 %** |
| Branches | **41.66 %** |
| Functions | **80 %** |
| Lines | **84.44 %** |

Reporte HTML en `coverage/` (excluido de Git).

---

## GitHub

| Elemento | Estado |
|----------|--------|
| `.git/` | Inicializado |
| Commits | Sin commits aún |
| Remote | No configurado |
| `.gitignore` | ✅ Incluye `.env`, `coverage/`, `dist/`, `node_modules/` |

```bash
git add .
git commit -m "Proyecto React con pruebas unitarias"
git branch -M main
git remote add origin https://github.com/USUARIO/repositorio.git
git push -u origin main
```

**Enlace del repositorio:** _sin configurar_

---

## Vercel

**Configuración existente** — `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

| Campo | Valor |
|-------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Enlace del proyecto desplegado:
https://p2-lab4-romero-jhonny-pruebas-unita.vercel.app/

---

## CI/CD (opcional)

Directorio `.github/workflows/` no existe. Vercel puede actuar como CD al conectar GitHub.

---

## Estado actual del laboratorio

| Área | Estado |
|------|--------|
| Aplicación React funcional (Lab 3) | ✅ |
| Pruebas unitarias implementadas | ✅ 7 archivos · 14 tests · 0 fallos |
| Cobertura generada | ✅ 84.44 % statements |
| Build de producción | ✅ |
| `.gitignore` preparado | ✅ |
| Repositorio GitHub remoto | ✅ |
| Despliegue Vercel | ✅ |
| CI/CD (GitHub Actions) | ✅ |

---

## Checklist Lab 3 (conservado)

| Requisito | Estado |
|-----------|--------|
| Proyecto React con Vite | ✅ |
| react-router-dom | ✅ |
| prop-types | ✅ |
| ConceptoCard, MateriaItem, PersonajeCard | ✅ |
| CSS Modules | ✅ |
| Header, Footer, Layout | ✅ |
| Páginas Inicio, Nosotros, Contactos, Personajes | ✅ |
| Servicio `obtenerPersonajes()` | ✅ |
| useState y useEffect | ✅ |
| Rutas en App.jsx | ✅ |

---

## Entregables

| Entregable | Estado |
|------------|--------|
| Código fuente | ✅ |
| Pruebas unitarias | ✅ 14/14 |
| Cobertura | ✅ 84.44 % |
| Documentación | ✅ `README.md` |


---

## Resumen ejecutivo

### Heredado del Laboratorio 3

Aplicación SPA completa con componentes reutilizables, estructura Header/Footer/Layout, 5 páginas con React Router, CSS Modules, PropTypes, Hooks y consumo de la API Rick and Morty.

### Implementado en el Laboratorio 4

Vitest + React Testing Library + Jest DOM configurados; 7 archivos de prueba con 14 tests aprobados; cobertura 84.44 %; scripts `test`/`test:coverage`; `.gitignore` actualizado; `vercel.json` listo.

### Falta para cerrar al 100 %

1. Commit, remote y push a GitHub
2. Despliegue en Vercel con URL pública
3. Informe PDF con capturas
4. CI/CD opcional (`.github/workflows/`)

---

## Autor

**Jhonny Joel Romero Lopez**  
Universidad de las Fuerzas Armadas ESPE  
Programación Integrativa de Componentes Web — Práctica 4  
Correo: jjromero5@espe.edu.ec
