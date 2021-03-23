import React, { Component } from 'react';
import { HomeWrapper } from '../styles/HomeStyle';
import KeepTouch from "../components/KeepTouch";
import Footer from "../components/Footer"

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <KeepTouch />
                <Footer />
            </HomeWrapper>
        )
    }
}

export default Home;