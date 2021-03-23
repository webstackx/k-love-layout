import React, { Component } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import KeepTouch from "../components/KeepTouch";
import Footer from "../components/Footer";
import FeaturedBrand from "./../components/featuredBrand";
import Product from "./../components/product";
import { HomeWrapper } from "../styles/HomeStyle";

class Theme1 extends Component {
  constructor() {
    super();
    this.state = {
      isBackground: false,
    };
  }
  componentDidMount() {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 100) {
        this.setState({ isBackground: true });
      } else {
        this.setState({ isBackground: false });
      }
    };
  }
  render() {
    const { isBackground } = this.state;
    return (
      <HomeWrapper>
        <Header isBackground={isBackground} />
        <Banner />
        <FeaturedBrand />
        <Product />
        <KeepTouch />
        <Footer />
      </HomeWrapper>
    );
  }
}

export default Theme1;
