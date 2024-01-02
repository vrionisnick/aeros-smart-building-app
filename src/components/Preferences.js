import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';// Import the Menu component

function Preferences() {
  // Dummy data for desks - replace with actual data
  const desks = ['R101_01', 'R102_02', 'R103_03', 'R104_04', 'R105_05'];

  // States to hold the selected desk for each dropdown
  const [firstDesk, setFirstDesk] = useState('');
  const [secondDesk, setSecondDesk] = useState('');
  const [thirdDesk, setThirdDesk] = useState('');

  const preferencesStyle = {
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

  const dropdownStyle = {
    padding: '10px',
    margin: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '200px',
  };

  const handleDeskChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const filterDesks = (selectedDesk1, selectedDesk2) => {
    return desks.filter(desk => desk !== selectedDesk1 && desk !== selectedDesk2);
  };

  return (
    <div style={preferencesStyle}>
    <DropdownMenu /> {/* Include the Menu component */}
      <h2>Select your 3 Favourite Desks</h2>
      <select
        value={firstDesk}
        onChange={handleDeskChange(setFirstDesk)}
        style={dropdownStyle}
      >
        <option value="">Select the 1st Desk</option>
        {filterDesks(secondDesk, thirdDesk).map((desk) => (
          <option key={desk} value={desk}>{desk}</option>
        ))}
      </select>
      <select
        value={secondDesk}
        onChange={handleDeskChange(setSecondDesk)}
        style={dropdownStyle}
      >
        <option value="">Select the 2nd Desk</option>
        {filterDesks(firstDesk, thirdDesk).map((desk) => (
          <option key={desk} value={desk}>{desk}</option>
        ))}
      </select>
      <select
        value={thirdDesk}
        onChange={handleDeskChange(setThirdDesk)}
        style={dropdownStyle}
      >
        <option value="">Select the 3rd Desk</option>
        {filterDesks(firstDesk, secondDesk).map((desk) => (
          <option key={desk} value={desk}>{desk}</option>
        ))}
      </select>
    </div>
  );
}

export default Preferences;
