import styles from "./header.module.css";
import { Link, NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Inicio" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/informacion", label: "Información" },
    { to: "/contactos", label: "Contactos" },
    { to: "/personajes", label: "Personajes" },
];

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.brand} to="/" aria-label="Ir al inicio">
                <span className={styles.brandMark}>RC</span>
                <span className={styles.brandText}>
                    <strong>React Components Lab</strong>
                    <small>Componentes, rutas y API en una sola practica</small>
                </span>
            </Link>
            <nav className={styles.nav} aria-label="Navegacion principal">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `${styles.itemMenu} ${isActive ? styles.active : ""}`.trim()
                        }
                        end={link.to === "/"}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};