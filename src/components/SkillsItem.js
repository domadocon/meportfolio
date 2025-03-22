import React from 'react';

const SkillItem = ({ iconSrc, altText, skillName, percentage }) => {
  return (
    <div className="icon">
      <div className="img">
        <img src={iconSrc} alt={altText} />
      </div>
      
      <div className="text">
        <p>{skillName}</p>
        <span>{percentage}</span>
      </div>
    </div>
  );
};

export default SkillItem;
