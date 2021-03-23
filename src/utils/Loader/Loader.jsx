import React, {useEffect} from 'react';
import Aos from 'aos';
import { LoaderWrap } from './LoaderStyle';
import logo from "../../images/logo3.png";
export default function Loader() {
    useEffect(() => {
        Aos.init({
          duration: 5000,
        });
    });

    return(
        <LoaderWrap>
            <img data-aos="zoom-in" data-aos-duration="2000" className="imageLogo" src={logo} alt="logo" />
        </LoaderWrap>
    )
}