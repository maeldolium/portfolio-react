import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaGithub } from "react-icons/fa";
import { SiCplusplus  } from "react-icons/si";
import styles from "../styles/Skills.module.css";

const skills = [
    {name: "HTML", icon : <FaHtml5 color="#E34F26" />},
    {name: "CSS", icon: <FaCss3Alt color="#1572B6" />},
    {name: "Javascript", icon: <FaJs color="#F7DF1E" />},
    {name: "React", icon: <FaReact color="#61DAFB" />},
    {name: "Python", icon: <FaPython color="#3776AB" />},
    {name: "C", icon: <img src="/public/assets/c-1.svg" alt="C#" width="40" height="40" />},
    {name: "C++", icon: <SiCplusplus color="#00599C" />},
    {name: "C#", icon: <img src="/public/assets/csharp-logo.svg" alt="C#" width="40" height="40" />},
    {name: "Java", icon: <FaJava color="#007396" />},
    {name: "Github", icon: <FaGithub color="white" />},
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <h2>Mes Compétences</h2>
            <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillCard}>
                        <span className={styles.icon}>{skill.icon}</span>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}