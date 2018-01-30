import React from 'react';
import classes from './LearnMore.css';

import Aux from './../../../hoc/Aux';


const learnMore = (props) => {

const shadowString = '2px 2px ' + props.shadowColor;
    return (
        <Aux>
            <div className={classes.LearnButton} style={{color: props.color, borderColor: props.color, textShadow: shadowString }}>
                LEARN MORE<span className={classes.arrow}><i className="fa fa-chevron-right fa-lg" aria-hidden="true"></i></span>
            </div>
        </Aux>
    )
};

export default learnMore;