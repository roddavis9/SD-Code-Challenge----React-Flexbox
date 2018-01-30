import React from 'react';

import classes from './FooterInfoSectionItem.css';

const footerInfoSectionItem = (props) => {

    let sectionHeader = (<div className={classes.FooterSectionItemHeader}>{props.sectionHeader}</div>);

    return (
        <div className={classes.FooterSectionItemContainer}>
            {sectionHeader}
            {
                props.sectionLinks.map((link, index) => (
                    <div key={index} className={classes.sectionItemLink}>{link}</div>
                    )
                )
            }
        </div>
    );
};

export default footerInfoSectionItem;