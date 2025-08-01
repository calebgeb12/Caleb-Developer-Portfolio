import React from "react";
// import javaScriptIcon from "../assets/javascript_icon.svg";
// import htmlIcon from "../assets/html_icon.svg";
// import cssIcon from "../assets/css_icon.svg";
// import javaIcon from "../assets/java_icon.svg";
// import csharpIcon from "../assets/csharp_icon.svg";
// import unityIcon from "../assets/unity_icon.svg";
// import pythonIcon from "../assets/python_icon.svg";
// import gitIcon from "../assets/git_icon.svg";

import javaScriptIcon from "../assets/skill_icons/javascript_icon.svg";
import htmlIcon from "../assets/skill_icons/html_icon.svg";
import cssIcon from "../assets/skill_icons/css_icon.svg";
import javaIcon from "../assets/skill_icons/java_icon.svg";
import csharpIcon from "../assets/skill_icons/csharp_icon.svg";
import unityIcon from "../assets/skill_icons/unity_icon.svg";
import pythonIcon from "../assets/skill_icons/python_icon.svg";
import gitIcon from "../assets/skill_icons/git_icon.svg";

export default function Skills() {

    // array of skills
    const skillsArray = [
        { name: "JavaScript", icon: javaScriptIcon, link: "google.com"},
        { name: "HTML", icon: htmlIcon, link: "google.com"},
        { name: "CSS", icon: cssIcon, link: "google.com"},
        { name: "Java", icon: javaIcon, link: "google.com"},
        { name: "C#", icon: csharpIcon, link: "google.com"},
        { name: "Unity", icon: unityIcon, link: "google.com"},
        { name: "Python", icon: pythonIcon, link: "google.com"},
        { name: "Git", icon: gitIcon, link: "google.com"},
    ];


    return (
        <div className = "skills-section">
            {/* <h2>&gt; Skills</h2> */}
            <h1 className="white-neon-text">&gt; Skills</h1>
            <hr></hr>
            {/* <p>Hover over each to see how I've used them!!</p> */}
            <div className="skills-list">
                {skillsArray.map((skill, index) => (
                    <a key = {index} href={skill.link} className="skill-link">
                        <img src={skill.icon} alt={skill.name} className = "skill-image"></img>
                    </a>
                ))}
            </div>
        </div>
    )
}