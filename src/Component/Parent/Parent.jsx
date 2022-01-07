import React, { Component } from "react";
import CardProduct from "../CardProduct/CardProduct";
import CarousalView from "../Carousel/Carousel";
export default class Parent extends Component {
  render() {
    return (
      <div>
        <CarousalView />
        <CardProduct />
      </div>
    );
  }
}
