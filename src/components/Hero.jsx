import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.container}>
                <h1>Bienvenue sur mon Portfolio</h1>
                <p>Je suis Maël DOLIUM, étudiant passionné par le développement et la programmation, avec un intérêt pour la cybersécurité. Je suis actuellement en recherche d'une alternance dans le cadre de mon admission en cycle ingénieur à Junia ISEN.</p>
                <a href="#projects" className={styles.cta}>Voir mes projets</a>
            </div>
        </section>
    );
}