import React from "react";
import Styles from "../About/style.module.css";

const About = () => {
  return (
    <section className={Styles.about} id="about">
      <div className={Styles.container}>
        <div className={Styles.left}>
          <span>Get to Know Me</span>

          <h2 className={Styles.heading}>About</h2>

          <div className={Styles.content}>
            <p className={Styles.para}>
              I'm a Computer Science student with a strong interest in web development, software engineering, and emerging technologies.
            </p>

            <p className={Styles.para}>
              I enjoy learning by building. From React applications and REST APIs to full-stack projects, I've been continuously experimenting with different technologies and turning what I learn into practical projects.
            </p>

            <p className={Styles.para}>
              Currently, I'm focused on improving my frontend and backend development skills, understanding how real-world applications are built, and creating projects that solve practical problems.
            </p>

            <p className={Styles.para}>
              My goal is simple: keep learning, keep building, and become a better developer with every project. </p>
          </div>
        </div>

        <div className={Styles.right}>
          <div className={Styles.stackImg}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
              alt="Developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;