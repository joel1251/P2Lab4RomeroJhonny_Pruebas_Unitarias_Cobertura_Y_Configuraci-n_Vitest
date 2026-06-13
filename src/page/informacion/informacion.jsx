import styles from "./informacion.module.css";
import { Card } from "../../components/card/card";

export const InformacionPage = () => {
    return (
        <div className={styles.pageInfo}>
            <h1>Pagina de informacion</h1>
            <p>Bienvenido. Aqui encuentras datos generales del proyecto.</p>
            <Card nombre="Juan" edad={20} />
            <form className={styles.formulario}>
                <h2>Formulario rapido</h2>
                <label>
                    Nombre
                    <input type="text" placeholder="Tu nombre" />
                </label>
                <label>
                    Correo
                    <input type="email" placeholder="tu@correo.com" />
                </label>
                <label>
                    Mensaje
                    <textarea rows="3" placeholder="Escribe tu mensaje" />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};