import React from 'react';
import classes from './PriceTag.css';

import Aux from './../../../hoc/Aux';


const priceTag = (props) => (
    <Aux>
        <div className={classes.PriceTag} style={{color: props.textColor, backgroundColor: props.backgroundColor}}>
            {props.children}
        </div>
    </Aux>
)

export default priceTag;