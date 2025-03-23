import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ item }) => {
  return (
    <div className="card">
      <div className='card_i'>
        <h4>{item.title}</h4>
        <a href="#">
          <img src={item.img} alt={item.title} />
        </a>
        <div className="skill">
          <p>{item.skill}</p>
          <a href="#"> 사이트이동 <FiArrowUpRight size={38} /> </a>
        </div>
        <p className="description">{item.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
