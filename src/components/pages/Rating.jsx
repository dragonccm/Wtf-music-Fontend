import React from "react";
import Recommended from "../card/Recommended";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "../../css/Rating.scss";

const Rating = () => {
  const Recommendeds = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    name: `Playlist ${index + 1}`,
    image:
      "https://i.pinimg.com/originals/3a/f1/e7/3af1e70ef7617658aeb52141f47f51b0.jpg",
    category: "playlist",
    songartist: "jisoo",
    songname: "Flower",
    addedday: "11 thg 11, 2021",
    liked_state: false,
    songdata:
      "https://aac.saavncdn.com/533/a4d723b<FontAwesomeIcon icon={faCaretUp} /> 40 272bd6bbcb4263c61af847a_320.mp4",
    total: "3:00",
    root_album: "Solo",
  }));
  const week_data = [
    {
      top: 1,
      upto: 40,
      img: "https://th.bing.com/th/id/OIF.o1z0u9jURgq99a8fcNv2Fg?rs=1&pid=ImgDetMain",
      name: "Việt Nam Drill",
      artists: "Long Đại Đế",
      total_time: "3:30",
    },
    {
      top: 2,
      upto: 40,
      img: "https://www.geo.tv/assets/uploads/updates/2021-03-08/338616_3468239_updates.jpg",
      name: "Việt Nam Drill",
      artists: "Long Đại Đế",
      total_time: "3:30",
    },
    {
      top: 3,
      upto: 40,
      img: "https://2sao.vietnamnetjsc.vn/images/2022/02/28/11/41/00.png",
      name: "Việt Nam Drill",
      artists: "Long Đại Đế",
      total_time: "3:30",
    },
    {
      top: 4,
      upto: 40,
      img: "https://world.kbs.co.kr/special/survey/kpi_2021/images/quest_1_3.jpg",
      name: "Việt Nam Drill",
      artists: "Long Đại Đế",
      total_time: "3:30",
    },
  ];
  return (
    <section className="rating_main">
      <Recommended
        datas={Recommendeds}
        type={"BẢNG XẾP HẠNG THÁNG"}
        describe={"KPOP"}
        maxItemsToShow="10"
      />
      <h1 className="week_title">Xếp Hạng Tháng</h1>
      <section className="week_rating">
        <div className="week_card_ctn">
          <h1 className="top_week_title">Việt Nam</h1>
          {week_data.map((data) => (
            <div className="week_rating_card">
              <div className="current_rank">
                <p>{data.top}</p>
                <div className="up_to">
                  <FontAwesomeIcon icon={faCaretUp} /> {data.upto}{" "}
                </div>
              </div>
              <div className="child_info">
                <div className="week_rating_img">
                  <img src={data.img} alt="f" />
                  <div className="img_overlay">
                  <a href="">
                  <FontAwesomeIcon icon={faPlay} />

                  </a>
                </div>
                </div>
                <section>
                  <div className="week_rating_name">{data.name}</div>
                  <div className="week_rating_artists">{data.artists}</div>
                </section>
              </div>
              <div className="total_time">{data.total_time}</div>
            </div>
          ))}
          <a href="/rating" className="show_all">
            Xem tất cả
          </a>
        </div>

        <div className="week_card_ctn">
          <h1 className="top_week_title">US-UK</h1>
          {week_data.map((data) => (
            <div className="week_rating_card">
              <div className="current_rank">
                <p>{data.top}</p>
                <div className="up_to">
                  <FontAwesomeIcon icon={faCaretUp} /> {data.upto}{" "}
                </div>
              </div>
              <div className="child_info">
                <div className="week_rating_img">
                  <img src={data.img} alt="f" />
                  <div className="img_overlay">
                  <a href="">
                  <FontAwesomeIcon icon={faPlay} />

                  </a>
                </div>
                </div>
                <section>
                  <div className="week_rating_name">{data.name}</div>
                  <div className="week_rating_artists">{data.artists}</div>
                </section>
              </div>
              <div className="total_time">{data.total_time}</div>
            </div>
          ))}
          <a href="/rating" className="show_all">
            Xem tất cả
          </a>
        </div>
        <div className="week_card_ctn">
          <h1 className="top_week_title">K-POP</h1>
          {week_data.map((data) => (
            <div className="week_rating_card">
              <div className="current_rank">
                <p>{data.top}</p>
                <div className="up_to">
                  <FontAwesomeIcon icon={faCaretUp} /> {data.upto}{" "}
                </div>
              </div>
              <div className="child_info">
                <div className="week_rating_img">
                  <img src={data.img} alt="f" />
                  <div className="img_overlay">
                  <a href="">
                  <FontAwesomeIcon icon={faPlay} />

                  </a>
                </div>
                </div>
                <section>
                  <div className="week_rating_name">{data.name}</div>
                  <div className="week_rating_artists">{data.artists}</div>
                </section>
              </div>
              <div className="total_time">{data.total_time}</div>
            </div>
          ))}
          <a href="/rating" className="show_all">
            Xem tất cả
          </a>
        </div>
      </section>
    </section>
  );
};

export default Rating;
