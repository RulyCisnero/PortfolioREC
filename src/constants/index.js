import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

// Skills Section Logo's
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
//import nextjsLogo from "../assets/tech_logo/nextjs.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import javaLogo from "../assets/tech_logo/java.png";
import pythonLogo from "../assets/tech_logo/python.png";
import typescriptLogo from "../assets/tech_logo/typescript.png";
import githubLogo from "../assets/tech_logo/github.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import postgreLogo from "../assets/tech_logo/postgre.png";
import CypressLogo from "../assets/tech_logo/Cypress.png";
import PlaywriteLogo from "../assets/tech_logo/Playwrite.png";
import SeleniumLogo from "../assets/tech_logo/Selenium.png";
import CucumberLogo from "../assets/tech_logo/Cucumber.png";
import JenkinsLogo from "../assets/tech_logo/Jenkins.png";
import WebDevToolsLogo from "../assets/tech_logo/service.png";

// Project Section Logo's

import AutomationExercices from '../assets/work_logo/AutomationExerciseimg.jpg';



export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      //{ name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Postgre\nSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Jenkins', logo: JenkinsLogo },
      { name: 'WebDev\nTools', logo: WebDevToolsLogo },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Cypress', logo: CypressLogo },
      { name: 'Playwrite', logo: PlaywriteLogo },
      { name: 'Selenium', logo: SeleniumLogo },
      { name: 'Cucumber', logo: CucumberLogo },
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "QA Automation",
    company: "Practica Autodidacta.",
    description: `Realicé la automatización de pruebas funcionales sobre el sitio automationexercise.com, aplicando buenas prácticas en QA como el patrón Page Object Model (POM) y BDD con Cucumber. Utilicé Cypress con TypeScript como stack principal y generé reportes detallados con Allure.
    Me enfoqué en casos de uso clave como el registro de usuarios, inicio de sesión, contacto, navegación por categorías, y verificación de flujo de compra.
    Además, estructuré el proyecto para ser fácilmente escalable, configuré hooks reutilizables y comandos personalizados, y trabajé en la integración de reportes para análisis de resultados.
    Este proyecto fue parte de mi desarrollo práctico para consolidar mis habilidades como QA Automation con enfoque en entornos reales y mantenibles.`,
    technologies: ["Cypress", "TypeScript", "JavaScript", "Node JS", "Cucumber", "Allure"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Bahia blanca",
  phoneNo: "12345678",
  email: "raulecisnero@gmail.com",
};

export const projects = [
  {
    id: 1,
    title: "Automation Exercise - Testing automatizado",
    description:
      "Automaticé casos funcionales del sitio automationexercise.com utilizando Cypress con TypeScript, BDD con Cucumber y reportes en Allure. Apliqué buenas prácticas como el patrón Page Object Model (POM) y comandos personalizados. El proyecto simula un flujo real de usuario y está orientado a prácticas profesionales de QA Automation.",
    image: AutomationExercices,
    tags: ["Cypress", "TypeScript", "JavaScript", "Node JS", "Cucumber", "Allure"],
    github: "https://github.com/RulyCisnero/cypress-automationExercise",
    webapp: "",
  },
];  
