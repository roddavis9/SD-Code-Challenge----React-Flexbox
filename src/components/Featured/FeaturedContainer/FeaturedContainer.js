import React from 'react';

import classes from './FeaturedContainer.css';

import Aux from './../../../hoc/Aux';
import HorizontalRule from './../../UI/HR/Hr';
import FeaturedItem from './../FeaturedItem/FeaturedItem';
import FeaturedBillboard from './../FeaturedBillboard/FeaturedBillboard';
import FeaturedImage from './../../../assets/images/mercedez.gif';


const hrColor = '#f69a25';

const itemPrice = '$132, 989';
const itemMake = '2016 MERCEDES-BENZ';
const itemModel = 'AMG GTS';

const featuredContainer = () => (
    <Aux>
        <div className={classes.FeaturedContainer}>
            <div className={classes.featuredContainerRow}>
                <div className={classes.FeaturedHeader}>FEATURED</div>
                <div className={classes.FeaturedContainerCell}>
                    <div className={classes.FeaturedSlogan}>WE PASSIONATELY PURSUE FINE AUTOMOBILES<br/>THAT EMBODY THE RICH HERITAGE THEY DESERVE</div>
                    <div>
                        <HorizontalRule color={hrColor}/>
                    </div>
                </div>
            </div>
            <div className={classes.featuredContainerRow}>
                <div className={classes.FeaturedItemCell}>
                    <FeaturedItem
                        imageSrc={FeaturedImage}
                        price={itemPrice}
                        make={itemMake}
                        model={itemModel}
                    />
                    <FeaturedItem
                        imageSrc={FeaturedImage}
                        price={itemPrice}
                        make={itemMake}
                        model={itemModel}
                    />
                    <FeaturedItem
                        imageSrc={FeaturedImage}
                        price={itemPrice}
                        make={itemMake}
                        model={itemModel}
                    />
                    <FeaturedItem
                        imageSrc={FeaturedImage}
                        price={itemPrice}
                        make={itemMake}
                        model={itemModel}
                    />
                </div>
            </div>
            <div className={classes.featuredContainerRow}>
                <div className={classes.FeaturedContainerCell}>
                    <HorizontalRule color={hrColor}/>
                </div>

            </div>
            <div className={classes.featuredContainerRow}>
                <FeaturedBillboard />
            </div>


        </div>
    </Aux>
);

export default featuredContainer;