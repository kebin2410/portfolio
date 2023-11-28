import React from "react";

const Project = (props) => {
  const { image, title, description, skillSet, reverse } = props;
  return (
    <div className={`portfolio-card ${reverse ? "row-reverse" : ""}`}>
      <div className="portfolio-image">
        <img src={image} alt={title} />
      </div>
      <div className="portfolio-description">
        <h2 className="portfolio-title">{title}</h2>
        <p>{description}</p>
        <div className="portfolio-skill-set">
          {skillSet &&
            skillSet.map((skill, key) => {
              <img key={key} src={skill} alt="" />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Project;
