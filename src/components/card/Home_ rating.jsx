import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Home_rating.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import { NavLink } from "react-router-dom";
import moment from 'moment';
import { useDispatch,useSelector } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";


function SampleNextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
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

const HomeRating = ({ data }) => {
  const dispatch = useDispatch();
  const dataf = useSelector((state) => state.playlist.playlist);

  const handlePlaying = (e, id) => {
    e.preventDefault();
    const song = dataf.song.find(item => item.id === id);
    if (song) {
      console.log(`ID ${id} trùng với một bài hát trong playlist.`);
    } else {
      console.log(`ID ${id} không trùng với bất kỳ bài hát nào trong playlist.`);
    }
    dispatch(fetchSongPlaying(id));
  }
  const settings = {
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="HomeRating_container">
      <Slider {...settings}>
        {data.map((item,index) => (
           <div className="ratimg_item" key={'lala'+index}>
           <div className="rating_item_wrap">
             <div className="ratimg_item_img">
               <img src={item.thumbnail} alt="f"></img>
               <div className="img_overlay">
                 <div className="img_overlay_group_btn">
                   <NavLink to="/song/" onClick={(e)=>handlePlaying(e,item.id)}  className="nav-link list_nav_item">
                     <FontAwesomeIcon icon={faCirclePlay} />
                   </NavLink>
                 </div>
               </div>
             </div>
             <div className="ratimg_item_content">
               <div className="ratimg_item_content_a">
                  <div className="ratimg_item_content_name">{item.songname }</div>
                  <div className="ratimg_item_content_artist">
                    {item.artists.map(
                    (artist, index) => (
                      <span key={index}>
                        <a
                          href={
                            "/artists/" +
                            artist.alias
                          }
                        >
                          {artist.name}
                        </a>
                        {index !==
                          item.artists
                            .length -
                          1 && ","}
                      </span>
                    )
                  )}
                  </div>
               </div>
               <div className="ratimg_item_content_b">
                 <div className="rating_number">
                   #{index+1}
                 </div>
                 <div className="rating_date">
                   {moment.unix(item.createdAt).format('DD.MM.YYYY')}
                 </div>
               </div>
             </div>
           </div>
         </div>
        ))}
       
        


      </Slider>
    </div>
  )
}
export default HomeRating