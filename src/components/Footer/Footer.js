import React from 'react';

import Aux from './../../hoc/Aux';
import HorizontalRule from './../../components/UI/HR/Hr';
import Logo from './../../components/Logo/Logo';
import FooterInfoSection from './FooterInfoSection/FooterInfoSection';

import classes from './Footer.css';

const hrColor = '#202020';

const footer = () => (
    <Aux className={classes.FooterContainer}>
        <div style={{width: '99.3%'}}>
            <HorizontalRule color={hrColor} />
        </div>
        <div className={classes.FooterInfoContainer}>
            <div className={classes.FooterContactCell}>
                <div>
                    <Logo reverse />
                </div>
                <div className={classes.phoneCell}>
                    <i className="fa fa-phone fa-lg burntOrange" aria-hidden="true"></i>&nbsp;&nbsp;866-457-7333
                </div>
                <div className={classes.iconCell}>
                    <span className={classes.facebook}>
                        <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                    </span>
                    <span className={classes.youtube}>
                        <i className="fa fa-youtube fa-lg" aria-hidden="true"></i>
                    </span>
                    <span className={classes.twitter}>
                        <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                    </span>

                </div>
            </div>
            <div className={classes.FooterInfoSectionsContainer}>
                <FooterInfoSection />
            </div>
            <div className={classes.footerSpacerCell}>
                &nbsp;
            </div>
        </div>
    </Aux>
);

export default footer;