import React from 'react';

import classes from './Billboard.css';

import LearnButton from './../UI/Buttons/LearnMore';
import Backdrop from './../../assets/images/billboard-background.gif';

const buttonColor = '#ffffff';
const shadowColor = '#444444';

const billboard = () => (

        <div className={classes.BillboardContainer}>
            <div className={classes.billboardBackdrop}>
                <img className={classes.billboardBackdrop} alt="backdrop" src={Backdrop} />
            </div>
            <div className={classes.BillboardHeader}>
                MODERN TECHNOLOGY
            </div>
            <div className={classes.BillboardSubHeader}>
                FUELED BY CLASSIC PASSION
            </div>

            <div className={classes.billboardLearnButton}>
                <LearnButton color={buttonColor} shadowColor={shadowColor} />
            </div>
        </div>


);

export default billboard;