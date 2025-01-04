import React, { useState } from 'react';

const Profile = () => {
  const [progress] = useState(70); // Assuming progress is static for now, can be dynamic later

  // Inline styles for Profile component
  const profileContainerStyle = {
    padding: '2rem',
    maxWidth: '400px',
    margin: '2rem auto',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#ff4081',
    fontSize: '1.8rem',
  };

  const paragraphStyle = {
    textAlign: 'center',
    color: '#4d4d4d',
    fontSize: '1.2rem',
  };

  const progressBarStyle = {
    background: '#ffe3e3',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '1rem',
  };

  const progressBarSpanStyle = {
    display: 'block',
    height: '20px',
    background: '#ff4081',
    width: `${progress}%`, // Dynamically set width based on progress
  };

  return (
    <div style={profileContainerStyle}>
      <h2 style={headerStyle}>Your Profile</h2>
      <p style={paragraphStyle}>Welcome back, User!</p>
      <div style={progressBarStyle}>
        <span style={progressBarSpanStyle}></span>
      </div>
      <p style={paragraphStyle}>Progress: {progress}%</p>
    </div>
  );
};

export default Profile;
