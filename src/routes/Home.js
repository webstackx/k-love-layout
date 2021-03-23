import React, { Component } from "react";
import { HomeWrapper } from "../styles/HomeStyle";
import FeaturedBrand from "./../components/featuredBrand";
import Product from "./../components/product";
import KeepTouch from "../components/KeepTouch";
import Footer from "../components/Footer";
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <FeaturedBrand />
        <Product />
        <KeepTouch />
        <Footer />
      </HomeWrapper>
    );
  }
}

export default Home;
