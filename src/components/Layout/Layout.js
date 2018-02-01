import React, {Component} from 'react';

import classes from './Layout.css';

import Aux from '../../hoc/Aux';
import Header from './../Header/Header';

import Billboard from './../Billboard/Billboard';
import FeaturedContainer from './../Featured/FeaturedContainer/FeaturedContainer';
import Footer from './../Footer/Footer';

class Layout extends Component {

    render() {
        return (
            <Aux className={classes.Layout}>
                <header>
                    <Header />
                </header>
                <main>
                    <Billboard />
                    <FeaturedContainer/>
                </main>
                <footer>
                    <Footer />
                </footer>
            </Aux>
        );

    }

}


export default Layout;