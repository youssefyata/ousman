// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="background">
      <div className="center-content">
        <h3>JE SUIS</h3>
        <div>
          <img src='/images/tee.png' alt='Profile' />
        </div>
        <h1>WELLSART</h1>
        <h2>Graphiste designer</h2>
        <Link to="/about">
          <button className="services-button">NOS SERVICES</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
