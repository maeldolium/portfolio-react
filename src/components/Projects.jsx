import React from 'react';
import Slider from 'react-slick';  // Assure-toi d'importer le composant Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Portfolio",
    description: "Mon portfolio personnel réalisé avec React.",
    technologies: ["React", "CSS Modules"],
    image: "/assets/portfolio.png",
    link: "https://github.com/maeldolium/portfolio-react",
  },
  {
    title: "GymTech",
    description: "Un site internet réalisé dans le cadre d'un projet de 150h en BTS CIEL.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/assets/GymTech.png",
    link: "https://github.com/maeldolium/gymtech",
  },
  {
    title: "Quiz Project",
    description: "Un projet de quiz en ligne sur les langages de développement Web.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/assets/Quiz_project.png",
    link: "https://github.com/maeldolium/quiz_project",
  },
  {
    title: "Morpion",
    description: "Un jeu de morpion à deux joueurs ou contre un bot.",
    technologies: ["C++"],
    image: "/assets/morpion.png",
    link: "https://github.com/maeldolium/morpion"
  },
  {
    title: "Pierre-feuille-ciseaux",
    description: "Un jeu de pierre-feuille-ciseaux contre un bot.",
    technologies: ["Python"],
    image: "/assets/pierre-feuille-ciseaux.png",
    link: "https://github.com/maeldolium/pierre-feuille-ciseaux"
}
];

export default function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "15px",
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
            },
        ],
    };
  
    return (
      <section id="projects" className={styles.projects}>
        <h2>Mes Projets</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.techList}>
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          ))}
        </Slider>
      </section>
    );
  }