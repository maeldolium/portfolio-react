import styles from "../styles/Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Maël DOLIUM. Tous droits réservés.</p>
            <div className={styles.socialLinks}>
                <a href="https://github.com/maeldolium" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/ma%C3%ABl-dolium-455b44285/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </footer>
    );
}
