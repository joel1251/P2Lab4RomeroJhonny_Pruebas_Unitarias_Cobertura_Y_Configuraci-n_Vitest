import PropTypes from 'prop-types';
import styles from './materia-item.module.css';

export const MateriaItem = ({ icon, nombre, descripcion }) => {
    return (
        <article className={styles.item}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.body}>
                <h4 className={styles.name}>{nombre}</h4>
                <p className={styles.description}>{descripcion}</p>
            </div>
        </article>
    );
};

MateriaItem.propTypes = {
    icon: PropTypes.node,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
};

export default MateriaItem;
