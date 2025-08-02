import React from "react";

export default function WorkExperience() {
    return (
        <section className="experiences-section">
            <h1 className="project-text light-white-neon-text">&gt; Users / Caleb / <span className="turquoise-neon-text">Work_Experience</span></h1>
            <hr></hr>
            <div className="experience-container glowing-border-turquoise">
                <div>
                    <h2 className="turquoise-text">&gt;&gt; Gwinnett County Government</h2>
                    <h3>IT Intern</h3>
                    <p className="work-dates">June 2023</p>
                    <hr id="position-title-break"></hr>
                    <p className="project-description-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <h2 className="turquoise-text">&gt;&gt; Georgia Gwinnett College</h2>
                    <h3>Computational Neuroscience Intern</h3>
                    <p className="work-dates">September 2021 - November 2021</p>
                    <hr id="position-title-break"></hr>
                    <p className="project-description-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                </div>
            </div>
        </section>
    );
}