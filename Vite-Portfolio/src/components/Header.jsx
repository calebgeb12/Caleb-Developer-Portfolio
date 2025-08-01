import React from "react";
import tempPic from "../assets/temp_profile_pic.png";
import profilePic from "../assets/normal_profile_pic.png";
import gitHubIcon from "../assets/github_icon.svg";
import linkedinIcon from "../assets/linkedin_icon.svg";
import resumeIcon from "../assets/resume_icon.svg";

export default function Header() {
  const topLinks = [
    {text: "About", link:"google.com"},
    {text: "Projects", link:"google.com"},
    {text: "Skills", link:"google.com"},
    {text: "Work Experience", link: "google.com"},
    {text: "Contact_Info", link:"google.com"},
  ];

  const icons = [
    {name: "github", link: "https://github.com/calebgeb12", image: gitHubIcon},
    {name: "linkedin", link: "www.linkedin.com/in/caleb-gebremeskel-7a626a324", image: linkedinIcon},
    {name: "resume", link: "https://github.com/calebgeb12", image: resumeIcon},
  ];

  return (
    <div className = "header-section">

      <div className = "top-links white-neon-text">
        {topLinks.map((top_link) => (
          <a href={top_link.link} key={top_link.text} className="hover-entity">
            {top_link.text}
          </a>
        ))}
      </div>
      
      <h1 id="full-name" className="green-neon-text">&gt; Caleb Gebremeskel</h1>
      <h2 className="turquoise-neon-text">&gt;&gt; Aspiring Fullstack Developer</h2>
      <hr></hr>
      <h3 id="mission-statement" className="white-text">
        I'm an aspiring Fullstack Developer <br></br>who's passionate about  creating <br></br> cool projects with impact.
      </h3>

      <div className="links-section">
        {icons.map((icon) => (
          <a href={icon.link} key={icon.name}>
            <img src={icon.image} className="icon glowing-circle-white hover-entity"></img>
          </a>
        ))}
      </div>
    </div>
  );
}