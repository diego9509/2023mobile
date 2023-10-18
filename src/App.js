import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Intro from './pages/intro';
import Quiz from './pages/quiz';
import Result from './pages/result';

import './font/pretendard-subset.css';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Intro />} />
          <Route path={"/quiz"} element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
