import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Weather',
    description: [
      '• React 및 React Router를 활용하여 컴포넌트 기반 SPA 제작',
      '• React Query를 사용하여 비동기 API 데이터 요청 및 상태 관리',
      '• useEffect와 setInterval을 이용한 실시간 시계 구현',
      '• 조건부 렌더링을 사용해 동적 및 애니메이션(낮/밤 배경, 구름, 별) 생성',
    ],
    img: './img/weather.png',
    skill: 'JSX / CSS / React / ReactRouter / TanstckQuey',
  },
  {
    id: 2,
    title: 'TodoList',
    description: [
      '• React를 활용한 컴포넌트 기반 SPA 제작',
      '• useState를 이용해 할 일 추가, 수정, 삭제 및 완료 상태 관리',
      '• Enter 키 입력으로 할 일 추가 및 수정 기능 구현',
      '• 완료 / 미완료 / 전체 보기 필터 버튼 구현',

    ],
    img: './img/todolist.png',
    skill: 'JSX / CSS / React',
  },
  {
    id: 3,
    title: 'Lunabrew Clone Coding',
    description: [
      '• 화면 크기에 따라 자동으로 레이아웃이 조정, 모바일 화면에서 햄버거 메뉴',
      '• 페이지 스크롤에 따라 헤더가 고정되어 네비게이션이 항상 노출',
      '• 슬라이드 및 배경 애니메이션을 통해 다이나믹한 사용자 경험제공',
      '• 마우스를 올리면 애니메이션 효과과 및 추가 정보가 나타나도록 구현'
    ],
    img: './img/lunabrew.png',
    skill: 'HTML / CSS / JavaScript',
  },
];

const Projects = () => {

  const scrollRef = useRef();
  const scrolling = useRef(false);

  const handleWheel = (e) => {
    const container = scrollRef.current;
    const scrollWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    const currentIndex = Math.round(currentScroll / scrollWidth);

    if (currentIndex === 0 && e.deltaY < 0) {
      return;
    }

    if (currentIndex === projects.length - 1 && e.deltaY > 0) {
      return;
    }

    e.preventDefault();

    if (scrolling.current) return;

    let nextIndex;
    if (e.deltaY > 0 && currentIndex < projects.length - 1) {
      nextIndex = currentIndex + 1;
    } else if (e.deltaY < 0 && currentIndex > 0) {
      nextIndex = currentIndex - 1;
    } else {
      return;
    }

    scrolling.current = true;

    //부드러운 스크롤
    window.requestAnimationFrame(() => {
      container.scrollTo({
        left: scrollWidth * nextIndex,
        behavior: 'smooth',
      });
    });

    setTimeout(() => {
      scrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    const el = scrollRef.current;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="projects section" id="projects">
      <div className="left">
        <h2><span>P</span>rojects</h2>
      </div>

      <div className="right">
        <div className="scroll" ref={scrollRef}>
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
