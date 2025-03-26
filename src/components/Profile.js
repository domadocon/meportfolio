import React, { useState } from 'react'
import { IoPerson } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { GiBookCover } from "react-icons/gi";

const Profile = () => {

    const [isActive, setIsActive] = useState(false);
    const [bubble, setBubble] = useState(false);

    const toggleBubble = () => {
        setIsActive(!isActive);
        setBubble(!bubble);
    };



    return (
        <div className='section'>
            <div className="header">
                <h1><a href="#"><img src="./img/logo.png" alt="logo" /></a></h1>

                <div>
                    <ul>
                        <li><a href="#profile">PROFILE</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                    </ul>
                </div>
            </div>


            <div className="profile" id="profile">
                <div className="title">
                    <h2><span>P</span>rofile</h2>
                    <p>
                        안녕하세요! 끈기와 열정이 넘치는 신입 웹 퍼블리셔입니다. <br />
                        꾸준히 공부하면서 기술력과 디자인 감각을 계속 발전시키고 있습니다. <br />
                        앞으로 더 많은 경험을 쌓으며 성장하는 웹 퍼블리셔가 되기 위해 최선을 다하겠습니다.
                    </p>
                </div>

                <div className="aboutme">
                    <div className="picture">
                        <img src="./img/me.png" alt="me" />
                    </div>

                    <div className="human">
                        <div className="detail">
                            <div className="s_title">
                                <h3><span><IoPerson /></span>ABOUT ME</h3>
                            </div>
                            <div className="texts">
                                <p>이름.</p>
                                <p>박진현</p>
                                <p>생년월일.</p>
                                <p>1996.03.03.</p>
                                <p>MBTI.</p>
                                <p>INTP</p>
                                <p>이메일.</p>
                                <p><a href="mailto:jju4768i@naver.com">jju4768i@naver.com</a></p>
                            </div>
                        </div>


                        <div className="certificate">
                            <div className="s_title">
                                <h3><span><PiCertificateFill /></span>CERTIFICATE</h3>
                            </div>

                            <div className="inventory">
                                <p>• Adobe Photosho</p>
                                <p>• Adobe illustratar</p>
                                <p>• Adobe lnDesign</p>
                                <p>• ITQ 마스터  </p>
                            </div>
                        </div>

                        <div className="education">
                            <div className="s_title">
                                <h3><span><GiBookCover /></span>EDUCATIONAL</h3>
                            </div>

                            <div className="inventory">
                                <p>• AI&React 활용 스마트시티웨더 구축 <br /> &#45; 리퍼블리셔 양성과정</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="btn">
                {bubble && (
                    <div className={`bubble ${bubble ? 'active' : ''}`}>
                        <a href="#">이력서</a>
                        <a href="#">자기소개서</a>
                    </div>
                )}

                <img src="./img/top.png" alt="top_png" />
                <button className="top_btn" onClick={toggleBubble}>
                    <div className={`hamburger ${isActive ? 'active' : ''}`}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Profile