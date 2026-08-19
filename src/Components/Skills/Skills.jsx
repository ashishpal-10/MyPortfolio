import React from "react";
import Styles from "../Skills/style.module.css";
// import { skillsData } from "./skillsData";

const Skills = () => {

 const skillsData = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "GSAP",
      "Responsive Design",
    ],
  },

  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
    ],
  },

  {
    category: "Programming",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
    ],
  },

  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Cloudinary",
      "Vite",
      "VS Code",
    ],
  },

  {
    category: "Currently Exploring",
    skills: [
      "AI/ML",
      "Generative AI",
      "RAG",
      "LangChain",
      "OpenCV",
    ],
  },
];




  return (
    <section className={Styles.skills} id="skills">
      <div className={Styles.container}>



      <h2 className={Styles.heading}>Tools of the Trade</h2>

      <div className={Styles.skillsgrid}>
        {skillsData.map((group) => (
          <div className={Styles.skillCat} key={group.category}>
            <h3 className={Styles.Skillsubheading}>{group.category}</h3>

            <div className={Styles.pillrow}>
              {group.skills.map((skill) => (
                <span className={Styles.pill} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
        </div>
    </section>
  );
};

export default Skills;