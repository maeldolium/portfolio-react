// Import du module CSS
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}> 
            <ul className={styles.navList}>
                <li><a href="#hero">Accueil</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li> 
                <li><a href="#contact">Contact</a></li> 
            </ul>
        </nav>
    );
}
