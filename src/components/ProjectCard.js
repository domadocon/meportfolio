import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ item }) => {
  return (
    <div className="card">
      <div className='card_i'>
        <h2>{item.title}</h2>
        <a href="#">
          <img src={item.img} alt={item.title} />
        </a>
        <div className="skill">
          <p>{item.skill}</p>
          <a href="#"> 사이트이동 <FiArrowUpRight size={38} /> </a>
        </div>
        <div className="description">
          {item.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
