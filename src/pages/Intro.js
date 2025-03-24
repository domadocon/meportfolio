import React from 'react';

const Intro = ({ handleImageClick }) => {
  return (
    <div className="intro_title">
      <h2>
        <span className="bounceball">웹</span>
        <span className="bounceball">퍼</span>
        <span className="bounceball">블</span>
        <span className="bounceball">리</span>
        <span className="bounceball">셔</span>
        의 첫걸음
      </h2>

      <h3>
        <span>박진현</span>
        <img
          src="./img/title.png"
          alt="title_img"
          onClick={handleImageClick}
        />
        <span>포토폴리오</span>
      </h3>

      <div className="click-indicator">
        <span className="arrow">&#8595;</span>
        <span>Click</span>
      </div>
    </div>
  );
};

export default Intro;
