import React from "react";
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            {/* <div className="project">
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@jccollazosave/️geojson-and-the-eudr-regulation-97d30f4c8a93" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;