import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/slider_bar.scss"
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
const SliderBar = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider_item">
              <img src="https://photo-zmp3.zmdcdn.me/banner/2/e/c/1/2ec1e2bacee5bf84e3bc5322ac2cf764.jpg" alt="f"></img>
            </div>
            <div className="slider_item">
              <img src="https://photo-zmp3.zmdcdn.me/banner/d/7/c/1/d7c15b798d6d71431a1b671ff3b65d03.jpg" alt="f"></img>
            </div>
            <div className="slider_item">
              <img src="https://photo-zmp3.zmdcdn.me/banner/0/4/e/5/04e56051f643d0758bb4d90853fd79e6.jpg" alt="f"></img>
            </div>
            
           
          </Slider>
        </div>

    )
}
export default SliderBar