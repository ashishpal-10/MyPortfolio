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
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      
    ],
  },

{
    category: "Backend",
    skills: [
      "NodeJs",
      "Express",
      "MongoDB",
      "MySQL",
    
    ],
  },

  {
    category: "Tools",
    skills: [
      "Figma",
  
      "Git",
      "GutHub",
     
  
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