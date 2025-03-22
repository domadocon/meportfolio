import React from 'react';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div className='web'>
      <Profile />
      <Skills />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Main