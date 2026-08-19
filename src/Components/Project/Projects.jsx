import React from "react";
import Styles from "../Project/style.module.css";
// import { projects } from "./projects";

const Projects = () => {

//    const projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     description:
//       "A premium, animated personal portfolio built with HTML, CSS and JavaScript featuring smooth animations and responsive design.",
//     image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
//     technologies: ["HTML5", "CSS3", "JavaScript"],
//     liveLink: "https://your-portfolio.com",
//     githubLink: "https://github.com/username/portfolio",
//   },
//   {
//     id: 2,
//     title: "Chat Application",
//     description:
//       "A real-time chat application with authentication, Socket.io messaging, online users, and responsive UI.",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
//     technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
//     liveLink: "https://chat-app.vercel.app",
//     githubLink: "https://github.com/username/chat-app",
//   },
//   {
//     id: 3,
//     title: "Medicine Comparison",
//     description:
//       "A MERN stack application to compare medicine prices, search alternatives, and manage products with CRUD functionality.",
//     image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
//     technologies: ["React", "Express", "MongoDB", "Node.js"],
//     liveLink: "https://medicine-app.vercel.app",
//     githubLink: "https://github.com/username/medicine-app",
//   },
//   {
//     id: 4,
//     title: "Gallery App",
//     description:
//       "Image gallery with upload, preview, delete functionality using Multer and Express backend.",
//     image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
//     technologies: ["React", "Express", "Multer"],
//     liveLink: "https://gallery-app.vercel.app",
//     githubLink: "https://github.com/username/gallery-app",
//   },
//   {
//     id: 5,
//     title: "Pokédex",
//     description:
//       "A responsive Pokédex application consuming the Pokémon API with search, filters, and detailed Pokémon information.",
//     image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1200&auto=format&fit=crop",
//     technologies: ["React", "REST API", "CSS"],
//     liveLink: "https://pokedex.vercel.app",
//     githubLink: "https://github.com/username/pokedex",
//   },
// ];


const projects = [
  {
    id: 1,
    title: "Pokédex App",
    description:
      "An interactive Pokémon application built with React and PokéAPI. Users can explore Pokémon through dynamically fetched API data with a clean card-based interface.",
    image:
      "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "JavaScript", "PokéAPI", "CSS3"],
    liveLink: "https://your-pokedex.com",
    githubLink: "https://github.com/username/pokedex",
  },

  {
    id: 2,
    title: "MHA Character Book",
    description:
      "A dynamic My Hero Academia character showcase built with React. The project focuses on reusable components, dynamic rendering and smooth animations using GSAP.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "JavaScript", "GSAP", "CSS3"],
    liveLink: "https://your-mha-app.com",
    githubLink: "https://github.com/username/mha-character-app",
  },

  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A creative personal portfolio website designed in a neo-brutalist style with animated sections, interactive hover effects, responsive layouts and a showcase of skills and projects.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/username/portfolio",
  },

  // {
  //   id: 4,
  //   title: "Lama Dev",
  //   description:
  //     "A modern web development project inspired by Lama Dev tutorials, focusing on building a responsive and interactive web application with a clean user interface.",
  //   image:
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  //   technologies: ["React", "JavaScript", "CSS3"],
  //   liveLink: "https://your-lama-dev-project.com",
  //   githubLink: "https://github.com/username/lama-dev",
  // },
];

  return (
    <section className={Styles.projects} id="project">
      <h2 className={Styles.heading}>Featured Projects</h2>

      <div className={Styles.projectGrid} id="scroll">
        {projects.map((project) => (
          <div className={Styles.card} key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className={Styles.image}
            />
            <div className={Styles.content}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>
              <div className={Styles.techStack}>
                {project.technologies.map((tech) => (
                  <span className={Styles.tech} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={Styles.buttons}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.primaryBtn}
                >
                  Visit Website ↗
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.secondaryBtn}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};




export default Projects;