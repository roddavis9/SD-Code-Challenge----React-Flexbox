import React from 'react';

import classes from './SideDrawer.css';

import Aux from './../../../hoc/Aux';
import Backdrop from './../../UI/Backdrop/Backdrop';
import NavigationItems from './../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }


    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>

    );
};


export default sideDrawer;