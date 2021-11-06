import React, { Component } from "react";
import HeaderSecondHome from "../pages/home/HeaderSecondHome";
import Loader from "../pages/home/Loader";
import Header from "../auth/Header";
import Listjob from "../pages/Job/Listjob";
import ListJobHome from "../pages/home/ListJobHome";
import HowItWork from "../pages/home/HowItWork";
import Counter from "../pages/home/Counter";
import Testimonial from "../pages/home/Testimonial";
import LayoutHeader from "./HeaderLayout/LayoutHeader";

class LayoutHomeMain extends Component {
  render() {
    return (
      <>
        <ListJobHome />
        <HowItWork />
        <Counter />
        <Testimonial />
      </>
    );
  }
}

export default LayoutHomeMain;
