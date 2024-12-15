import Card from "../../card/playlist_card";
import {  useEffect } from "react";
import "../../../css/profileMyMusic.scss";
import { useSelector, useDispatch } from "react-redux";
import { setUserPlaylist } from "../../../redux/slide/InforUserSlice";
import { userPLayList } from "../../../controller/MyPlaylist";
const ProfileMyPlaylist = ({ type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
      const fetchPlaylist = async () => {
        const response = await userPLayList();
        if (response.EC === "0") {
          dispatch(setUserPlaylist(response.DT));
        }
      };
      fetchPlaylist();
    
  }, [dispatch]);
  const userPlaylist = useSelector((state) => {
    return state.inforUser.userPlaylist;
  });

 
  return (
    <div className="playlist">
      {userPlaylist.length>0 ? (
        <section className="mylist_page ">
          <div className="Recommended_1">Danh Sách Phát Của bạn</div>
          <div className="list_container">
            <Card playlist={userPlaylist} isOw={"you"} />
          </div>
        </section>
      ) : (
        <h3>Bạn chưa có danh sách phát của mình</h3>
      )}
    </div>
  );
};
export default ProfileMyPlaylist;
