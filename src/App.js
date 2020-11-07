import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

import history from './history';

import './App.css'

import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import { Footer } from './components/Footer/Footer';

import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
// import Overview from './components/Overview/Overview';

import { particlesOptions } from './components/ParticlesOptions/ParticlesOptions';

class App extends React.Component {
    state = { sideDrawerOpen: false };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler} />;
        }
        return (
            <div className="App">
                <Particles 
                className="particles"
                params={particlesOptions} 
                />
                <Router history={history}>
                    <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <Switch>
                        {/* <Route path="/" exact component={Overview} /> */}
                        <Route path="/" exact component={Projects} />
                        <Route path="/skills" exact component={Skills} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
};

export default App;