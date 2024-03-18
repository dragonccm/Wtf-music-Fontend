import React from "react";
import "../../css/Detailed_list.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import Card from "../card/song_card";
const Playlistpage = () => {
  const My_list = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: `Playlist ${index + 1}`,
    image:
      "https://th.bing.com/th/id/OIP.XusXZvUJb2jQFc8QvjBnIwHaL2?rs=1&pid=ImgDetMain",
    category: "playlist",
    songartist: "jisoo",
    songname: "Flower",
    addedday: "11 thg 11, 2021",
    liked_state: false,
    songdata:
      "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
    total: "3:00",
    root_album: "Solo",
  }));

  // const data = [
  //   {
  //     id: 3,
  //     name: `Playlist ${3 + 1}`,
  //     image:
  //       "https://th.bing.com/th/id/OIP.2Taaw3tCXQRTYFNqPYXOdgHaHa?rs=1&pid=ImgDetMain",
  //     artists_list: ["Jisso"],
  //   },
  //   {
  //     id: 3,
  //     name: `Playlist ${3 + 1}`,
  //     image: "https://i.redd.it/3sx2ys0arsv21.jpg",
  //     artists_list: ["Jisso"],
  //   },
  //   {
  //     id: 3,
  //     name: `Playlist ${3 + 1}`,
  //     image:
  //       "https://www.allkpop.com/upload/2021/01/content/070658/1610020733-20210107-rose.jpg",
  //     artists_list: ["Jisso"],
  //   },
  //   {
  //     id: 3,
  //     name: `Playlist ${3 + 1}`,
  //     image:
  //       "https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2019/05/1-BLACKPINK-Jennie-Instagram-Update-25-May-2019.jpg?fit=1080%2C1080&ssl=1",
  //     artists_list: ["Jisso"],
  //   },
  //   {
  //     id: 3,
  //     name: `Playlist ${3 + 1}`,
  //     image:
  //       "https://lh3.googleusercontent.com/OaWHF5UWsNIBmhMRsMCQ6bAwwKroyMtld8Y_nubjphm7db55xwcYMVjgZv5Rj3CwWkGcpQNDl-3xAXAimAb4wUBGXCFBhLm5XkE7tdjderLbBSA=w960-rj-nu-e365",
  //     artists_list: ["Jisso"],
  //   },
  // ];

  return (
    <section className="detailed_list">
      <div className="list_father">
        <div className="list_head">
          <div className="list_info_ctn">
            <div className="left_head">
              <img
                src="https://i.pinimg.com/originals/3a/f1/e7/3af1e70ef7617658aeb52141f47f51b0.jpg"
                alt="f"
              />
            </div>
            <div className="mid_head">
              <h1 className="list_name">MyList</h1>
              <div className="info">
                <div className="small_avt">
                  <img
                    src="https://i.pinimg.com/originals/3a/f1/e7/3af1e70ef7617658aeb52141f47f51b0.jpg"
                    alt="playlist-img"
                  />
                </div>
                <div className="playlist_info_item">
                <span className="user_name">long</span>
                <span className="total_song">, 41 bài hát</span>
                <span className="total_time">, 2 giờ 15 phút</span>
                </div>
              </div>
            </div>
          </div>

          <div className="control">
            <button className="play_random">
              <FontAwesomeIcon icon={faPlay} />
              <span>Phát Ngẫu Nhiên</span>
            </button>
            <div className="child_btn_gr">
              <button className="favourite">
                <FontAwesomeIcon icon={regular} />
              </button>
              <Popup
                trigger={
                  <button className="menu_btn">
                    {" "}
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                }
                position="left top"
                nested
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0", border: "none" }}
                arrow={false}
              >
                <div className="menu">
                  <button className="menu-item"> item 1</button>
                  <button className="menu-item"> item 2</button>
                  <button className="menu-item"> item 3</button>
                </div>
              </Popup>
            </div>
          </div>
          <div className="total_like">999K người yêu thích</div>
        </div>

        <div className="list_body">
          <section className="description">
            <p>Lời tựa</p>
            <span>
              Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại
              của thể loại Top 100 Nhạc Pop Âu Mỹ, được Zing MP3 tự động tổng
              hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng
              bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được
              lấy trong 30 ngày gần nhất và được cập nhật liên tục.
            </span>
          </section>
          <div className="list">
            {My_list.map((data, index) => (
              <div className="list_row">
                <div className="song_img_ctn">
                  <div className="row_order">
                    <div className="number">{index}</div>
                    <div className="hidden_button">
                      <button className="play">
                        <FontAwesomeIcon icon={faPlay} />
                      </button>
                    </div>
                  </div>
                  <div className="song_img">
                    <img src={data.image} alt="f" />
                  </div>
                  <div className="songif">
                    <div className="songname">{data.songname}</div>
                    <div className="songartist">{data.songartist}</div>
                  </div>
                </div>
                <div className="root_album">{data.root_album}</div>
                <div className="foot">
                  <div className="liked">
                    <FontAwesomeIcon
                      icon={data.liked_state ? faHeart : regular}
                    />
                  </div>
                  <div className="time">{data.songname}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*<div className="recommen">
                <div className="recommen_list">
                    <Card playlist={data} />
                </div>
                <div className="recommen_list">
                    <Card playlist={data} />
                </div>
            </div>
 */}
    </section>
  );
};
export default Playlistpage;
