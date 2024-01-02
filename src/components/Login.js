import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Logging in with", email, password);
    // On successful login, redirect to the LandingPage
    navigate('/landing');
  }

  const loginStyle = {
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

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '40px',
    borderRadius: '5px',
    width: '300px',
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '10px',
    border: 'none',
    borderBottom: '3px solid blue',
    outline: 'none',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={loginStyle}>
      <h2>aerOS Smart Building App</h2>
      <h4>Login to your Account</h4>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            style={inputStyle}
          />
        </div>
        <div>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={inputStyle}
          />
        </div>
        <div>
          <button type="submit" style={buttonStyle}>SIGN IN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;