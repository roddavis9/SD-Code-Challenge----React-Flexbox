import React from 'react';

import classes from './SideDrawer.css';

import Backdrop from './../../UI/Backdrop/Backdrop';
import NavigationItems from './../NavigationItems/NavigationItems';

const sideDrawer = (props) => {



    return (
        <div className={classes.SideDrawer}>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
};


export default sideDrawer;