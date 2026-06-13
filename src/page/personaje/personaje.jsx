import { useState, useEffect } from 'react';
import { obtenerPersonajes } from '../../services/rick-and-morty-service';
import { PersonajeCard } from '../../components';
import styles from './personaje.module.css';

export const PersonajesPage = () => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPersonajes = async () => {
            try {
                setLoading(true);
                setError("");
                const data = await obtenerPersonajes();
                setPersonajes(data);
            } catch (err) {
                console.error(err);
                setError("No fue posible cargar los personajes en este momento.");
            } finally {
                setLoading(false);
            }
        };
        fetchPersonajes();
    }, []);

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div>
                    <p className={styles.kicker}>Rick and Morty API</p>
                    <h1 className={styles.title}>Personajes con datos reales y una presentacion mas clara</h1>
                    <p className={styles.lead}>
                        Esta vista consulta la API, organiza la respuesta y la renderiza con tarjetas reutilizables para que el proyecto se vea mas completo y profesional.
                    </p>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statCard}>
                        <strong>{personajes.length}</strong>
                        <span>personajes cargados</span>
                    </div>
                    <div className={styles.statCard}>
                        <strong>{loading ? "..." : "OK"}</strong>
                        <span>estado de consulta</span>
                    </div>
                </div>
            </section>

            {error ? <div className={styles.message}>{error}</div> : null}

            {loading ? (
                <div className={styles.message}>Cargando personajes...</div>
            ) : (
                <div className={styles.grid}>
                    {personajes.map((personaje) => (
                        <PersonajeCard
                            key={personaje.id}
                            nombre={personaje.name}
                            especie={personaje.species}
                            url={personaje.image}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PersonajesPage;