import React from "react";
import "./slider.scss";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/161534/newborn-baby-feet-basket-161534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7713222/pexels-photo-7713222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };
  return (
    <div className="slider">
      <div
        className="slider__container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="image0" />
        <img src={data[1]} alt="image1" />
        <img src={data[2]} alt="image2" />
      </div>
      <div className="slider__icons">
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
          onClick={prevSlide}
        >
          <NavigateBeforeIcon />
        </IconButton>

        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
          onClick={nextSlide}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Slider;
