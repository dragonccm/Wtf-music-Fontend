import React, { useEffect, useContext } from "react";
import "../css/mainpage.scss";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
// page

import LoginPage from "../components/pages/loginpage";
import RegisterPage from "../components/pages/register";

// layout
import Header_Admin from "../components/layoutbar/Header_Admin";
import NavigationBar from "../components/sideNavigation/NavigationBar";

// component

import HomeAdmin from "../components/pages/admin/home";
import UsersAdmin from "../components/pages/admin/users";
import SingersAdmin from "../components/pages/admin/singers";
import WritersAdmin from "../components/pages/admin/writers";
import CategorysAdmin from "../components/pages/admin/categorys";
import SongsAdmin from "../components/pages/admin/songs";
// import { height } from "@mui/system";

const AdminRoutes = (props) => {
    // get state from redux
    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser
    );

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
                        {/* //authentication */}
                        <Route
                            path="/login"
                            element={
                                isAuthentication &&
                                isAuthentication.isAuthenticated === true ? (
                                    <Navigate to="/" />
                                ) : (
                                    <LoginPage />
                                )
                            }
                        />
                        <Route path="/register" element={<RegisterPage />} />

                        {/* admin */}
                        <Route path="/category" element={<CategorysAdmin />} />
                        <Route path="/user" element={<UsersAdmin />} />
                        <Route path="/singer" element={<SingersAdmin />} />
                        <Route path="/writer" element={<WritersAdmin />} />
                        <Route path="/song" element={<SongsAdmin />} />

                        <Route path="/*" element={<HomeAdmin />} />

                        {/* <Route path="/admin" element={<HomeAdmin />} /> */}
                    </Routes>
                </section>
            </div>
        </div>
    );
};

export default AdminRoutes;
