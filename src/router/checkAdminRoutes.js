import {  Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const CheckAdminRoutes = ({ component: Component},props) => {
    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser
      );
      const isAdmin = useSelector(
        (state) => state.Authentication.defaultUser.account.isAdmin
      );
      // console.log("is auth",isAuthentication)
      // console.log("is admin",isAdmin)

  if (isAuthentication && isAuthentication.isLoading === false && isAuthentication.isAuthenticated && isAdmin) {
    return (
      <Component/>
    );
  } else if(isAuthentication && isAuthentication.isLoading === false  && !isAuthentication.account.isAdmin) {
    return <Navigate to="/" />;
  }
};

export default CheckAdminRoutes;