import React from 'react';

import LearnButton from './../../UI/Buttons/LearnMore';
import FeaturedBillboardImage from './../../../assets/images/car-with-drop-shadow.gif';

import classes from './FeaturedBillboard.css';

const buttonColor = '#f69a25';
const shadowColor = '#ffffff';

const featuredBillboard = () => (
    <div className={classes.FeaturedBillboardContainer}>
        <div className={classes.featuredCarImage}>
            <img alt="car" src={FeaturedBillboardImage} style={{width: '100%'}}/>
        </div>
        <div className={classes.featuredBillboardTextContainer}>
            <div className={classes.featuredBillboardTextHeader}>
                THE BRAND
            </div>
            <div className={classes.featuredBillboardTextHeader}>
                THE WHY
            </div>
            <div className={classes.featuredBillboardTextHeader}>
                THE HEART
            </div>
            <div className={classes.featuredBillboardText}>
                The richest affections are born out of meaningful experiences. The carpenter’s son is drawn to the scent of sawdust. The child of a sailor longs to return to the salty sea air. But for us, it is the heady atmosphere of fresh motor oil, studying the curves of a Ferrari, or the symphony of 12 cylinders singing in harmony— all with a thirsty quest for the narrative behind them. These are the deep roots of ...
            </div>
            <div>
                <LearnButton color={buttonColor} shadowColor={shadowColor} />
            </div>
        </div>
    </div>
);

export default featuredBillboard;