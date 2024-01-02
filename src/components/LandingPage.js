import React from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';// Import the Menu component

function LandingPage() {
  const navigate = useNavigate();

  const landingStyle = {
    backgroundImage: 'url("/images/background.png")', // Add your background image path
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  };

  const buttonStyle = {
    padding: '15px 30px',
    margin: '10px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    fontSize: '16px',
    cursor: 'pointer',
    width: '200px',
  };

  return (
    <div style={landingStyle}>
     <DropdownMenu /> {/* Include the Menu component */}
      <h2>aerOS Smart Building App</h2>
      <button 
        style={buttonStyle} 
        onClick={() => navigate('/recommendations')}
      >
        RECOMMEND DESKS
      </button>
      <button 
        style={buttonStyle} 
        onClick={() => navigate('/preferences')}
      >
        SET PREFERENCES
      </button>
    </div>
  );
}

export default LandingPage;
