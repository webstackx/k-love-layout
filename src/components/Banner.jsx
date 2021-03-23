import React, { Component } from "react";
import Slider from "react-slick";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import { BannerCarosel, BannerWrapper } from "../styles/BannerStyle";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

class Banner extends Component {
  render() {
    const data = [
      {
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: bg1,
      },
      {
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: bg2,
      },
      {
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: bg3,
      },
    ];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
    };

    return (
      <BannerWrapper>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {data.map((data, index) => {
            return (
              <BannerCarosel key={index} bg={data.image}>
                <div className="paraCarosel">{data.para}</div>
              </BannerCarosel>
            );
          })}
        </Slider>
        <div className="arrows">
          <BsChevronCompactLeft
            className="arrows__icon1"
            onClick={() => this.slider.slickPrev()}
          />
          <BsChevronCompactRight
            className="arrows__icon2"
            onClick={() => this.slider.slickNext()}
          />
        </div>
      </BannerWrapper>
    );
  }
}

export default Banner;
