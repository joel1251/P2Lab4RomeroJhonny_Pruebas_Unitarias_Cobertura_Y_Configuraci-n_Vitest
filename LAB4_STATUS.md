# LAB4_STATUS — Matriz de cumplimiento verificada

**Proyecto:** `practicareact`  
**Última auditoría:** 13 de junio de 2026  
**Método:** lectura directa de archivos y ejecución de `npm run test`, `npm run test:coverage`, `npm run build`, `git status`

---

## Resultado de pruebas (verificado en esta auditoría)

| Métrica | Valor | Comando |
| ------- | ----- | ------- |
| Archivos de prueba | **7** | `npm run test` |
| Tests ejecutados | **14** | `npm run test` |
| Tests aprobados | **14** | `npm run test` → exit code 0 |
| Tests fallidos | **0** | `npm run test` → exit code 0 |

Salida verificada:

```
Test Files  7 passed (7)
     Tests  14 passed (14)
```

### Archivos de prueba implementados

| Archivo | Componente / Página | Tests |
| ------- | ------------------- | ----- |
| `src/components/concepto-card/concepto-card.test.jsx` | `ConceptoCard` | 2 |
| `src/components/materia-item/materia-item.test.jsx` | `MateriaItem` | 2 |
| `src/components/Personaje/personaje.test.jsx` | `PersonajeCard` | 2 |
| `src/components/header/header.test.jsx` | `Header` + `BrowserRouter` | 2 |
| `src/components/footer/footer.test.jsx` | `Footer` | 2 |
| `src/components/layout/layout.test.jsx` | `Layout` + `BrowserRouter` | 2 |
| `src/page/personaje/personaje.test.jsx` | `PersonajesPage` + mock `vi.fn()` | 2 |

---

## Cobertura de código (verificado en esta auditoría)

Comando: `npm run test:coverage` → exit code 0

| Métrica | Porcentaje | Detalle |
| ------- | ---------- | ------- |
| **Statements** | **84.44 %** | 38/45 |
| **Branches** | **41.66 %** | 10/24 |
| **Functions** | **80 %** | 12/15 |
| **Lines** | **84.44 %** | 38/45 |

Reporte HTML generado en `coverage/` (excluido por `.gitignore` L18).

### Archivos con menor cobertura

| Archivo | % Stmts | Líneas sin cubrir |
| ------- | ------- | ----------------- |
| `components/card/card.jsx` | 33.33 | L6-21 |
| `components/userCard/userCard.jsx` | 66.66 | L5 |
| `page/personaje/personaje.jsx` | 88.23 | L19-20 (bloque `catch`) |
| `components/Personaje/personaje.jsx` | 100 | rama L7 (`url` falsy) |

---

## Nuevos logros del Laboratorio 4

| Logro | Estado | Evidencia |
| ----- | ------ | --------- |
| Configuración Vitest | ✅ | `vite.config.js` L6-10; `vitest` ^4.1.8 en `package.json` L35 |
| React Testing Library | ✅ | `@testing-library/react` ^16.3.2 en `package.json` L24 |
| Jest DOM | ✅ | `src/setupTests.js` L1; `@testing-library/jest-dom` ^6.9.1 en `package.json` L23 |
| `setupTests.js` | ✅ | `src/setupTests.js` existe |
| jsdom | ✅ | `jsdom` ^29.1.1 en `package.json` L33 |
| Cobertura v8 | ✅ | `@vitest/coverage-v8` ^4.1.8 en `package.json` L28 |
| 7 archivos `.test.jsx` | ✅ | Glob verificado en `src/` |
| Mock API con `vi.fn()` | ✅ | `personaje.test.jsx` L5-15 |
| Scripts npm | ✅ | `package.json` L11-13: `test`, `test:watch`, `test:coverage` |
| Pipeline CI GitHub Actions | ✅ | `.github/workflows/ci.yml` |
| Build producción | ✅ | `npm run build` → exit code 0 |
| `.gitignore` actualizado | ✅ | `.gitignore` L11-21: `node_modules/`, `dist/`, `coverage/`, `.env`, `*.log` |

---

## Adaptaciones respecto a la guía Lab 4

| Guía original | Implementación real | Archivo |
| ------------- | ------------------- | ------- |
| `personaje-card/personaje-card.test.jsx` | `Personaje/personaje.test.jsx` | Props `url` en lugar de `imagen` |
| `personajes.test.jsx` | `page/personaje/personaje.test.jsx` | Export `PersonajesPage` |
| Mock `global.fetch = vi.fn()` | Mock de `obtenerPersonajes` | `vi.mock('../../services/rick-and-morty-service')` |
| Footer `/ESPE/i` | Texto `"React Components Lab"` | `footer.jsx` L9; prueba adaptada en `footer.test.jsx` |
| Carpeta `pages/` | Carpeta `src/page/` | Estructura del Lab 3 |

---

## Matriz de cumplimiento Lab 4

