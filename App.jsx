
import React from "react";
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Courses from './Courses.jsx';
import Profile from './Profile.jsx';
import Login from './Login.jsx';
import Footer from './Footer.jsx';


function App() {
  const onSelectSection = (section) => {
    console.log(`Navigate to: ${section}`);
    // Add logic to navigate to different sections if needed
  };

  return (
    <>
      <Header onSelectSection={onSelectSection} />
      <Banner onSelectSection={onSelectSection} />
      <Courses onSelectSection={onSelectSection} />
      <Profile  onSelectSection={onSelectSection} />
      <Login onSelectSection={onSelectSection} />
      <Footer />
    </>
  );
}

export default App;
