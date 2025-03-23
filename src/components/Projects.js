import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Weather',
    description: ['설명'],
    img: './img/weather.png',
    skill: 'JSX / CSS / React / ReactRouter / TanstckQuey',
  },
  {
    id: 2,
    title: 'TodoList',
    description: ['설명'],
    img: './img/todolist.png',
    skill: 'JSX / CSS / React',
  },
  {
    id: 3,
    title: 'Lunabrew Clone Coding',
    description: ['설명'],
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
    <div className="projects section">
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
