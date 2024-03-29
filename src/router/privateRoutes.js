import {  Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoutes = ({ component: Component},props) => {
  const isAuthentication = useSelector((state) => state.Authentication.defaultUser);

  if (isAuthentication && isAuthentication.isAuthenticated) {
    return (
      <Component/>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;