// src/Home.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  const handleDownArrowClick = () => {
    navigate('/about?tab=1');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === 'keydown') {
      console.log("i ame herre");
      navigate('/about?tab=1');
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) { // Adjust the value based on when you want to trigger the navigation
      navigate('/about?tab=1');
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="background">
      <div className="center-content">
        <h3>JE SUIS</h3>
        <div>
          <img src='/images/wellsart.png' alt='Profile' />
        </div>
        <h2>Graphique designer</h2>
        <Link to="/about?tab=3">
          <button className="services-button">NOS SERVICES</button>
        </Link>
        <button onClick={handleDownArrowClick} className="down-arrow-button">
          {/* Add your down arrow icon or text here */}
          ▼
        </button>
      </div>
    </div>
  );
}

export default Home;
