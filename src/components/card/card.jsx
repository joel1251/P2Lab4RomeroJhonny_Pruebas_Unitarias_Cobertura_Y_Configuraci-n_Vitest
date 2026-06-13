import { useState } from "react";
import styles from "./card.module.css";
import PropTypes from "prop-types";

export const Card = ({ nombre = "Jhonny", edad }) => {
    const [mostrarEdad, setMostrarEdad] = useState(false);
    const esMayorDeEdad = edad > 18;

    return (
        <article className={styles.card}>
            <span className={styles.badge}>Perfil de apoyo</span>
            <h3 className={styles.title}>{nombre}</h3>
            <p className={styles.summary}>
                {esMayorDeEdad ? "Mayor de edad" : "Menor de edad"}. Este bloque se usa 
                como una tarjeta simple para mostrar estados y acciones.
            </p>
            <div className={styles.ageBlock}>
                <span className={styles.ageLabel}>Edad</span>
                <strong className={styles.ageValue}>{mostrarEdad ? edad : "Oculta"}</strong>
            </div>
            <button className={styles.button} onClick={() => setMostrarEdad(!mostrarEdad)}>
                {mostrarEdad ? "Ocultar edad" : "Mostrar edad"}
            </button>
        </article>
    );
};

Card.propTypes = {
    edad: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
};