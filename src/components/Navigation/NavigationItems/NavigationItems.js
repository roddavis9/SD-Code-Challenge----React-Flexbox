import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem active>HOME</NavigationItem>
        <NavigationItem>INVENTORY</NavigationItem>
        <NavigationItem>SERVICES</NavigationItem>
        <NavigationItem>CAR FINDER</NavigationItem>
        <NavigationItem>ABOUT US</NavigationItem>
        <NavigationItem>CONTACT</NavigationItem>

    </ul>
);

export default navigationItems;