import React, { Component } from 'react';
import { KeepTouchWrapper } from '../styles/KeepTouchStyle';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import {AiFillGithub} from "react-icons/ai";
import AppStore from "../images/appStore1.jpeg";
import PlayStore from "../images/googleDownload1.jpeg"


const KeepTouch = () => {
    const contactLinks = [
        {
            id:1,
            icon: <RiInstagramFill />,
            link: '',
            fsize:'1.4rem',
        },
        {
            id:2,
            icon: <FaFacebookSquare />,
            link: '',
            fsize:'1.3rem',
        },
        {
            id:3,
            icon: <ImLinkedin />,
            link: '',
            fsize:'1.2rem',
        },
        {
            id:4,
            icon: <AiFillGithub />,
            link: '',
            fsize:'1.4rem',
        }
    ]
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
                <div className="KeepTouch-StoreHead">Experience the K-Love Mobile App</div>
                <div className="KeepTouch-StoreLink">
                    <img src={PlayStore} alt="" />
                    <img src={AppStore} style={{marginLeft:"1rem"}} alt="" />
                </div>

                <div className="KeepTouch-Links">
                {contactLinks.length && contactLinks.map((data, index)=>{
                    return <span className="KeepTouch-Links-Icon" style={{fontSize:data.fsize}} key={index}>{data.icon}</span>
                })}
                </div>
            </div>
        </KeepTouchWrapper>
    )
}

export default KeepTouch;