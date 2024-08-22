
import { useSelector } from "react-redux";
import {  Navigate } from 'react-router-dom';
import { useEffect } from "react";

const CheckBan = ({ component: Component }, props) => {
  const isAuthentication = useSelector(
    (state) => state.Authentication.defaultUser
  );
  const isBAn = useSelector(
    (state) => state.Authentication.defaultUser.account.isBAn
  );
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  if (isAuthentication && isAuthentication.isLoading === false && isBAn) {
    return  <Navigate to="/login" />;
  
  } else if (isAuthentication && isAuthentication.isLoading === false && !isBAn) {
    return (
      <Component />
    );

  }
};

export default CheckBan;