import styles from '../styles/Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <h2>Retrouvez-moi</h2>
            <div className={styles.socialLinks}>
                <a href="https://github.com/maeldolium" target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={40} className={styles.icon} /> GitHub
                </a>
                <a href="" target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={40} className={styles.icon} /> LinkedIn
                </a>
                <a href="mailto:maeldolium@gmail.com">
                    <FaEnvelope size={40} className={styles.icon} /> Email
                </a>
            </div>
        </section>
    );
}