import PropTypes from 'prop-types';
import styles from './personaje.module.css';

export const PersonajeCard = ({ nombre, especie, url }) => {
    return (
        <article className={styles.card}>
            {url ? <img src={url} alt={nombre} className={styles.image} /> :
             <div className={styles.fallback} />}
            <div className={styles.body}>
                <p className={styles.kicker}>Rick and Morty API</p>
                <h3 className={styles.name}>{nombre}</h3>
                <p className={styles.species}>{especie}</p>
            </div>
        </article>
    );
};

PersonajeCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    especie: PropTypes.string,
    url: PropTypes.string,
};

export default PersonajeCard;