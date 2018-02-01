import React, {Component} from 'react';

import classes from './Header.css';

import Logo from './../Logo/Logo';
import NavigationItems from './../Navigation/NavigationItems/NavigationItems';
import Backdrop from './../UI/Backdrop/Backdrop';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

class Header extends Component {

    state = {
        toggleSideDrawer: false
    };

    toggleSideDrawerHandler = () => {
        this.setState({toggleSideDrawer: !this.state.toggleSideDrawer});
    };


render() {


       return (
            <div className={classes.HeaderContainer}>
                <div className={classes.LogoContainer}>
                    <Logo/>
                </div>
                <div className={classes.NavigationContainer}>
                    <div className={classes.HeaderIconRow}>
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
                    <div className={classes.NavLinksRow}>
                        <nav>
                            <NavigationItems />
                        </nav>
                    </div>
                </div>
                <div className={classes.menuButton}>
                    <div className="toggle-sidebar">
                        <i onClick={this.toggleSideDrawerHandler} className="fa fa-bars fa-2x toggle-icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div>
                    <Backdrop show={this.state.toggleSideDrawer} clicked={this.toggleSideDrawerHandler}/>
                    <SideDrawer open={this.state.toggleSideDrawer} closed={this.toggleSideDrawerHandler}/>
                </div>
            </div>
        )
    }
};



export default Header;