import React from 'react';

import html5 from '../../images/html5-logo.png';
import css3 from '../../images/css3-logo.png';
import javascript from '../../images/javascript-logo.png';
import json from '../../images/json-logo.png';
import nodejs from '../../images/nodejs-logo.png';
import npm from '../../images/npm-logo.png';
import react from '../../images/react-logo.png';
import postgresql from '../../images/postgresql-logo.png';
import python from '../../images/python-logo.png';
import maple from '../../images/maple-logo.png';
// import matlab from '../../images/matlab-logo.png';
import csharp from '../../images/c-sharp-logo.png';
import GoogleAnalytics from '../../images/GoogleAnalytics.png';
import redux from '../../images/redux-logo.png';
import GitHub from '../../images/GitHub-logo.png';
import sass from '../../images/sass-logo.png';

import './Skills.css';

const Skills = () => (
    <div className="skills">
        <h1>
            DEVELOPER SKILLS
        </h1>
        <div className="under-header"/>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={html5} alt="" />
            </p>
            <p></p>
            <div>
                <h2>HTML</h2>
                <p className="list-content">
                    I am comfortable in writing html. I know where to search up tags and syntaxes if I need to. I use w3schools.com and developer.mozilla.org for resources. As html is not the most important language to know, I do not focus specifically on learning this. However I do use a lot of JSX in my JS apps and therefor I do learn a lot html through that.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={css3} alt="" />
            </p>
            <p></p>
            <div>
                <h2>CSS</h2>
                <p className="list-content">
                    I really enjoy working with css. From using flexbox and grid to custumizing everything on a webpage with little to none limitations is exciting although time consuming. I feel pretty comfortable in using css and the resources online is astounding and intuitive. I use resources like w3schools.com and css-tricks.com. I even use cheatsheets like darekkay.com/dev/flexbox-cheatsheet.html and grid.malven.co/ which are easy to understand and implement.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={sass} alt="" />
            </p>
            <p></p>
            <div>
                <h2>SASS</h2>
                <p className="list-content">
                    "CSS with superpowers" sums it up in my opinion too. Makes it a lot easier working with scalable projects.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={GitHub} alt="" />
            </p>
            <p></p>
            <div>
                <h2>GitHub</h2>
                <p className="list-content">
                    I have learned all the basics after uploading and downloading frequently from GitHub on my projects and others. 
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={javascript} alt="" />
            </p>
            <p></p>
            <div>
                <h2>Javascript</h2>
                <p className="list-content">
                    Javascript is my favorite coding language. And since the changes that came with ECMASript 6 it is even better. I am very comfortable using types, camparison, variables (old and news), conditionals, logical operators, functions, data structures, looping and a bunch of keywords. I also say up to date with the recent changes and features.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={react} alt="" />
            </p>
            <p></p>
            <div>
                <h2>React</h2>
                <p className="list-content">
                    I have work quite some time in React. I am very excited work with React and creating websites.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={redux} alt="" />
            </p>
            <p></p>
            <div>
                <h2>Redux</h2>
                <p className="list-content">
                    When I first learned about what Redux enables I thought it was really excited. It opened up many possibilities in sending and recieving states. Especially in growing apps I see how easy it makes it compared to sending states through multiple layers before being able to use it.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={json} alt="" />
            </p>
            <p></p>
            <div>
                <h2>JSON</h2>
                <p className="list-content">
                    I learned coding JSON when I was working on React projects. It is simple and easy to get a hold on.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={nodejs} alt="" />
            </p>
            <p></p>
            <div>
                <h2>Node.js</h2>
                <p className="list-content">
                    I began using Node.js when I was setting up a server for on of my projects. Before I used Node.js I always had to check my browser to se the output of my code. Node.js made it easier to work with backend stuff like servers, but also for things like adventofcode challenges.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={GoogleAnalytics} alt="" />
            </p>
            <p></p>
            <div>
                <h2>GoogleAnalytics</h2>
                <p className="list-content">
                    Google Analytics is something I was searching for when I first launched an webapplication. I took a course in it and experiment a whole lot and implemented it in one of my websites. I think it is exciting seeing what traffic a webpage get.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={npm} alt="" />
            </p>
            <p></p>
            <div>
                <h2>npm</h2>
                <p className="list-content">
                    npm is something I have always used when I need to install dependencies into my projects. I always read about the packages so that I understand what im installing. Bcrypt was one of the packages I read more about. 
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={postgresql} alt="" />
            </p>
            <p></p>
            <div>
                <h2>PostgrSQL</h2>
                <p className="list-content">
                   I began using PostgrSQL when I set up my first database. I understand the difference between relational databasen and none-relational ones.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={python} alt="" />
            </p>
            <p></p>
            <div>
                <h2>Python</h2>
                <p className="list-content">
                    I know the basic and think it is easy to use. Haven't work with any libraries other than pygames.
                </p>
            </div>
        </div>
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={maple} alt="" />
            </p>
            <p></p>
            <div>
                <h2>Maple</h2>
                <p className="list-content">
                    I have work professionally with Maple for Node Rådgivende Ingeniører AS and made sheets for them to look up dimensions beams and whatnot.
                </p>
            </div>
        </div>
        {/* <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={matlab} alt="" />
            </p>
            <p></p>
            <div>
                <h2>MATLAB</h2>
                <p className="list-content">
                    I have used matlab in university. I know the basic and are comfortable learning more if needed.
                </p>
            </div>
        </div> */}
        <div className="box-list">
            <p></p>
            <p>
                <img className="list-image image-size" src={csharp} alt="" />
            </p>
            <p></p>
            <div>
                <h2>C#</h2>
                <p className="list-content">
                    I have used C# for a project where I used Tekla-open-api. I learned a lot from this, but haven't done much more than that.
                </p>
            </div>
        </div>
    </div>
);

export default Skills;