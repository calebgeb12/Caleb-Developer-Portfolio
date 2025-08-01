import React from "react";

function ProjectVideo({id, link, title}) {
  return (
      <div id={id} className="video-wrapper">
        <iframe
          width="560"
          height="400"
          src={link} 
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
  );
}

// function Project({containerName, projectName, stack, projectVideo, projectDescriptionId, projectDescription}) {
//   return (    
//     <div id={containerName}>
//       <h2 className="green-neon-text">&gt; {projectName}</h2>
//       <h3 className="white-neon-text">{stack}</h3>
//       <div className="inner-container">
//         <ProjectVideo id={projectVideo.id} link={projectVideo.link} title={projectVideo.title}/>
//         <h3 id={projectDescriptionId}>{projectDescription}</h3>
//       </div>
//     </div>
//   );
// }

export default function Projects() {
  return (
    <section className="projects-section" >
      <h1 className="white-neon-text">&gt; Projects</h1>
      <hr></hr>

      <Project 
        containerName="autoply-container"
        projectName="AutoPly" 
        stack={"JavaScript, HTML/CSS, Puppeteer, OpenAI API"}
        projectVideo={{
          id: "autoply-video",
          link: "https://www.youtube.com/embed/YFNtBa7dms4?si=oTh7WCBXDsvznF7W",
          title: "AutoPly Demo"
        }}
        projectDescriptionId="autoply-description"
        projectDescription={`
          AutoPly is an end-to-end job application automation extension that integrates OpenAI's API to answer unique questions. 
          I built it to streamline my job application process and to practice my JavaScript skills while gaining experience with OpenAI's API.
          It specifically automates Simplify.jobs applications and is mainly compatible with Workday, but also supports Greenhouse and Lever.
        `}
      />
      
      <div id="rollinghigh-container">
        <h2 className="green-neon-text">RollingHigh.exe</h2>
        <h3 className="white-neon-text">C#, Unity</h3>
        <div className="inner-container">
          <h3 id="rollinghigh-description">

            {/* A 3D endless runner that combines ball rolling physics and shapeshifting platforms.  */}
            RollingHigh.exe is a 3D endless runner that challenges players to navigate a fast-paced, ever-changing course using momentum-based ball rolling mechanics. As the player speeds forward, platforms continuously shift in shape, size, and position—demanding precise control, quick reflexes, and adaptability. Designed in Unity with C#, the game blends smooth physics with dynamic level design to create a high-intensity experience that rewards focus and flow. Whether dodging gaps or reacting to sudden terrain changes, players are pushed to stay sharp and roll with the chaos.           
          </h3>
          <ProjectVideo id="rolling-high-video" link="https://www.youtube.com/embed/mHtduPaAyZQ" title="Rolling High Trailer"/>
        </div>
      </div>
    </section>
  );
}