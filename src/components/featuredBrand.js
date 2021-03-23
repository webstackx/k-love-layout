import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Cosmetic1 from "./../images/cosmetic1.jpeg";
import Cosmetic2 from "./../images/cosmetic2.jpeg";
import Cosmetic3 from "./../images/cosmetic3.jpeg";
import Cosmetic4 from "./../images/cosmetic4.jpeg";
import Cosmetic5 from "./../images/cosmetic5.jpeg";
import Cosmetic6 from "./../images/cosmetic6.jpeg";
import Cosmetic7 from "./../images/cosmetic7.jpeg";
import Cosmetic8 from "./../images/cosmetic8.jpeg";
import { BrandWrapper } from "./../styles/featuredBrandStyles";

export default function FeaturedBrand() {
  const [istheme1, handleTheme1] = useState(false);
  const brandData = [
    { title: "Fragrance", img: Cosmetic4, id: 1 },
    { title: "Refresh", img: Cosmetic6, id: 2 },
    { title: "Classy", img: Cosmetic7, id: 3 },
    { title: "Fragrance", img: Cosmetic8, id: 4 },
    { title: "Blossom", img: Cosmetic5, id: 5 },
    { title: "Fragrance", img: Cosmetic1, id: 6 },
    { title: "peach", img: Cosmetic2, id: 7 },
    { title: "Fragrance", img: Cosmetic3, id: 8 },
  ];

  useEffect(() => {
    if (window.location.href.includes("theme1")) {
      handleTheme1(true);
    }
  }, [0]);

  return (
    <BrandWrapper istheme1={istheme1}>
      <div className="brand">
        <div className="brand-header">Featured Brand</div>
        <div className="brand-title">Title text for the cosmetics</div>
        <div className="brand-container">
          {brandData &&
            brandData.map((data) => {
              const { title, img, id } = data;
              return (
                <div className="brand-background">
                  <img src={img}></img>
                  <div className="brand-background-text">{title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </BrandWrapper>
  );
}
