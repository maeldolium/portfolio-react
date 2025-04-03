import styles from "../styles/Projects.module.css";

// Liste des projets
const projects = [
    {
        title: "Mon Portfolio",
        description: "Un portfolio pour présenter mes compétences et mes projets.",
        image: "",
        link: "https://github.com/maeldolium/portfolio-react"
    },
    {
        title: "Quiz Project",
        description: "Un projet de quiz sur les langages de développement web.",
        image: "",
        link: "https://github.com/maeldolium/quiz_project"
    },
    {
        title: "Projet GymTech",
        description: "Réalisation d'un site internet pour une salle de sport connectée dans le cadre d'un projet de groupe de 150h.",
        image: "",
        link: "https://github.com/maeldolium/gymtech"
    },
    {
        title: "Pierre-Papier-Ciseaux",
        description: "Un projet de jeu Pierre-Papier-Ciseaux en Python.",
        image: "",
        link: ""
    },
    {
        title: "Morpion",
        description: "Un projet de jeu Morpion en C++.",
        image: "",
        link: ""
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <h2>Mes Projets</h2>
            <div className={styles.projectGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <img src={project.image} alt={project.title} className="styles.projectImage" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                    </div>
                ))}
            </div>
        </section>
    );
}