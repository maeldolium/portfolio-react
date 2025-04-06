// Import du module CSS
import { useState } from 'react';  // Importer useState pour gérer l'état du menu burger
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);  // État pour gérer l'ouverture du menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);  // Inverse l'état du menu
    };

    return (
        <nav className={styles.navbar}> 
            {/* Menu burger */}
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <div className={styles.burger}></div>
                <div className={styles.burger}></div>
                <div className={styles.burger}></div>
            </div>

            {/* Liste des liens de navigation */}
            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
                <li><a href="#hero">Accueil</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li> 
                <li><a href="#contact">Contact</a></li> 
            </ul>
        </nav>
    );
}
