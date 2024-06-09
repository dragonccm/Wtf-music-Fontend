import "./App.css";
import AppRoutes from "./router/appRoutes";
import AdminRoutes from "./router/adminRouter";

// react route
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CheckAdminRoutes from "./router/checkAdminRoutes";
import CheckBan from "./router/checkBan";
// rovider
import ThemeProvider from "./lib/provider/ThemeProvider";
import SongDataProvider from "./lib/provider/SongDataProvider";
import { fetchAuthentication } from "./redux/slide/AuthenticationSlice";

import { useDispatch, useSelector } from "react-redux";
import { fetchSongPlaying } from "./redux/slide/songPlayingSlice";
import { useEffect } from "react";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import { toast, ToastContainer } from "react-toastify";

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


  const Mainn = () => (
    <ThemeProvider>
      <div className="App">
        <div className="main_content">
          {/* <RightSidebar /> */}

          <AppRoutes />
          <ToastContainer
            style={{ fontSize: "16px" }}
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {/* <Bottombar  /> */}
        </div>
      </div>
    </ThemeProvider>
  );
  return (
    <>
      <SongDataProvider>
        <Router>
          <Routes>
            {/* {isAuthentication && isAdmin && (
              <Route path="/admin/*" element={<AdminRoutes />} />
            )} */}
            <Route
              path="/admin/*"
              element={<CheckAdminRoutes component={AdminRoutes} />}
            />
            <Route
              path="/*"
              element={<CheckBan component={Mainn} />}
            />
            {/* <Route path="/*" element={<Mainn />} /> */}

          </Routes>
        </Router>
      </SongDataProvider>
    </>
  );
}

export default App;
