import "./App.css";
import AppRoutes from "./router/appRoutes";
import AdminRoutes from "./router/adminRouter";
// component
import RightSidebar from "./components/sideNavigation/RightSidebar";
import Bottombar from "./components/sideNavigation/Bottombar";
// react route
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// rovider
import ThemeProvider from "./lib/provider/ThemeProvider";
import SongDataProvider from "./lib/provider/SongDataProvider";
import { fetchSong } from "./redux/slide/songSlice";
import { fetchAuthentication } from "./redux/slide/AuthenticationSlice";

import { useDispatch } from "react-redux";
import { fetchSongPlaying } from "./redux/slide/songPlayingSlice";
import { useEffect } from "react";

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
    // useEffect(() => {
    //     dispatch(fetchSong(localStorage.getItem("idSongPlaying")));
    // }, []);



    const Mainn = () => (
        <ThemeProvider>
            <div className="App">
                <div className="main_content">
                    {/* <RightSidebar /> */}

                    <AppRoutes  />

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
                        <Route path="/admin/*" element={<AdminRoutes/>} />
                        <Route path="/*" element={<Mainn/>} />
                    </Routes>
                </Router>
            </SongDataProvider>
            
        </>
    );
}

export default App;
