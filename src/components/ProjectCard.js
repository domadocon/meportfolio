import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { TbArrowBigRightFilled } from "react-icons/tb";

const ProjectCard = ({ item }) => {
  return (
    <>
      <div className="card">
        <h2>
          {item.bigtitle && (
            <>
              <span style={{ color: '#DF5559' }}>P</span>
              {item.bigtitle.slice(1)}
            </>
          )}
        </h2>

        <div className='card_i'>
          <h3>{item.title}</h3>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={item.title} />
          </a>
          <div className="skill">
            <p>{item.skill}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              사이트이동 <FiArrowUpRight size={38} />
            </a>
          </div>
          <div className="description">
            {item.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
        <div className="c_but">
          <button type="button" onClick={() => window.open(item.url, "_blank")}>
            사이트이동<TbArrowBigRightFilled size={22} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
