import React from "react";
import githubLogo from "../assets/github_icon_2.svg";
// import rollingHighMini from "../assets//webl_game/index.html";

function ProjectVideo({id, link, title}) {
  return (
      <div id={id} className="video-wrapper">
        <iframe
          width="1000"
          height="300"
          src={link} 
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
  );
}

function Project({containerName, projectName, stack, projectVideo, projectDescriptionId, projectDescription}) {
  return (    
    <div id={containerName} className="project-container glowing-border-turquoise">
      <div className="project-header">
        <h2 id="project-name"className="project-name turquoise-text">&gt;&gt; {projectName} </h2>
        <a href={"google.com"}>
          <img id="github-icon" src={githubLogo} className="github-icon glowing-circle-white hover-entity"></img>
        </a>
      </div>
      <hr id="project-title-break"></hr>
      <h3 id="project-stack" className="project-stack light-white--text">[ {stack} ]</h3>
      <hr id="project-stack-break"></hr>
      <ProjectVideo 
        id={projectVideo.id} 
        link={projectVideo.link}
        title={projectVideo.title}
      />
      <hr id="project-video-break"></hr>
      <div className="project-description-div">
        <p id={projectDescriptionId} className="project-description-text">{projectDescription}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" >
      {/* <h1 className="project-text green-neon-text">&gt; Projects</h1> */}
      <h1 className="project-text light-white-neon-text">&gt; Users / Caleb / <span className="turquoise-neon-text">Passion_Projects</span></h1>
      <hr></hr>
      <Project
        containerName="autoply-container"
        projectName="AutoPly"
        stack="JavaScript, HTML/CSS, Puppeteer, OpenAI API"
        projectVideo={{
          id: "autoply-video",
          link: "https://www.youtube.com/embed/YFNtBa7dms4?si=oTh7WCBXDsvznF7W&rel=0&modestbranding=1",
          title: "AutoPly Demo"
        }}
        projectDescriptionId="autoply-description"
        projectDescription= 
          <>
          <u>AutoPly</u> is an <span className="yellow-neon-text">end-to-end job application automation extension</span> that integrates OpenAI's API to answer unique questions. 
          I built it to streamline my job application process and to practice my JavaScript skills while gaining experience with OpenAI's API.
          It specifically automates Simplify.jobs applications and is mainly compatible with Workday, but also supports Greenhouse and Lever.
          </>AutoPly 
      />

      <Project
        containerName="rollinghigh-container"
        projectName="RollingHigh.exe"
        stack="C#, Unity"
        projectVideo={{
          id: "rolling-high-video",
          link: "https://www.youtube.com/embed/mHtduPaAyZQ?start=0&rel=0&modestbranding=1",
          title: "Rolling High Trailer"
        }}
        projectDescriptionId="rollinghigh-description"
        projectDescription= "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />

      <iframe
        src="http://localhost:5173/webgl/index.html"
        width="0"
        height="0"
        style={{ border: "none" }}
      ></iframe>

    </section>
  );
}