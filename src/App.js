import "./App.css";
import AppRoutes from "./router/appRoutes";
import AdminRoutes from "./router/adminRouter";

// react route
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CheckAdminRoutes from "./router/checkAdminRoutes";
// rovider
import ThemeProvider from "./lib/provider/ThemeProvider";
import SongDataProvider from "./lib/provider/SongDataProvider";
import { fetchAuthentication } from "./redux/slide/AuthenticationSlice";

import { useDispatch, useSelector } from "react-redux";
import { fetchSongPlaying } from "./redux/slide/songPlayingSlice";
import { useEffect } from "react";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
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
            <Route path="/*" element={<Mainn />} />
          </Routes>
        </Router>
      </SongDataProvider>
    </>
  );
}

export default App;
