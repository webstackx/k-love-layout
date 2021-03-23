import React, { Component } from 'react';
import { KeepTouchWrapper } from '../styles/KeepTouchStyle';

class KeepTouch extends Component {
    render() {
        return (
            <KeepTouchWrapper>
                <div className="KeepTouch">
                    <div className="KeepTouch-Head">Let's Keep in Touch!</div>
                    <div className="KeepTouch-Subhead">Subscribe to our newsletter & get ₹100 Off*</div>
                    <div className="KeepTouch-Controls">
                        <input type="text" className="KeepTouch-Controls-Text" placeholder="Your email address"/>
                        <button className="KeepTouch-Controls-Btn">Sign Up</button>
                    </div>
                    <div className="KeepTouch-Footer">By signing up you accept the K-Love <span>Terms of Use, Terms & Conditions</span> and <span>Privacy Notice.</span></div>
                </div>
            </KeepTouchWrapper>
        )
    }
}

export default KeepTouch;