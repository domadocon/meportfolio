import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";

const footer = () => {


  return (
    <footer className='section'>
      <h2>
        감사합니다
        <span>
          <img src="./img/footer_icon.png" alt="footer_icon" />
        </span>
      </h2>


      <div className="info">
        <div className='contact'>
          <a href="mailto:jju4768i@naver.com"><HiOutlineMail size={40} /></a>
          <a href="https://github.com/domadocon" target="_blank" rel="noopener noreferrer"><IoLogoGithub size={40} /></a>
        </div>

        <div className='info_text'>
          <p>
            상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다 <br />
            © 2025 Park_Jinhyeon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default footer