| Requerimiento | Estado | Evidencia | Archivo |
| ------------- | ------ | --------- | ------- |
| Configuración de Vitest | ✅ Existe y funciona | `vite.config.js` L6-10 | `vite.config.js` |
| Configuración de Jest DOM | ✅ Existe y funciona | `setupTests.js` L1 | `src/setupTests.js` |
| React Testing Library | ✅ Existe y funciona | Dependencia instalada, usada en 7 archivos `.test.jsx` | `package.json` L24 |
| `setupTests.js` | ✅ Existe y funciona | Archivo presente | `src/setupTests.js` |
| Archivos `*.test.jsx` | ✅ Existe y funciona | 7 archivos, 14 tests passed | `src/**/*.test.jsx` |
| `concepto-card.test.jsx` | ✅ Existe y funciona | 2 tests passed | `concepto-card.test.jsx` |
| `materia-item.test.jsx` | ✅ Existe y funciona | 2 tests passed | `materia-item.test.jsx` |
| `PersonajeCard.test.jsx` | ✅ Existe y funciona | Archivo `personaje.test.jsx`, 2 tests passed | `Personaje/personaje.test.jsx` |
| `Header.test.jsx` | ✅ Existe y funciona | 2 tests passed | `header.test.jsx` |
| `Footer.test.jsx` | ✅ Existe y funciona | 2 tests passed | `footer.test.jsx` |
| `Layout.test.jsx` | ✅ Existe y funciona | 2 tests passed | `layout.test.jsx` |
| `Personajes.test.jsx` | ✅ Existe y funciona | Archivo `personaje.test.jsx`, 2 tests passed | `page/personaje/personaje.test.jsx` |
| Mock de API con `vi.fn()` | ✅ Existe y funciona | `vi.fn()` + `toHaveBeenCalledTimes(1)` | `personaje.test.jsx` L5-24 |
| Ejecución de pruebas | ✅ Existe y funciona | `npm run test` exit code 0 | `package.json` L11 |
| Cobertura con Vitest | ✅ Existe y funciona | Statements 84.44 % | `package.json` L13, `coverage/` |
| Scripts `package.json` | ✅ Existe y funciona | `test`, `test:watch`, `test:coverage` | `package.json` L11-13 |
| Dependencias de prueba | ✅ Existe y funciona | vitest, jsdom, RTL, jest-dom, coverage-v8 | `package.json` L22-35 |
| Build de producción | ✅ Existe y funciona | `npm run build` exit code 0 | `dist/` |
| `.env` en `.gitignore` | ✅ Existe y funciona | `.gitignore` L21 | `.gitignore` |
| Repositorio GitHub | ⚠️ Existe parcialmente | `.git/` existe; `git status`: *No commits yet on main*; sin `remote` configurado | — |
| Configuración Vercel | ⚠️ Existe parcialmente | `vercel.json` L1-5 con rewrites SPA; sin URL de despliegue en el proyecto | `vercel.json` |
| Flujo CI/CD | ✅ Existe y funciona | `.github/workflows/ci.yml`: `push`/`pull_request` en `main`/`master`, Node 20, `npm ci`, `npm run test` (Vitest), `npm run build`. Verificado localmente con los mismos comandos → exit code 0. | `.github/workflows/ci.yml` |
| Informe PDF | ❌ No existe | No hay archivo PDF en el repositorio | — |

---

## Comandos ejecutados en esta auditoría

| Comando | Resultado |
| ------- | --------- |
| `npm run test` | Exit code 0 — 7 files, 14 passed |
| `npm run test:coverage` | Exit code 0 — Statements 84.44 % |
| `npm run build` | Exit code 0 — `✓ built in 1.18s` |
| `npm ci && npm run test && npm run build` | Exit code 0 — simula pipeline CI |
| `git status -sb` | `## No commits yet on main` — archivos sin commitear |

---

## Evidencias disponibles para el informe PDF

| # | Evidencia | Fuente |
| - | --------- | ------ |
| 1 | Configuración Vitest | Captura de `vite.config.js` L6-10 |
| 2 | setupTests.js | Captura de `src/setupTests.js` |
| 3 | Archivos de prueba | Captura de los 7 `.test.jsx` |
| 4 | Tests en verde | Captura de `npm run test` → 14 passed |
| 5 | Cobertura | Captura de `npm run test:coverage` → 84.44 % |
| 6 | Build producción | Captura de `npm run build` |
| 7 | .gitignore | Captura de exclusiones `.env`, `coverage/`, `dist/` |
| 8 | Aplicación local | Capturas de rutas en navegador (`npm run dev`) |
| 9 | GitHub | Captura del repositorio remoto *(cuando se suba)* |
| 10 | Vercel | Captura de *Deployment Completed* *(cuando se despliegue)* |
| 11 | GitHub Actions | Captura de workflow CI en verde *(tras push a GitHub)* |

---

## Resumen ejecutivo

### Heredado del Laboratorio 3

- Aplicación SPA React + Vite con componentes reutilizables (`ConceptoCard`, `MateriaItem`, `PersonajeCard`, `Card`)
- Componentes estructurales (`Header`, `Footer`, `Layout`)
- 5 páginas con React Router (`Inicio`, `Nosotros`, `Contactos`, `Información`, `Personajes`)
- Servicio `obtenerPersonajes()` consumiendo Rick and Morty API
- CSS Modules, PropTypes, Hooks (`useState`, `useEffect`)

### Implementado en el Laboratorio 4

- Entorno de pruebas: Vitest + jsdom + React Testing Library + Jest DOM
- `src/setupTests.js`
- 7 archivos de prueba con **14 tests aprobados** y **0 fallidos**
- Cobertura: **84.44 %** statements/lines, **41.66 %** branches, **80 %** functions
- Scripts `test`, `test:watch`, `test:coverage`
- Pipeline CI: `.github/workflows/ci.yml` (Vitest + build en push/PR)
- `.gitignore` preparado para GitHub
- `vercel.json` con rewrites SPA (CD al conectar Vercel)

### Falta para cerrar el laboratorio al 100 %

1. **GitHub:** crear commit inicial, configurar `remote` y `git push` (activará CI en Actions)
2. **Vercel:** importar repo, desplegar y documentar URL pública (CD automático)
3. **Informe PDF:** elaborar con capturas de pruebas, cobertura, CI y despliegue

---

*Auditoría basada en el estado real del código. Consulte `README.md` para documentación completa del proyecto.*
