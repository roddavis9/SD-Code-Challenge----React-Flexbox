import React from 'react';
import classes from './Hr.css';


const horizontalRule = (props) => (
        <hr className={props.vertical ? classes.vertical : null} style={{color: props.color, backgroundColor: props.color}}/>
);

export default horizontalRule;