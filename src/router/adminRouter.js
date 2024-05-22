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
import UsersAdmin from "../components/pages/admin/users";
import SingersAdmin from "../components/pages/admin/singers";
import WritersAdmin from "../components/pages/admin/writers";
import CategorysAdmin from "../components/pages/admin/categorys";
import SongsAdmin from "../components/pages/admin/songs";
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
          className="main_page_container bg-white">
            <Routes>
              <Route path="/category" element={<CategorysAdmin />} />
              <Route path="/user" element={<UsersAdmin />} />
              <Route path="/singer" element={<SingersAdmin />} />
              <Route path="/writer" element={<WritersAdmin />} />
              <Route path="/song" element={<SongsAdmin />} />

              <Route path="/*" element={<HomeAdmin />} />
            </Routes>
        </section>
      </div>
    </div>
  );
};

export default AdminRoutes;
