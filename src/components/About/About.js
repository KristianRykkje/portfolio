import React from 'react';

import me from '../../images/me-pic.png';
import './About.css';

const About = () => (
    <div className="about">
        <div className="header">
            About me
            <div className="container">
                <ul className="list">
                    <li>
                        Personal skills
                        <p className="content">
                            I am <strong>hard working</strong> and dedicated to being as good as I can be in programming and have high career goals. I have a background from competing nationally in orienteering. There I always did my best and strived for my goals. I have the same mentality when it comes to programming and working. I want to be as good and as <strong>valuable</strong> for a company as I can get. I am also a <strong>fast learner</strong> who rarely needs a brake. I don't want to be an exspense for the company I am working for. Therefor I work extra hard to know the rutines and the right way of doing the job.
                        </p>
                    </li>
                    <li>
                        <br/>
                        Personal interests
                        <ul className="content content-list">
                            <li>Coding</li>
                            <li>Running</li>
                            <li>Hiking</li>
                            <li>Chilling</li>
                            <li>Reading</li>
                        </ul>
                    </li>
                </ul>
                <img className="me" src={me} alt="" />
            </div>
        </div>
        
    </div>
)

export default About;