function Login() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient(to right, #969ce6, #fad0c4)',
    fontFamily: "'Poppins', sans-serif",
  };

  const loginBoxStyle = {
    background: '#fff',
    borderRadius: '15px',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: '1rem',
    color: '#ff4081',
  };

  const formGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    color: '#ff4081',
  };

  const buttonStyle = {
    background: '#ff4081', // Updated color for the button
    color: '#fff',
    padding: '0.8rem 2rem',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  };

  const buttonHoverStyle = {
    background: '#7a8cf5', // Slightly darker shade on hover
  };

  return (
    <div style={containerStyle}>
      <div style={loginBoxStyle}>
        <h2 style={titleStyle}>Login</h2>
        <form>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <button
              type="submit"
              style={{ ...buttonStyle }}
              onMouseEnter={(e) =>
                (e.target.style.background = buttonHoverStyle.background)
              }
              onMouseLeave={(e) =>
                (e.target.style.background = buttonStyle.background)
              }
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
