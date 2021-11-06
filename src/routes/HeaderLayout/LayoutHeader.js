import React, { Component } from "react";
import Header from "../../auth/Header";
import HeaderSecondHome from "../../pages/home/HeaderSecondHome";
import Loader from "../../pages/home/Loader";

class LayoutHeader extends Component {
  render() {
    return (
      <>
        <Header />
        <HeaderSecondHome />
      </>
    );
  }
}

export default LayoutHeader;
