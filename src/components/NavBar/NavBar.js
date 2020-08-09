import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Navigation } from '../Navigation/Navigation';

const NavBar = props => {
    return (
        <header className="navbar">
            <nav className="navbar__navigation" >
                <div className="navbar__toggle-button" >
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="navbar__logo" ><NavLink exact to="/">Kristian Rykkje</NavLink></div>
                <div className="spacer" />
                <div className="navbar_navigation-items" >
                    <Navigation />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;