import React, { useState } from 'react';
import './scss/style.scss';
import Intro from './pages/Intro';
import Main from './pages/Main';

const App = () => {
  const [isMainPage, setIsMainPage] = useState(false);

  const handleImageClick = () => {
    setIsMainPage(true);
  };

  return (
    <div>
      {!isMainPage ? (
        <Intro handleImageClick={handleImageClick} />
      ) : (
        <Main />
      )}
      
      {/* <Main /> */}
    </div>
  );
};

export default App;
