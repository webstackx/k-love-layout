import React, { Component } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { HomeWrapper } from "../styles/HomeStyle";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isBackground: false,
    };
  }
  componentDidMount() {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 180) {
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
      </HomeWrapper>
    );
  }
}

export default Home;
