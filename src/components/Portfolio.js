import React from "react";
import weddingImage from "../assets/images/dex.leonicornswap.com.png";
import jeansImage from "../assets/images/exante.png";
import carImage from "../assets/images/desolate.png";
import weatherImage from "../assets/images/alethea.png";
import htmlImage from "../assets/images/img_html.jpg";
import cssImage from "../assets/images/img_css.jpg";
import vueImage from "../assets/images/img_vue.jpg";
import reactImage from "../assets/images/img_react.jpg";
import Project from "./project.component";

const Portfolio = () => {
  const projects = [
    {
      title: "BlockChain",
      description:
        "As part of this personal project, I created a decentralized application (DApp) using blockchain technology. The DApp aimed to solve a specific problem or provide a unique solution in a particular industry. I was involved in the entire development lifecycle, including smart contract development, front-end design, and integration with the blockchain network. This project allowed me to deepen my understanding of blockchain technology and its potential applications beyond gaming.",
      skills: [htmlImage, cssImage, reactImage],
      image: weddingImage,  
    },

    {
      title: "Backend Api",
      description:"I have reach exeperience in back-end with Node.js, Laravel and Python. So I mastered express.js and Django. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.",
      skills: [htmlImage, cssImage, vueImage],
      image: jeansImage,
    },
    {
      title: "3D NFT WEB",
      description:
        "Nft is my another main skill and role.",
      skills: [htmlImage, cssImage, reactImage],
      image: carImage,
    },
    {
      title: "FrontEnd UI",
      description:
        "Javascript, Css, HTML 5, BootStrap, Tailwidcss and flexible resopsible design",
      skills: [htmlImage, cssImage, vueImage],
      image: weatherImage,
    },
  ];
  return (
    <section id="portfolio" className="section-block">
      <div className="section-container">
        <h1 className="section-title">Portfolio</h1>
        {projects.map((project, key) => {
          return (
            <Project
              key={key}
              title={project.title}
              description={project.description}
              image={project.image}
              reverse={key % 2}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
