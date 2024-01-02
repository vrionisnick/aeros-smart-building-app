// DropdownMenu.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Reference to the dropdown for handling outside clicks

  // This effect handles clicks outside of the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const menuButtonStyle = {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontSize: '24px', // Adjust the size of the hamburger icon
    color: 'white',
  };

  const dropdownContentStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    right: 0,
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    padding: '12px 16px',
    zIndex: 1,
  };

  const optionStyle = {
    padding: '10px',
    color: 'black',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px' }} ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} style={menuButtonStyle}>
        &#9776;
      </button>
      <div style={dropdownContentStyle}>
        <div style={optionStyle} onClick={() => { navigate('/landing'); setIsOpen(false); }}>
          Landing
        </div>
        <div style={optionStyle} onClick={() => { navigate('/recommendations'); setIsOpen(false); }}>
          Recommendations
        </div>
        <div style={optionStyle} onClick={() => { navigate('/preferences'); setIsOpen(false); }}>
          Preferences
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
