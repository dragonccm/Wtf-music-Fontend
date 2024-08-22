import "./App.css";
import AppRoutes from "./router/appRoutes";
import AdminRoutes from "./router/adminRouter";

// react route
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import CheckAdminRoutes from "./router/checkAdminRoutes";
import CheckBan from "./router/checkBan";
import OTPInput from "./components/pages/OTP_forgetPass";
import ResetPass from "./components/pages/resetPass";
import LoginPage from "./components/pages/loginpage";
import RegisterPage from "./components/pages/register";

// rovider

import SongDataProvider from "./lib/provider/SongDataProvider";
import { fetchAuthentication } from "./redux/slide/AuthenticationSlice";

import { useDispatch, useSelector } from "react-redux";
import { fetchSongPlaying } from "./redux/slide/songPlayingSlice";
import { useEffect } from "react";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { toast, ToastContainer } from "react-toastify";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthentication());
    if (localStorage.getItem("idSongPlaying")) {
      dispatch(fetchSongPlaying(localStorage.getItem("idSongPlaying")));
    } else {
      console.log("lỗi");
    }
  }, []);

  const isAuthentication = useSelector(
    (state) => state.Authentication.defaultUser
  );
  const Mainn = () => (
    <div className="main_content">
      <AppRoutes />
    </div>
  );
  return (
    <>
      <div className="App">
        <SongDataProvider>
          <Router>
            <Routes>
              <Route
                path="/admin/*"
                element={<CheckAdminRoutes component={AdminRoutes} />}
              />
              <Route
                path="/reset-password"
                element={
                  isAuthentication &&
                  isAuthentication.isAuthenticated === true ? (
                    <Navigate to="/" />
                  ) : (
                    <ResetPass />
                  )
                }
              />
              <Route
                path="/forgetPassword"
                element={
                  isAuthentication &&
                  isAuthentication.isAuthenticated === true ? (
                    <Navigate to="/" />
                  ) : (
                    <OTPInput />
                  )
                }
              />
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
              <Route
                path="/register"
                element={
                  isAuthentication &&
                  isAuthentication.isAuthenticated === true ? (
                    <Navigate to="/" />
                  ) : (
                    <RegisterPage />
                  )
                }
              />
              <Route path="/*" element={<CheckBan component={Mainn} />} />
              {/* <Route path="/*" element={<Mainn />} /> */}
            </Routes>
          </Router>
        </SongDataProvider>
      </div>
    </>
  );
}

export default App;
