import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Circle from './component/Circle';
import Dot from './component/Dot';

function App() {
  return (
    <div className="App">
      <h1>JUNK COLLECTION</h1>
      <ul className="list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/circle">Circle</a>
        </li>
        <li>
          <a href="/dot">Dot</a>
        </li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/circle" element={<Circle />} />;
          <Route path="/dot" element={<Dot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
