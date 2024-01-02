import React from 'react';
import { useNavigate } from 'react-router-dom';

function Recommendations() {
  const navigate = useNavigate();

  const recommendationsStyle = {
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

  const desks = ['R105_07', 'R203_01', 'R402_03']; // Replace with actual desk data

  const handleDeskSelection = (desk) => {
    console.log(`Desk ${desk} selected for reservation`);
    // Here you can handle the desk reservation logic or navigation
  };

  return (
    <div style={recommendationsStyle}>
      <h2>Select 1 of the Recommended Desks for Reservation</h2>
      {desks.map((desk) => (
        <button
          key={desk}
          style={buttonStyle}
          onClick={() => handleDeskSelection(desk)}
        >
          {desk}
        </button>
      ))}
    </div>
  );
}

export default Recommendations;