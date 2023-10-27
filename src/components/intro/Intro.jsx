import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/mee.jpg'



const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Abhay Tripathi" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Intern</h5>
              <small>1 month at code alpha </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>My Projects</small>
            </article>
          </div>
          <p>
          "Passionate Frontend Developer specializing in React.js, with a daily commitment to solving Data Structure and Algorithm (DSA) challenges. My expertise lies in crafting engaging and responsive user interfaces using React, while my dedication to daily DSA practice hones my problem-solving skills. I strive for excellence in both frontend development and coding proficiency, making me a well-rounded developer who thrives in the ever-evolving world of web development."
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
