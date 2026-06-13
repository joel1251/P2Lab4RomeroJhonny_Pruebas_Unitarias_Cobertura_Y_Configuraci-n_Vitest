import "./nosotros.css";
import { MateriaItem } from "../../components/materia-item";

const materias = [
    {
        icon: "RJ",
        nombre: "React",
        descripcion: "Base principal para construir la interfaz con componentes reutilizables y estado dinámico.",
    },
    {
        icon: "RT",
        nombre: "React Router",
        descripcion: "Permite organizar la navegación entre Inicio, Nosotros, Información, Personajes y Contactos.",
    },
    {
        icon: "CM",
        nombre: "CSS Modules",
        descripcion: "Aíslan los estilos por componente para conservar el diseño sin conflictos entre vistas.",
    },
];

const principios = [
    "Construir una interfaz clara que explique el proyecto de forma profesional.",
    "Separar páginas, componentes y servicios para facilitar el mantenimiento.",
    "Mostrar contenido real, no texto de relleno, en cada sección de la entrega.",
];

const strengthCards = [
    {
        icon: "01",
        title: "Jhonny Joel Romero Lopez",
        text: "Autor del proyecto académico individual desarrollado para la materia Integración de Componentes Web.",
    },
    {
        icon: "02",
        title: "Universidad de las Fuerzas Armadas ESPE",
        text: "Institución académica en la que se desarrolla y entrega esta práctica de laboratorio.",
    },
    {
        icon: "03",
        title: "Integración de Componentes Web",
        text: "Proyecto orientado a demostrar navegación, reutilización de componentes y consumo de API.",
    },
    {
        icon: "04",
        title: "JavaScript",
        text: "Lenguaje utilizado para la lógica de la aplicación, los Hooks y el manejo de datos dinámicos.",
    },
    {
        icon: "05",
        title: "Vite",
        text: "Herramienta usada para inicializar, desarrollar y compilar la aplicación React de forma ágil.",
    },
    {
        icon: "06",
        title: "Rick and Morty API",
        text: "Servicio externo consultado para mostrar personajes de manera dinámica en la página correspondiente.",
    },
];

export const NosotrosPage = () => {
    return (
        <div className="nosotros-page">
            <section className="nosotros-hero">
                <div>
                    <p className="section-label">Sobre mí</p>
                    <h1>Jhonny Joel Romero Lopez</h1>
                    <p className="lead">
                        Este proyecto académico individual pertenece a la Universidad de las Fuerzas Armadas ESPE y forma parte de la asignatura Integración de Componentes Web.
                        El objetivo es demostrar manejo de componentes, navegación, estilos encapsulados y consumo de una API pública con una presentación clara.
                    </p>
                </div>

                <div className="quote-card">
                    <p className="quote-title">Perfil del proyecto</p>
                    <p>
                        Aplicación desarrollada con React y Vite para consolidar prácticas de frontend moderno dentro de una entrega universitaria funcional.
                    </p>
                </div>
            </section>

            <section className="nosotros-section">
                <div className="section-heading">
                    <span>Objetivo del proyecto</span>
                    <h2>Qué se busca demostrar con esta entrega</h2>
                </div>

                <div className="principles-grid">
                    {principios.map((principio, index) => (
                        <div key={principio} className="principle-card">
                            <span className="principle-number">0{index + 1}</span>
                            <p>{principio}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="nosotros-section">
                <div className="section-heading">
                    <span>Tecnologías utilizadas</span>
                    <h2>Herramientas empleadas en el desarrollo</h2>
                </div>

                <div className="principles-grid">
                    {strengthCards.map((strength) => (
                        <article key={strength.title} className="principle-card">
                            <span className="principle-number">{strength.icon}</span>
                            <strong>{strength.title}</strong>
                            <p>{strength.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="nosotros-section">
                <div className="section-heading">
                    <span>Información académica</span>
                    <h2>Datos de la entrega y contexto institucional</h2>
                </div>

                <div className="materias-list">
                    {materias.map((materia) => (
                        <MateriaItem
                            key={materia.nombre}
                            icon={<span>{materia.icon}</span>}
                            nombre={materia.nombre}
                            descripcion={materia.descripcion}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};