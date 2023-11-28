import React from "react";
import htmlImage from "../assets/images/img_html.jpg";
import cssImage from "../assets/images/img_css.jpg";
import jsImage from "../assets/images/img_js.png";
import vueImage from "../assets/images/img_vue.jpg";
import Skill from "./skill.component";

const About = () => {
  const skills = [
    { percent: 95, skillName: "html", image: htmlImage },
    { percent: 90, skillName: "css", image: cssImage },
    { percent: 95, skillName: "js", image: jsImage },
    { percent: 90, skillName: "vue", image: vueImage },
  ];

  return (
    <section id="about" className="section-block">
      <div className="section-container">
        <h1 className="section-title">About Me</h1>
        <p className="summary">
          I'm talented Fullstack developer and Software Engineer with 7+ years of experience in web development. As an experienced web developer, I'm specialized in Javascript Frameworks such as React/Typescript, Vue,
          Svelte Kit, React, etc. In the backend side, I'm familiar with Node/Express, Python, Laravel API, Csharp. I developed so many small & medium sized website and web application by collaborating with
          senior developers. Then, I played important parts of developing Front-end, Back-end and Database design.
          <br />
          When it comes to my personality, I'm very cheerful and open-minded. I like learning the newest technologies and sharing my ideas for the development with teammates. Now, I'm just jumping
          into the Web 3.0, AI, ioT world.
        </p>
        <div className="skill-section">
          {skills.map((skill, key) => {
            return <Skill key={key} percent={skill.percent} skill={skill.skillName} image={skill.image} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
