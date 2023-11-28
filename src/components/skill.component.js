import React from "react";

const Skill = (props) => {
  const { image, skill, percent } = props;
  return (
    <div className="skill-component">
      <img src={image} alt={image} />
      <div className="skillbar-container">
        <div className={`skills ${skill}`}>{percent}%</div>
      </div>
    </div>
  );
};

export default Skill;
