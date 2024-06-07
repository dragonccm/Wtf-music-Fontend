import React, { useEffect, useContext } from "react";
import "../css/mainpage.scss";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";
// page

// layout
import Header_Admin from "../components/layoutbar/Header_Admin";
import NavigationBar from "../components/sideNavigation/NavigationBar";

// component

import HomeAdmin from "../components/pages/admin/home";
import UserAdmin from "../components/pages/admin/users";
import CommentAdmin from "../components/pages/admin/comment";
import SingerAdmin from "../components/pages/admin/singers";
import SongChart from "../components/pages/admin/songChart";
import PlaylistChart from "../components/pages/admin/playlistChart";
import CategoryAdmin from "../components/pages/admin/categorys";
import PlaylistAdmin from "../components/pages/admin/playlists";
import SongAdmin from "../components/pages/admin/songs";
// import { height } from "@mui/system";
import ThemeContext from "../lib/Context/ThemeContext";

const AdminRoutes = (props) => {
    // get state from redux
    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser.isAuthenticated
    );
    const isAdmin = useSelector(
        (state) => state.Authentication.defaultUser.account.isAdmin
    );
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div style={{ height: "100vh" }} className="main_content">
            <NavigationBar />
            <div className="main_page">
                <Header_Admin />
                <section
                    style={{
                        paddingTop: "120px",
                    }}
                    className="main_page_container bg-white"
                >
                    <Routes>
                        <Route path="/category" element={<CategoryAdmin />} />
                        <Route path="/playlist" element={<PlaylistAdmin />} />
                        <Route path="/user" element={<UserAdmin />} />
                        <Route path="/comment" element={<CommentAdmin />} />
                        <Route path="/singer" element={<SingerAdmin />} />
                        <Route
                            path="/playlistchart"
                            element={<PlaylistChart />}
                        />
                        <Route path="/songchart" element={<SongChart />} />
                        <Route path="/song" element={<SongAdmin />} />

                        <Route path="/*" element={<HomeAdmin />} />
                    </Routes>
                </section>
            </div>
        </div>
    );
};

export default AdminRoutes;
