import "./inicio.css";
import { Link } from "react-router-dom";
import { ConceptoCard } from "../../components/concepto-card";

const cards = [
    {
        titulo: "Componentes reutilizables",
        descripcion: "Separamos la interfaz en piezas pequeñas para mantener el codigo claro y facil de mantener.",
    },
    {
        titulo: "Navegacion fluida",
        descripcion: "React Router permite moverse entre vistas sin recargar la pagina y mejora la experiencia del usuario.",
    },
    {
        titulo: "Consumo de API",
        descripcion: "La vista de personajes consume la API de Rick and Morty y muestra datos reales de forma dinamica.",
    },
];

const quickFacts = [
    { value: "4", label: "paginas principales" },
    { value: "3", label: "componentes base" },
    { value: "1", label: "API externa conectada" },
];

export const InicioPage = () => {
    return (
        <div className="inicio-page">
            <section className="inicio-hero">
                <div className="inicio-copy">
                    <p className="inicio-eyebrow">Practica 3 · React y Vite</p>
                    <h1>Una interfaz mas clara, mas visual y con contenido real</h1>
                    <p className="inicio-lead">
                        Esta version organiza mejor la informacion del proyecto, presenta la practica con jerarquia visual y deja listas las rutas para navegar entre componentes, paginas y la API.
                    </p>
                    <div className="inicio-actions">
                        <Link className="button button-primary" to="/personajes">
                            Ver personajes
                        </Link>
                        <Link className="button button-secondary" to="/nosotros">
                            Conocer el semestre
                        </Link>
                    </div>
                </div>

                <aside className="inicio-panel" aria-label="Resumen rapido">
                    {quickFacts.map((fact) => (
                        <div key={fact.label} className="fact-card">
                            <strong>{fact.value}</strong>
                            <span>{fact.label}</span>
                        </div>
                    ))}
                </aside>
            </section>

            <section className="inicio-section">
                <div className="section-heading">
                    <span>Base conceptual</span>
                    <h2>Lo que esta practica demuestra</h2>
                </div>

                <div className="cards-grid">
                    {cards.map((card) => (
                        <ConceptoCard key={card.titulo} titulo={card.titulo} descripcion={card.descripcion} />
                    ))}
                </div>
            </section>

            <section className="inicio-strip">
                <div>
                    <p className="strip-label">Ruta sugerida</p>
                    <h2>Empieza por Inicio, sigue con Nosotros y termina en Personajes</h2>
                </div>
                <p>
                    La pagina ahora tiene una narrativa mas clara para exponer la practica en clase y tambien para entregar capturas con mejor presencia visual.
                </p>
            </section>
        </div>
    );
};