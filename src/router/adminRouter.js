import React, { useEffect, useContext } from "react";
import "../css/mainpage.scss";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
// page

import LoginPage from "../components/pages/loginpage";
import RegisterPage from "../components/pages/register";

// layout
import Header from "../components/layoutbar/Header";
import Footer from "../components/layoutbar/Footer";
import RightSidebar from "../components/sideNavigation/RightSidebar";
import Bottombar from "../components/sideNavigation/Bottombar";

// component

import ThemeContext from "../lib/Context/ThemeContext";
import HomeAdmin from "../components/pages/admin/home";
import UsersAdmin from "../components/pages/admin/users";
import KindsMusicAdmin from "../components/pages/admin/kindsmusic";
import SingersAdmin from "../components/pages/admin/singers";
// import SongsAdmin from "../components/pages/admin/songs";
// import { height } from "@mui/system";

const AdminRoutes = (props) => {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    // get state from redux
    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser
    );

    const isPlaying = useSelector((state) => state.getSongData.isPlaying);

    return <></>;
};

export default AdminRoutes;
