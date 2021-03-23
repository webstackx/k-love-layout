import React, { Component } from "react";
import { HomeWrapper } from "../styles/HomeStyle";
import FeaturedBrand from "./../components/featuredBrand";
import Product from "./../components/product";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <FeaturedBrand />
        <Product />
      </HomeWrapper>
    );
  }
}

export default Home;
