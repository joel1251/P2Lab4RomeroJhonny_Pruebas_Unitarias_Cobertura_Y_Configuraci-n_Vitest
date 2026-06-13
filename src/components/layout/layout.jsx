import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};
