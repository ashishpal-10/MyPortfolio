import React from "react";
import Styles from "../Project/style.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Resume Roast",
      description:
        "An AI-powered resume analysis platform that reviews resumes and provides ATS scores, strengths, weaknesses, missing skills, and personalized improvement suggestions.",
      image: "https://ik.imagekit.io/9alp3jq6v/ResumeRx%20AI.png",

      techStack: ["React", "Node.js", "Express.js", "MongoDB", "AI API"],

      features: [
        "Resume upload and analysis",
        "ATS score calculation",
        "AI-generated feedback",
        "Resume strengths and weaknesses",
        "Missing skills detection",
        "Analysis history",
      ],

      github: "https://github.com/ashishpal-10/ResumeRx-AI",
      live: "",
    },


    {
      id: 2,
      title: "Talkative",
      description:
        "A real-time chat application that allows users to connect, send messages, share profile information, and see online users through a modern responsive interface.",
      image: "https://ik.imagekit.io/9alp3jq6v/talkative.png",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "JWT"
      ],
      features: [
        "User authentication and authorization",
        "Real-time messaging with Socket.IO",
        "Online user status",
        "Profile management",
        "Secure JWT-based authentication",
        "Responsive chat interface"
      ],
      github: "https://github.com/ashishpal-10/ChatApp",
      live: "https://chatapp-xc4o.onrender.com"
    },

    {
      id: 3,
      title: "Tasko",
      description:
        "A full-stack task management application that helps users organize, create, update, and manage their daily tasks efficiently.",
      image: "https://ik.imagekit.io/9alp3jq6v/Tasko.png",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: [
        "User authentication",
        "Create, update, and delete tasks",
        "User-specific tasks",
        "Secure JWT authentication",
        "Responsive dashboard",
        "Task history and management",
      ],
      github: "https://github.com/ashishpal-10/Tasko-ByASH",
      live: "",
    },

    {
      id: 4,
      title: "Srijan Apex",
      description:
        "A modern full-stack blogging platform that allows admins to create, manage, and publish blog content while providing users with a clean and responsive reading experience.",
      image:
        "https://ik.imagekit.io/9alp3jq6v/Srijan.png",
      techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      features: [
        "Admin authentication",
        "Create, update and delete blogs",
        "Dynamic blog rendering",
        "User login and logout",
        "Database-driven content",
        "Responsive UI",
      ],
      github: "https://github.com/ashishpal-10/Srijan-Apex",
      live: "https://srijan-apex.vercel.app/",
    },

    {
      id: 5,
      title: "MHA Character Explorer",
      description:
        "A character exploration application inspired by My Hero Academia, allowing users to browse and discover different characters.",

      image:
        "https://ik.imagekit.io/9alp3jq6v/deku.png",

      techStack: ["React", "JavaScript", "API"],

      features: [
        "Character browsing",
        "Dynamic data rendering",
        "Search functionality",
        "Responsive UI",
      ],

      github: "https://github.com/ashishpal-10/MHA-Character-Book",
      live: "https://mha-character-book.vercel.app/",
    },
    // {
    //   id: 6,
    //   title: "Pokémon Explorer",
    //   description:
    //     "An interactive Pokémon web application where users can search and explore Pokémon with detailed information using a public API.",

    //   image:
    //     "https://ik.imagekit.io/9alp3jq6v/pokedex.png",

    //   techStack: ["React", "JavaScript", "CSS", "Pokémon API"],

    //   features: [
    //     "Search Pokémon",
    //     "View Pokémon details",
    //     "Dynamic API data",
    //     "Responsive user interface",
    //   ],

    //   github: "https://github.com/ashishpal-10/PokeDex-ASH",
    //   live: "https://pokedex-ash.vercel.app/",
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
                {project.techStack.map((tech) => (
                  <span className={Styles.tech} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={Styles.buttons}>
                {project.live && (
                  <a
                    href={project.live || "#"}
                    target={project.live ? "_blank" : "_self"}
                    rel={project.live ? "noopener noreferrer" : undefined}
                    className={Styles.primaryBtn}
                  >
                    View Live ↗
                  </a>
                )}

                <a
                  href={project.github}
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