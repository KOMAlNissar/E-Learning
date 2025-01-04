function Banner() {
  const bannerStyle = {
    backgroundImage: `url('https://t3.ftcdn.net/jpg/02/39/39/92/360_F_239399223_tthRTvt26El5ccmyQIck9ySsHKgX5YBo.jpg')`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    alignItems: 'center', // Vertically center content
    justifyContent: 'flex-start', // Align content to the left
    color: '#fff',
    textAlign: 'left', // Align text to the left
    padding: '2rem',
  };

  const textContainerStyle = {
    maxWidth: '600px',
    marginLeft: '2rem', // Add margin for spacing from the edge
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    margin: '1rem 0',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  };

  const joinButtonStyle = {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#ff4081',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const getStartedButtonStyle = {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#ff4081f',
    border: '2px solid #ff4081',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={bannerStyle}>
      <div style={textContainerStyle}>
        <h2 style={titleStyle}>Build your Skills Anytime, Anywhere</h2>
        <p style={descriptionStyle}>
          Improve your learning experiences and outcomes with this powerful
          learning management system designed for the 21st century learner.
        </p>
        <div style={buttonContainerStyle}>
          <button style={joinButtonStyle}>Join Course</button>
          <button style={getStartedButtonStyle}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
