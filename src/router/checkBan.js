
import { useSelector } from "react-redux";
import LoginPage from "../components/pages/loginpage";
import Header from "../components/layoutbar/Header";
import Footer from "../components/layoutbar/Footer";
import RightSidebar from "../components/sideNavigation/RightSidebar";
import Bottombar from "../components/sideNavigation/Bottombar";
import ThemeContext from "../lib/Context/ThemeContext";
import { useEffect } from "react";
import { useContext } from "react";

const CheckBan = ({ component: Component }, props) => {
  const isAuthentication = useSelector(
    (state) => state.Authentication.defaultUser
  );
  const isBAn = useSelector(
    (state) => state.Authentication.defaultUser.account.isBAn
  );
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  if (isAuthentication && isAuthentication.isLoading === false && isBAn) {
    return (
      <>
        <div className="App">
          <div className="main_content">

            <div
              className="main_page"
             
            >
              <Header />
              <section className={`main_page_container ${theme}`}>
                <LoginPage />

              </section>

              <Footer />
            </div>

          </div>
        </div>
      </>
    );
  } else if (isAuthentication && isAuthentication.isLoading === false && !isBAn) {
    return (
      <Component />
    );

  }
};

export default CheckBan;