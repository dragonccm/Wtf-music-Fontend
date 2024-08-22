import React, { useEffect } from "react";
import "../css/mainpage.scss";
import { useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";
// page

// layout
import HeaderAdmin from "../components/layoutbar/Header_Admin";
import NavigationBar from "../components/sideNavigation/NavigationBar";

// component

import HomeAdmin from "../components/pages/admin/home";
import UserAdmin from "../components/pages/admin/users";
import CommentAdmin from "../components/pages/admin/comment";
import SingerAdmin from "../components/pages/admin/singers";
import Chart from "../components/pages/admin/chart";
import CategoryAdmin from "../components/pages/admin/categorys";
import PlaylistAdmin from "../components/pages/admin/playlists";
import SongAdmin from "../components/pages/admin/songs";
// import { height } from "@mui/system";

const AdminRoutes = (props) => {
  // get state from redux

  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div style={{ height: "100vh" }} className="main_content">
      <NavigationBar />
      <div className="main_page">
        <HeaderAdmin />
        <section
          style={{
            paddingTop: "120px",
          }}
          className="main_page_container bg-white">
          <Routes>
            <Route path="/category" element={<CategoryAdmin />} />
            <Route path="/playlist" element={<PlaylistAdmin />} />
            <Route path="/user" element={<UserAdmin />} />
            <Route path="/comment" element={<CommentAdmin />} />
            <Route path="/singer" element={<SingerAdmin />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/song" element={<SongAdmin />} />
          </Routes>
        </section>
        
      </div>
    </div>
  );
};

export default AdminRoutes;
