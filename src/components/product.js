import React from "react";
import { ProductWrapper } from "./../styles/productStyles";
import Cosmetic4 from "./../images/cosmetic4.jpeg";
import { FcCloseUpMode, FcCancel } from "react-icons/fc";
const product = () => {
  return (
    <ProductWrapper>
      <div className="product">
        <div className="product-image-container">
          <div className="product-image-container-top">
            <img src={Cosmetic4}></img>
          </div>
          <div className="product-image-container-bottom">
            <img src={Cosmetic4}></img>
            <img src={Cosmetic4}></img>
          </div>
        </div>
        <div className="product-about">
          <div className="product-about-header">Product Description</div>
          <div className="product-about-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="product-about-feature">
            <div className="product-about-feature-1">
              <span>
                <FcCancel />
              </span>{" "}
              &ensp; &ensp; No Artificial Contents
            </div>
            <div className="product-about-feature-2">
              <span>
                {" "}
                <FcCloseUpMode />
              </span>{" "}
              &ensp; &ensp;Suitable for All skins
            </div>
          </div>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default product;
