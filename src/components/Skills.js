import React from 'react';
import SkillsItem from './SkillsItem';

const Skills = () => {
  return (
    <div className='skills section' id="skills">
      <h2><span>S</span>kills</h2>

      <div className="skills_icon">
        <div className="coding">
          <h3>Coding</h3>

          <div className="icons">
            <SkillsItem
              iconSrc="./img/html_icon.png"
              altText="html_icon"
              skillName="HTML"
              percentage="90%"
            />
            <SkillsItem
              iconSrc="./img/css_icon.png"
              altText="css_icon"
              skillName="CSS"
              percentage="80%"
            />
            <SkillsItem
              iconSrc="./img/javascript_icon.png"
              altText="javascript_icon"
              skillName="JavaScript"
              percentage="60%"
            />
            <SkillsItem
              iconSrc="./img/react_icon.png"
              altText="react_icon"
              skillName="React"
              percentage="60%"
            />
            <SkillsItem
              iconSrc="./img/redux_icon.png"
              altText="redux_icon"
              skillName="Redux"
              percentage="50%"
            />
            <SkillsItem
              iconSrc="./img/tanstckquey_icon.png"
              altText="tanstckquey_icon"
              skillName="TanstckQuey"
              percentage="50%"
            />
          </div>
        </div>

        <div className="design">
          <h3>Design</h3>

          <div className="icons">
            <SkillsItem
              iconSrc="./img/photoshop_icon.png"
              altText="photoshop_icon"
              skillName="Photoshop"
              percentage="80%"
            />
            <SkillsItem
              iconSrc="./img/illustrator_icon.png"
              altText="illustrator_icon"
              skillName="illustrater"
              percentage="70%"
            />
            <SkillsItem
              iconSrc="./img/lndesign_icon.png"
              altText="inDesign_icon"
              skillName="inDesign"
              percentage="50%"
            />
          </div>

        </div>

        <div className="itq">
          <h3>ITQ</h3>

          <div className="icons">
            <SkillsItem
              iconSrc="./img/hwp_icon.png"
              altText="hwp_icon"
              skillName="HWP"
              percentage="95%"
            />
            <SkillsItem
              iconSrc="./img/powerpoint_icon.png"
              altText="powerpoint_icon"
              skillName="PowerPoing"
              percentage="90%"
            />
            <SkillsItem
              iconSrc="./img/excel_icon.png"
              altText="excel_icon"
              skillName="Excel"
              percentage="90%"
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Skills