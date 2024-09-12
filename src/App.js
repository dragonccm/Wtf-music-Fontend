import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// react route
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./router/appRoutes";
import AdminRoutes from "./router/adminRouter";
import CheckAdminRoutes from "./router/checkAdminRoutes";
import CheckBan from "./router/checkBan";
//component
import OTPInput from "./components/pages/OTP_forgetPass";
import ResetPass from "./components/pages/resetPass";
import LoginPage from "./components/pages/loginpage";
import RegisterPage from "./components/pages/register";

// rovider
import SongDataProvider from "./lib/provider/SongDataProvider";
import { fetchAuthentication } from "./redux/slide/AuthenticationSlice";
import { fetchSongPlaying } from "./redux/slide/songPlayingSlice";



function App(props) {
  const dispatch = useDispatch();
  const prevPath = localStorage.getItem('prevPath') || '/';
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
                    <Navigate to={prevPath} />
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
