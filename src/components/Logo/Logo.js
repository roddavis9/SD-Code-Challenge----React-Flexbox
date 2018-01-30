import React from 'react';
import sdLogoBlack from '../../assets/images/logo-black.gif';
import sdLogoReverse from '../../assets/images/logo-reverse.gif';

import classes from './Logo.css';


const logo = (props) => {

    let selectedLogo = sdLogoBlack;

    if (props.reverse) {
        selectedLogo = sdLogoReverse;
    }

    return (
        <div className={classes.Logo}>
            <img src={selectedLogo} alt="Speed Digital logo" />
        </div>
    )
};

export default logo;