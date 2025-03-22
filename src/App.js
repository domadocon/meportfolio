import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Main from './pages/Main';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;