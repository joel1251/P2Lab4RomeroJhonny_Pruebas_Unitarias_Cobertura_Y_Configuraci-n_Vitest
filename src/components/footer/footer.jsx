import styles from './footer.module.css';

export const Footer = () => {

    const anioActual = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.title}>React Components Lab</p>
        <p className={styles.text}>
          {anioActual} - Proyecto de practica con React, Router, CSS Modules y consumo de API.
        </p>
      </div>
    </footer>
  );
}

