import "./contactos.css";
import { Card } from "../../components/card/card";

const canales = [
    {
        label: "Nombre",
        value: "Jhonny Joel Romero Lopez",
        detail: "Autor y responsable del proyecto.",
    },
    {
        label: "Correo",
        value: "jjromero5@espe.edu.ec",
        detail: "Canal de contacto institucional.",
    },
    {
        label: "Teléfono",
        value: "+593 997173609",
        detail: "Número de contacto principal.",
    },
];

export const ContactosPage = () => {
    return (
        <div className="contactos-page">
            <section className="contactos-hero">
                <div>
                    <p className="section-label">Contacto personal</p>
                    <h1>Jhonny Joel Romero Lopez</h1>
                    <p className="lead">
                        Aquí se muestran los datos reales del proyecto académico individual para facilitar la comunicación y la entrega universitaria.
                    </p>
                </div>

                <div className="contact-tip">
                    <p className="tip-title">Información institucional</p>
                    <p>
                        Universidad de las Fuerzas Armadas ESPE · Integración de Componentes Web.
                    </p>
                </div>
            </section>

            <section className="contactos-section">
                <div className="section-heading">
                    <span>Canales disponibles</span>
                    <h2>Datos de contacto del estudiante</h2>
                </div>

                <div className="contact-grid">
                    {canales.map((canal) => (
                        <article key={canal.label} className="contact-card">
                            <p className="contact-label">{canal.label}</p>
                            <strong>{canal.value}</strong>
                            <span>{canal.detail}</span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="contactos-section contactos-support">
                <div className="section-heading">
                    <span>Persona de apoyo</span>
                    <h2>Tarjeta de presentación individual</h2>
                </div>

                <Card nombre="Jhonny Joel Romero Lopez" edad={19} />
            </section>
        </div>
    );
};