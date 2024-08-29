import instance from "../../setup/axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import {
    loginer,
    fetchAuthentication,
} from "../../redux/slide/AuthenticationSlice";
import { useDispatch } from "react-redux";
import { loginGG } from '../../controller/Authentication'
import { useParams } from "react-router-dom";
const LoginPageGG = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const prevPath = localStorage.getItem('prevPath') || '/';
    const handleLogin = async () => {

            let response = await loginGG(id);

            if (response && response.EC === "0") {
                let email = response.DT.email;
                let username = response.DT.username;
                let token = response.DT.access_token;
                let data = {
                    isAuthenticated: true,
                    token: token,
                    account: { email, username },
                };
                localStorage.setItem("jwt", token);
                instance.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${localStorage.getItem("jwt")}`;

                // console.log("ok");
                dispatch(loginer(data));
                dispatch(fetchAuthentication());
                navigate(prevPath, { replace: true });
            } else {
                //   toast.error(serverData.EM);
                navigate("/login");
                toast.error("Tài khoản hoặc mật khẩu không đúng !!");
            }
        
    };
    useEffect(() => {
        handleLogin();
    }, [])
    return (
        <h1>Đang login...</h1>
    )
}
export default LoginPageGG