import PropTypes from 'prop-types';
import styles from './concepto-card.module.css';

export const ConceptoCard = ({ imagen, titulo, descripcion }) => {
    return (
        <article className={styles.card}>
            {imagen ? (
                <img src={imagen} alt={titulo} className={styles.image} />
            ) : (
                <div className={styles.placeholder} aria-hidden="true">
                    <span className={styles.placeholderMark}>React</span>
                </div>
            )}
            <div className={styles.body}>
                <p className={styles.kicker}>Concepto clave</p>
                <h3 className={styles.title}>{titulo}</h3>
                <p className={styles.description}>{descripcion}</p>
            </div>
        </article>
    );
};

ConceptoCard.propTypes = {
    imagen: PropTypes.string,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
};

export default ConceptoCard;
