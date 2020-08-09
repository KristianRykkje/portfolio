import React from 'react';

import FacerecognitionImage from '../../images/Facerecognition.png';
import PictureSearchImage from '../../images/ImageSearch.png'
import RestaurantImage from '../../images/Restaurant.png';
import RobotSearchImage from '../../images/RobotSearch.png';
import YoutubeAppImage from '../../images/YoutubeApp.png';
import StreamsVideo from '../../images/streams-video.mp4';

import './Projects.css';

const Projects = () => {
    return(
        <div className="projects">
            <div className="myHeader">
                My Projects
            </div>
            <div className="under-header"/>
            <div className="project-list">
                <div className="project-item">
                    <h2 className="project-item-header">
                        Image recognition app
                    </h2>
                    <div className="project-item-content">
                        A combined project og <strong>both front and backend</strong>. I have used Javascript and React on the front end. On the backend I have used Node.js to set up the server and postgreSQL to set up the database. 
                        <br/>
                        There is a register option in the app the is required to get in to the Imagerecognition. The password is proteced using bcrypt, however I wouldn't type in a sensitive password because Heroku requires paying to offer some extra protection. This have I not done.
                        <br/>
                        The Imagerecognition is an api from Clarifai that I'm using with a free license.
                        <div className="strong">
                            <br/>
                            Dependencies:
                        </div>
                        <div> 
                            clarifai, react, react-dom, react-particles-js, react-scripts, react-tilt, serve, tachyons, nodemon, bcrypt, cors, express, knex, pg
                        </div>
                        <div className="strong">
                            <br/>
                            Tags:
                        </div>
                        <div> 
                            HTML, CSS, Javascript, React, Node.js, Api, postgreSQL, responsive design, relational database
                        </div>
                    </div>
                    <img className="image" src={FacerecognitionImage} alt="" />
                    <div className="box">
                        <div style={{padding:'0 1rem'}}>
                            <div style={{color:'black'}}>Visit website at: </div>
                            <a href="http://smart-brainkristian.herokuapp.com/" >http://smart-brainkristian.herokuapp.com/</a>
                            <div style={{color:'black'}}>Github repository: </div>
                            <a href="https://github.com/KristianRykkje/smart-brain" >https://github.com/KristianRykkje/smart-brain</a>
                            <br/>
                            <a href="https://github.com/KristianRykkje/smart-brain-api" >https://github.com/KristianRykkje/smart-brain-api</a>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <h2 className="project-item-header">
                        Streaming app
                    </h2>
                    <div className="project-item-content">
                        This is a streaming app inspired by twitch. It uses <strong>React and Redux</strong> in combination to store users profile in the redux-store.
                        <br/>
                        The streaming feature is so that anyone can stream to any stream.
                        <br/>
                        I uses OBS to actually stream any video. I did not upload this to any website, but check out the files in Github.
                        <div className="strong">
                            <br/>
                            Dependencies:
                        </div>
                        <div> 
                            axios, flv.js, lodash, react, react-dom, react-redux, react-router-dom, react-scripts, redux, redux-form, redux-thunk, json-server, node-media-server
                        </div>
                        <div className="strong">
                            <br/>
                            Tags:
                        </div>
                        <div> 
                            HTML, CSS, Javascript, React, Redux, Api
                        </div>
                    </div>
                    <video className="image" controls>
                        <source src={StreamsVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="box">
                        <div style={{padding:'0 1rem'}}>
                            <div style={{color:'black'}}>Github repository: </div>
                            <a href="https://github.com/KristianRykkje/streams-client" >https://github.com/KristianRykkje/streams-client</a>
                            <br/>
                            <a href="https://github.com/KristianRykkje/streams-api" >https://github.com/KristianRykkje/streams-api</a>
                            <br/>
                            <a href="https://github.com/KristianRykkje/streams-rtmpserver" >https://github.com/KristianRykkje/streams-rtmpserver</a>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <h2 className="project-item-header">
                        Template website for restaurant
                    </h2>
                    <div className="project-item-content">
                        This is a simple website that can be used by restaurants that want to show their menu, contact information and more on the web. More and more restaurant make or buy these websites so they can keep up with todays requirement of being present on the web.
                        <br/>
                        I implemented <strong>Google Analytics</strong> statistics in so that a potential buyer of the website could oversee where their users came from when they hit the website and informationabout how long they visited it and so on.
                        <br/>
                        I did not finish this project however. The program design wasa flawed from the beginning and therefor not much potential.
                        <div className="strong">
                            <br/>
                            Dependencies:
                        </div>
                        <div> 
                            react, react-dom, react-ga, react-router-dom, react-scripts,
                        </div>
                        <div className="strong">
                            <br/>
                            Tags:
                        </div>
                        <div> 
                            HTML, CSS, Javascript, React, Google Analytics
                        </div>
                    </div>
                    <img className="image" src={RestaurantImage} alt="" />
                    <div className="box">
                        <div style={{padding:'0 1rem'}}>
                            <div style={{color:'black'}}>Visit website at: </div>
                            <a href="https://restaurant-template-app835.netlify.app/" >https://restaurant-template-app835.netlify.app/</a>
                            <div style={{color:'black'}}>Github repository: </div>
                            <a href="https://github.com/KristianRykkje/restaurant" >https://github.com/KristianRykkje/restaurant</a>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <h2 className="project-item-header">
                        Simple image search app
                    </h2>
                    <div className="project-item-content">
                        This is a simple image searching app that shows you picturs from unsplash api of what you search.
                        <br/>
                        The searchbar is made so that is a reusable component.
                        <br/>
                        The Imagerecognition is an api from Clarifai that I'm using with a free license.
                        <div className="strong">
                            <br/>
                            Dependencies:
                        </div>
                        <div> 
                            react, react-dom, react-scripts, axios
                        </div>
                        <div className="strong">
                            <br/>
                            Tags:
                        </div>
                        <div> 
                            HTML, CSS, Javascript, React, Api, responsive design
                        </div>
                    </div>
                    <img className="image" src={PictureSearchImage} alt="" />
                    <div className="box">
                        <div style={{padding:'0 1rem'}}>
                            <div style={{color:'black'}}>Visit website at: </div>
                            <a href="https://my-image-search-app.netlify.app/" >https://my-image-search-app.netlify.app/</a>
                            <div style={{color:'black'}}>Github repository: </div>
                            <a href="https://github.com/KristianRykkje/Image-searching-app" >https://github.com/KristianRykkje/Image-searching-app</a>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <h2 className="project-item-header">
                        Robosearch App
                    </h2>
                    <div className="project-item-content">
                        This is a simple search app that holds a list of robots with name, email and a picture. With the search it shows you the robot that you search for.
                        <br/>
                        Not much to this app, but it is responsive however.
                        <br/>
                        I used ROBOHASH as api.
                        <div className="strong">
                            <br/>
                            Dependencies:
                        </div>
                        <div> 
                        react, react-dom, react-ga, react-scripts, tachyons, gh-pages
                        </div>
                        <div className="strong">
                            <br/>
                            Tags:
                        </div>
                        <div> 
                            HTML, CSS, Javascript, React, Api
                        </div>
                    </div>
                    <img className="image" src={RobotSearchImage} alt="" />
                    <div className="box">
                        <div style={{padding:'0 1rem'}}>
                            <div style={{color:'black'}}>Visit website at: </div>
                            <a href="https://kristianrykkje.github.io/roboFriends/" >https://kristianrykkje.github.io/roboFriends/</a>
                            <div style={{color:'black'}}>Github repository: </div>
                            <a href="https://github.com/KristianRykkje/roboFriends" >https://github.com/KristianRykkje/roboFriends</a>
                        </div>
                    </div>
                </div>
                <div className="project-item">
                    <h2 className="project-item-header">
                        Youtube App
                    </h2>
                    <div className="project-item-content">
                        A website that mirrors some parts of youtube. It recieves the videos from youtube.
                        <br/>
                        Creating this website required the use of a google api for youtube.
                        <br/>
                        A simple app really.
                        <div className="strong">
                            <br/>
                            Dependencies:
                        </div>
                        <div> 
                            semantic-ui, react, react-dom, axios
                        </div>
                        <div className="strong">
                            <br/>
                            Tags:
                        </div>
                        <div> 
                            HTML, CSS, Javascript, React, Api
                        </div>
                    </div>
                    <img className="image" src={YoutubeAppImage} alt="" />
                    <div className="box">
                        <div style={{padding:'0 1rem'}}>
                            <div style={{color:'black'}}>Visit website at: </div>
                            <a href="https://my-yt-app835.netlify.app/" >https://my-yt-app835.netlify.app/</a>
                            <div style={{color:'black'}}>Github repository: </div>
                            <a href="https://github.com/KristianRykkje/my-yt-app" >https://github.com/KristianRykkje/my-yt-app</a>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Projects;