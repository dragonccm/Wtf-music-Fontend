import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/slider_bar.scss"
import { NavLink } from "react-router-dom";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
const SliderBar = ({ data }) => {
    const settings = {
        infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {data && data.map((item) =>
               <div className="slider_item">
               <NavLink to={`/playlist/${item.encodeId}`}>
                 <img src={item.banner} alt="f"></img>
                 </NavLink>
             </div>
            )}
            
            
           
          </Slider>
        </div>

    )
}
export default SliderBar