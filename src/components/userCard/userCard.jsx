import styles from "./userCard.module.css";
import PropTypes from 'prop-types';

export const UserCard = ({ edad, url, nombre, estado = true }) => {
    return (
        <div className={styles.usercard}>
            <h3>{nombre}</h3>
            <p>{edad > 18 ? 'Es mayor de edad' : 'Es menor de edad'}</p>
            <p>Estado: {estado ? 'Activo' : 'Inactivo'}</p>
            <p>URL: {url}</p>
        </div>
    );
};

UserCard.propTypes = {
    edad: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    estado: PropTypes.bool
};