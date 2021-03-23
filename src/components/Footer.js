import React, { Component } from 'react';
import { FooterWrapper } from '../styles/FooterStyle';


class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <div className="Footer">
                    <div className="Footer-Left">© 2021 - K-Love | All rights reserved</div>
                    <div className="Footer-Right">
                        <button className="Footer-Right-Btn">Terms of Use</button>
                        <button className="Footer-Right-Btn">Help</button>
                        <button className="Footer-Right-Btn">Privacy Notice</button>
                    </div>
                </div>
            </FooterWrapper>
        )
    }
}

export default Footer;