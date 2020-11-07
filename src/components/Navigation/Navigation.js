import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

export const Navigation = () => (
    <ul>
        {/* <li>
            <NavLink 
                exact
                activeClassName="navbar__link--active"                        
                to="/"
                >
                    Overview
            </NavLink>
        </li> */}
        <li>
            <NavLink 
                exact
                activeClassName="navbar__link--active"                        
                to="/"
                >
                    Projects
            </NavLink>
        </li>
        <li>
            <NavLink 
                exact
                activeClassName="navbar__link--active"
                to="/skills"
                >
                    Skills
            </NavLink>
        </li>
        <li>
            <NavLink 
                exact
                activeClassName="navbar__link--active"
                to="/about"
                >
                    About
            </NavLink>
        </li>
        <li>
            <NavLink 
                exact
                activeClassName="navbar__link--active"
                to="/contact"
                >
                    Contact
            </NavLink>
        </li>
    </ul>
);
