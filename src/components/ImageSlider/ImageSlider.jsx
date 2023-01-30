import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import "./ImageSlider.scss";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider">
      <div className="slider__prev-btn" onClick={prevSlide}>
        <IoIosArrowBack />
      </div>
      <div className="slider__next-btn" onClick={nextSlide}>
        <IoIosArrowForward />
      </div>
      <div
        className="slider__slides"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      ></div>
    </div>
  );
};

export default ImageSlider;
