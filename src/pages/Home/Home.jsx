import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./home.scss";
const Home = () => {
  const data = [
    "https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/161534/newborn-baby-feet-basket-161534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7713222/pexels-photo-7713222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="home">
      {/* <Slider /> */}
      <ImageSlider slides={data} />
    </div>
  );
};

export default Home;
