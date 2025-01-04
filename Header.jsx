import React, { useState } from "react";

function Header({ onSelectSection }) {
  const [activeSection, setActiveSection] = useState("home");

  const handleSelectSection = (section) => {
    setActiveSection(section); // Update the active section
    onSelectSection(section); // Call the parent component's function
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img
          src="https://thumbs.dreamstime.com/b/e-learning-logo-vector-concept-online-center-graduation-illustration-flat-design-abstract-background-education-97659237.jpg"
          alt="Logo"
          style={logoStyle}
        />
        <h1 style={titleStyle}>E-Learning</h1>
      </div>
      <nav style={navStyle}>
        <ul style={navLinksStyle}>
          <li>
            <a
              href="#home"
              style={linkStyle}
              onClick={() => handleSelectSection("home")}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={linkStyle}
              onClick={() => handleSelectSection("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#program"
              style={linkStyle}
              onClick={() => handleSelectSection("program")}
              className={activeSection === "program" ? "active" : ""}
            >
              Our Program
            </a>
          </li>
          <li>
            <a
              href="#info"
              style={linkStyle}
              onClick={() => handleSelectSection("info")}
              className={activeSection === "info" ? "active" : ""}
            >
              Info
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={linkStyle}
              onClick={() => handleSelectSection("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={() => handleSelectSection("login")}
          >
            Login
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#ff6f61" }}
            onClick={() => handleSelectSection("demo")}
          >
            Free Demo
          </button>
        </div>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem 2.5rem",
  borderBottom: "3px solid rgb(246, 241, 241)",
};

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  height: "50px",
  marginRight: "1rem",
  borderRadius: "50%",
};

const titleStyle = {
  fontSize: "1.8rem",
  color: "#ff4081",
  margin: 0,
  fontFamily: "Comic Sans MS",
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "50%",
};

const navLinksStyle = {
  listStyle: "none",
  display: "flex",
  gap: "1.5rem",
  margin: 0,
  padding: 0,
  flexWrap: "nowrap",
};

const linkStyle = {
  textDecoration: "none",
  color: "#ff4081",
  fontSize: "1rem",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  transition: "color 0.3s ease",
};

const buttonContainerStyle = {
  display: "flex",
  gap: "1.2rem",
};

const buttonStyle = {
  padding: "0.6rem 1.2rem",
  fontSize: "1.1rem",
  backgroundColor: "#ff4081",
  color: "rgb(246, 241, 241",
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

// Button hover effect
buttonStyle[":hover"] = {
  backgroundColor: "#ff80ab",
};

// Active link style
const activeLinkStyle = {
  color: "#ff80ab", // Light pink when active
};

export default Header;
