import React from "react";
import Slider from "react-slick";  // Importation de Slick Carousel
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaGithub } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import styles from "../styles/Skills.module.css";

const skills = [
    {name: "HTML", icon: <FaHtml5 color="#E34F26" />},
    {name: "CSS", icon: <FaCss3Alt color="#1572B6" />},
    {name: "Javascript", icon: <FaJs color="#F7DF1E" />},
    {name: "React", icon: <FaReact color="#61DAFB" />},
    {name: "Python", icon: <FaPython color="#3776AB" />},
    {name: "C", icon: <img className="skill-icon" src="/assets/c-1.svg" alt="C" width="32px" height="32px"/>},
    {name: "C++", icon: <SiCplusplus color="#00599C" />},
    {name: "C#", icon: <img className="skill-icon" src="/assets/csharp-logo.svg" alt="C#" width="32px" height="32px"/>},
    {name: "Java", icon: <FaJava color="#007396" />},
    {name: "Github", icon: <FaGithub color="white" />},
];


export default function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="skills" className={styles.skills}>
      <h2>Mes Compétences</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <span className={styles.icon}>{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
