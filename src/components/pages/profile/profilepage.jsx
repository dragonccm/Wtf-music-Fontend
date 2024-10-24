import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableList,
  faHistory,
  faGear,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";
import ProfileMyMusic from "./profileMyMusic";
import ProfileHistory from "./profileHistory";
import Recommended from "../../card/Recommended";
import Card from "../../card/playlist_card";
import ProfileSetting from "./Profile-setting/profile_setting";
import React, { useEffect,useState } from "react";
import { getUserPl } from '../../../redux/slide/getUserPlaylistSlice'
import { useSelector, useDispatch } from "react-redux";


import Loading from "../../sideNavigation/mascot_animation";

import "../../../css/profile.scss";
// import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";



function Profile() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const currData = useSelector((state) => state.Authentication);
  const usernames = currData.defaultUser.account.username;
  const userPlaylist = useSelector((state) => state.getUserPl.userPlaylist);
  useEffect(() => {
    if (usernames) {
      dispatch(getUserPl({ userId: usernames })).then(() => setLoading(false));
    }
  }, [dispatch, usernames])


  const playlistsData = [
    {
      id: 1,
      name: `Jisoo`,
      image:
        "https://i.pinimg.com/originals/3a/f1/e7/3af1e70ef7617658aeb52141f47f51b0.jpg",
      artists_list: ["Jisso"],
    },
    {
      id: 1,
      name: `Jennie`,
      image:
        "https://th.bing.com/th/id/OIP.0nv52jyNLFV9dMf8FydGBQAAAA?rs=1&pid=ImgDetMain",
      artists_list: ["Jennie"],
    },
    {
      id: 1,
      name: `Lisa`,
      image:
        "https://th.bing.com/th/id/OIP.yXzNZo5S4j75KDC6uzAwKAHaJ4?w=800&h=1067&rs=1&pid=ImgDetMain",
      artists_list: ["Lisa"],
    },
    {
      id: 1,
      name: `Rosé`,
      image:
        "https://lh3.googleusercontent.com/LjrrZepK7r13k7KIA7hkqOKFN0rLntt_994Fp9QS6_UGbi5YdI8OnDK0n2C9lxd3pXr1ImX7VFCGfoFeMazK7oRAN1ehejD0aA=w960-rj-nu-e365",
      artists_list: ["Rosé"],
    },
    {
      id: 1,
      name: `jang Wongyoung`,
      image:
        "https://th.bing.com/th/id/R.95272410e0cd81f991eb92c07e6a503c?rik=XjGqEwoeZgRuSQ&pid=ImgRaw&r=0",
      artists_list: ["Jang Wongyoung"],
    },
  ];

  const element = [
    {
      title: "Danh Sách Nghệ Sĩ Yêu Thích",
      list: playlistsData,
    },
    {
      title: "nghe Nhiều Gần Đây",
      list: playlistsData,
    },
    {
      title: "Đề Xuất Cho Bạn",
      list: playlistsData,
    },
  ];
  const usserplaylist = [
    {
      id: "ZWZB96AI",
      img: "https://th.bing.com/th/id/OIP.iP-3O89bhSHrVr2rUEe4ZQHaEK?rs=1&pid=ImgDetMain",
      title: "Gone",
    },
    {
      id: "ZWZB96AI",
      img: "https://th.bing.com/th/id/OIP.za6JTNz9MpwwZHBiIleI0AHaLH?rs=1&pid=ImgDetMain",
      title: "house",
    },
    {
      id: "ZWZB96AI",
      img: "https://6.viki.io/image/6b2ff0b5d027478cbe9b1a63a8705e10/dummy.jpeg?s=900x600&e=t",
      title: "Money",
    },
  ];
  const Myplaylist = ({ datas }) => (
    <div className="playlist">
      <section className="mylist_page ">
      <div className="Recommended_1">Danh Sách Phát Của bạn</div>
      <div className="list_container">
        <Card playlist={datas}  isOw={"you"}/>
      </div>
    </section>
    </div>
  );



  const History = ({ data }) => (
    <div className="history_ctn">
      <Recommended datas={data} type={"Lịch Sử"} describe={"Đã Xem Gần Đây"} />
    </div>
  );


  const Artist = ({ data }) => {
    return <div className="history_ctn">{/* <ListCard data={data} /> */}</div>;
  };
  if (loading) {
    return <div><Loading /></div>;
  }
  return (
    <div className="profile_container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className="profile_bar">
            <Nav className="me-auto list_nav list_nav_pr">
              <NavLink
                to="mymusic"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <span>Yêu Thích</span>
              </NavLink>
              <NavLink
                to="myplaylist"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faTableList} />
                </div>
                <span>PlayList</span>
              </NavLink>
              <NavLink
                to="history"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faHistory} />
                </div>
                <span>Lịch Sử</span>
              </NavLink>
              <NavLink
                to="setting"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faGear} />
                </div>
                <span>Cài Đặt</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="profile_content">
        <Routes>
          <Route
            path="/myplaylist"
            element={!userPlaylist ? (<h3>Bạn chưa có danh sách phát của mình</h3>) :(<Myplaylist datas={userPlaylist} />)}
          />
          {/* <Route path="/history" element={<History data={Recommendeds} />} /> */}
          <Route
            path="/setting"
            element={
              <ProfileSetting />
            }
          />
          <Route
            path="/mymusic"
            element={
              <ProfileMyMusic type={'mymusic'} />
            }
          />
          <Route
            path="/history"
            element={
              <ProfileHistory type={'history'} />
            }
          />
          <Route path="/" element={<Artist data={element} />} />
        </Routes>

        {/* <div className="artist_ctn">
                    <div className="artist_card">
                        <div className="artist_card">
                            <img src="https://th.bing.com/th/id/OIP.mquf4eUVLnuM6W29sL0v9gHaLG?rs=1&pid=ImgDetMain" alt="artist" />
                        </div>

                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default Profile;
