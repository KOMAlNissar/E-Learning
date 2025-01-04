import React from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'; // For email and subscribe icons

function Footer() {
  const year = new Date().getFullYear();

  // Custom footer styling
  const footerStyle = {
    textAlign: "center",
    padding: "2rem 1rem",
    backgroundColor: "#f0e6f6", // Light purple color for a soft look
    color: "#5a3d81", // Darker purple for text
    borderTop: "2px solid #5a3d81", // Cute border effect
  };

  const navStyle = {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "1rem",
  };

  const linkStyle = {
    color: "#5a3d81",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s ease",
  };

  const socialIconsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
  };

  // Hover effect on links
  const linkHoverStyle = {
    color: "#e44d75", // Cute pink color on hover
  };

  return (
    <footer style={footerStyle}>
      <div>
        <nav>
          <ul style={navStyle}>
            <li><a href="/contact" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Contact</a></li>
            <li><a href="/subscribe" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Subscribe Now</a></li>
          </ul>
        </nav>
      </div>

      <div style={socialIconsStyle}>
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={25} style={{ color: "#5a3d81" }} /></a>
        <a href="/subscribe" target="_blank" rel="noopener noreferrer"><FaPaperPlane size={25} style={{ color: "#5a3d81" }} /></a>
      </div>

      <p>&copy; {year} Course Platform. All rights reserved.</p>
    </footer>
  );
}

export default Footer;