import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Intro from './pages/intro';
import Quiz from './pages/quiz';
import Result from './pages/result';
import Final from './pages/final';

import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Intro />} />
          <Route path={"/quiz"} element={<Quiz />} />
          <Route path={"/result"} element={<Result />} />
          <Route path={"/final"} element={<Final />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
