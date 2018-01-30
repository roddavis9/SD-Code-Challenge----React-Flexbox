import React from 'react';

import FooterSectionItem from './FooterInfoSectionItem/FooterInfoSectionItem';

import classes from './FooterInfoSection.css';

const footerInfoSection = () => {

    const sectionHeader = 'THE SHOP';
    const sectionLinks = ['INVENTORY', 'SUPERCHARGERS', 'TURBOS', 'CAR FINDER'];


    return (
        <div className={classes.FooterInfoSectionContainer}>
            <FooterSectionItem sectionHeader={sectionHeader} sectionLinks={sectionLinks} />
            <FooterSectionItem sectionHeader={sectionHeader} sectionLinks={sectionLinks} />
            <FooterSectionItem sectionHeader={sectionHeader} sectionLinks={sectionLinks} />
        </div>

    )
};

export default footerInfoSection;