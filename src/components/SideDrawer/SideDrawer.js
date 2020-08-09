import React from 'react';

import { Navigation } from '../Navigation/Navigation';
import './SiderDrawer.css';

const SiderDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses} >
            <Navigation />
        </nav>
    );
}

export default SiderDrawer;