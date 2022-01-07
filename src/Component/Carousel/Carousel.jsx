import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../assets/images/slider1.jpg";
import image2 from "../../assets/images/slider2.jpg";
import image3 from "../../assets/images/slider3.jpg";
const CarouselView = () => {
  return (
    <Carousel pause={false}>
      <Carousel.Item interval={2700}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2700}>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselView;
