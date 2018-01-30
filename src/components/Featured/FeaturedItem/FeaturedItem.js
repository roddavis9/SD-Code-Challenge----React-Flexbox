import React from 'react';

import classes from './FeaturedItem.css';

import PriceTag from './../../UI/PriceTag/PriceTag';

const tagTextColor = '#ffffff';
const tagBackgroundColor = '#f69a25';

const featuredItem = (props) => (
    <div className={classes.featuredItemContainer}>
        <div className={classes.featuredItemImageRow}>
            <div className={classes.FeaturedItemImage}>
                <span className={classes.priceTag}>
                    <PriceTag textColor={tagTextColor} backgroundColor={tagBackgroundColor}>
                        {props.price}
                    </PriceTag>
                </span>
                <img alt='featured item' src={props.imageSrc} style={{width: '100%'}} />
            </div>
        </div>
        <div className={classes.featuredItemInfoRow}>
            <div className={classes.itemMake}>
                {props.make}
            </div>
            <div className={classes.itemModel} style={{color:tagBackgroundColor}}>
                {props.model}
            </div>
        </div>
    </div>
);

export default featuredItem;
