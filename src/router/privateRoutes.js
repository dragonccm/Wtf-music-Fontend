import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = (props) => {
  const isAuthentication = useSelector((state) => state.AuthenticationRedecer.defaultUser);

  if (isAuthentication && isAuthentication.isAuthenticated === true) {
    return <Route path={props.path} element={props.component} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;