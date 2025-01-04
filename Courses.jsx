import React from "react";

function Courses() {
  const courses = [
    {
      name: "Graphic Designing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wbR52QKmhqauoAFYA7D5rdW834l0VYqiew&s", // Replace with the image URL
      description: "Learn the fundamentals of web development.",
    },
    {
      name: "UI/UX Desiging",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3nV2FaoNDmJEu0X7XtM3YvyTB7OGNFTiwg&s", // Replace with the image URL
      description: "Dive into advanced JavaScript concepts.",
    },
    {
      name: "English SPeaking",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdT_zQFmoTqAM6ikQfTrCN0RMwATuBlVxFg&s", // Replace with the image URL
      description: "Master frontend frameworks like React.",
    },
    {
      name: "Animation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0CliVHHleg34-yFXSJji3QG8tMpSm_o3EFQ&s", // Replace with the image URL
      description: "Learn the fundamentals of web development.",
    },
    {
      name: "HTML/CSS",
      image: "https://i.ytimg.com/vi/G3e-cpL7ofc/maxresdefault.jpg", // Replace with the image URL
      description: "Dive into advanced JavaScript concepts.",
    },
    {
      name: "Language Course",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeMnnkLWtI6pYS342oBrie7mN09auVclfHQ&s", // Replace with the image URL
      description: "Master frontend frameworks like React.",
    },
    {
      name: "Artificial Intelligence",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SqkNM0hdZgOU0bgpfW4_k59755NuUZAE8Q&s", // Replace with the image URL
      description: "Learn the fundamentals of web development.",
    },
    {
      name: "Computer Sceinece",
      image: "https://i.ytimg.com/vi/CxGSnA-RTsA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB81zDsfTaH6F6crVu5J-kDJDouAQ", // Replace with the image URL
      description: "Dive into advanced JavaScript concepts.",
    },
  ];

  const onViewDetails = (course) => {
    console.log(`View details for: ${course}`);
    // Add logic for viewing course details here
  };

  return (
    <main className="courses" style={coursesStyle}>
      <h2 style={headingStyle}>Our Courses</h2>
      <div className="course-grid" style={gridStyle}>
        {courses.map((course, index) => (
          <div key={index} className="course-card" style={cardStyle}>
            <img
              src={course.image}
              alt={course.name}
              style={imageStyle}
            />
            <div className="content" style={contentStyle}>
              <h3 style={titleStyle}>{course.name}</h3>
              <p style={descriptionStyle}>{course.description}</p>
              <button style={buttonStyle} onClick={() => onViewDetails(course.name)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const coursesStyle = {
  padding: "2rem",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "2rem",
  fontSize: "2rem",
  color: "#ff4081",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
};

const cardStyle = {
  background: "#fff4e6",
  borderRadius: "8px",
  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "transform 0.3s",
  border: "2px solid #ff4081",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderBottom: "2px solidrgb(121, 127, 224)",
};

const contentStyle = {
  padding: "1rem",
};

const titleStyle = {
  margin: "0 0 1rem",
  fontSize: "1.5rem",
  color: "#ff4081",
};

const descriptionStyle = {
  margin: "0",
  fontSize: "1rem",
  color: "#888",
};

const buttonStyle = {
  marginTop: "1rem",
  padding: "0.5rem 1rem",
  border: "none",
  background: "#ff4081",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background 0.3s",
};

export default Courses;
