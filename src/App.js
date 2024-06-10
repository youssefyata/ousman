// src/App.js
import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';
import Graphique from './Grahique';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path='/graphique/*' element={<Graphique />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
