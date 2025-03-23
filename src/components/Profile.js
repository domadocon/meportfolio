import React, { useState } from 'react'
import { IoLogoGithub } from "react-icons/io";
import { RxHamburgerMenu } from 'react-icons/rx';

const Profile = () => {

    const [bubble, setBubble] = useState(false);

    const toggleBubble = () => {
        setBubble(!bubble);
    };


    return (
        <div className='section'>
            <div className='header'>
                <h1><a href="#"><img src="img/logo.png" alt="logo" /></a></h1>

                <ul>
                    <li><a href="#">PROFILE</a></li>
                    <li><a href="#">SKILLS</a></li>
                    <li><a href="#">PROJECTS</a></li>
                </ul>
            </div>


            <div className="profile">
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
                        <img src="img/desktop_me.png" alt="me" />
                    </div>

                    <div className="human">
                        <div className="detail">
                            <div className="h_title">
                                <p>이름</p>
                                <p>생년월일</p>
                                <p>MBTI</p>
                                <p>이메일</p>
                            </div>

                            <div className="h_text">
                                <p>박진현</p>
                                <p>1996.03.03.</p>
                                <p>INTP</p>
                                <p className='p_icon'>
                                    <a href="#">
                                        jju4768i@naver.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <ul className="qualifications">
                            <li>자격증</li>
                            <li>&#176; Adobe Photoshop</li>
                            <li>&#176; Adobe illustratar</li>
                            <li>&#176; Adobe lnDesign</li>
                            <li>&#176; ITQ 마스터<span> &#40;엑셀&#47;한글&#47;파워포인트&#41;</span></li>
                        </ul>

                        <ul className="education">
                            <li>교육활동</li>
                            <li>&#176; AI&React 활용 스마트시티웨더 구축 <br /> &#45; 리퍼블리셔 양성과정</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="btn">
                {bubble && (
                    <div className="bubble">
                        <a href="#"><IoLogoGithub color='#fff' size={33} /></a>
                        <a href="#">이력서</a>
                        <a href="#">자기소개서</a>
                    </div>
                )}

                <img src="img/top.png" alt="top_png" />
                <button className="top_btn" onClick={toggleBubble}>
                    <RxHamburgerMenu color='#fff' size={28} />
                </button>
            </div>
        </div>
    )
}

export default Profile