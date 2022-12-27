import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwsSliderStyles from "../../styles/Carousel.module.scss";

const AutoPlaySlider = withAutoplay(AwesomeSlider);

const Carousel2 = ({images}) => (
    <AutoPlaySlider
      // cssModule={AwsSliderStyles}
      className="awssld2 mb-1"
      play={false}
      cancelOnInteraction={true}
      interval={6000}
      // position={"sticky"}
      // top={0}
    >
    {images.map((image) => (
      <div data-src={image} />
    ))} 
      {/* <div data-src="/images/tulump.png" /> */}
      {/* <div data-src="/images/beach2.jpg" /> */}
      
    </AutoPlaySlider>
);


export default Carousel2;
