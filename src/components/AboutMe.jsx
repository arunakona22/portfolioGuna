import React from 'react';
import "../styles/AboutMe.css";

const AboutMe = ({ aboutText, profilePic }) => {
  return (
    <div className="about-me-container">
      <div className="about-content">
        <h2 className='abt-header'>About Me</h2>
        <p className='abt-content-padding'>{aboutText}</p>
      </div>
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default AboutMe;
