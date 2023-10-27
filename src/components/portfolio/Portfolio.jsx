import "./portfolio.css";

import IMG1 from "../../assets/ai.jpg";
import IMG2 from "../../assets/portfolio.jpg";
import IMG3 from "../../assets/face_attendence.jpeg";
import IMG4 from "../../assets/resume.jpeg";

import React from "react";


const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Image Generator Website",
      img: IMG1,
      description:
        "A website built with React and Node.js, featuring an API, generating dynamic images, enhancing user experience.",
      technologies: " React Js | Open API",
      
    },
    {
      id: 2,
      title: "Resume Builder",
      img: IMG4,
      description:
        "A React-based resume builder application, efficiently creating personalized resumes with user-friendly customization.",
      technologies: "React js",
      
    },
    {
      id: 3,
      title: "Portfolio",
      img: IMG2,
      description: "A React portfolio showcasing skills, projects, and experiences to inform potential employers or clients.",
      technologies: "React js",
    },
    {
      id: 4,
      title: "Face Attendence System",
      img: IMG3,
      description:
        "Python-based attendance system using libraries, automating attendance tracking with facial recognition and data storage.",
      technologies: "Python",
      
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
