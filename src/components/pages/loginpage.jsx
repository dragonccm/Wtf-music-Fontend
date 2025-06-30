import instance from "../../setup/axios";
import React, { useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../../css/login_page.scss";
import logo from "../../img/logo3 (1).png";
import logo_gg from "../../img/logo-gg.png";
import logo_fb from "../../img/logo-fb.png";
import "../../css/login_page.scss";
import bg from "../../img/bg-login.avif";
import { getLogin } from "../../services/registerService";
import { sendOtp } from "../../controller/Authentication";
import { NavLink, useNavigate } from "react-router-dom";
import {
    loginer,
    fetchAuthentication,
} from "../../redux/slide/AuthenticationSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    const [ispass, setIsPass] = useState(true);
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const [checkRemember, setCheckRemember] = useState(false);
    const [titleValid, setTitleValid] = useState("");
    const prevPath = localStorage.getItem('prevPath') || '/';
    console.log(prevPath);
    const navigate = useNavigate();
    const defaultValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,
    };
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

    const dispatch = useDispatch();

    const handleIsPass = () => {
        if (ispass) {
            setIsPass(false);
        } else {
            setIsPass(true);
        }
    };
    const isValid = () => {
        setObjCheckInput(defaultValidInput);

        if (!valueLogin) {
            setTitleValid("Hãy nhập tên đăng nhập !")
            setObjCheckInput({ ...defaultValidInput, isValidValueLogin: false });

            return false;
        } else if (!password) {
            setTitleValid("Hãy nhập mật khẩu !")

            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

            return false;
        }

        return true;
    };
    const handleLogin = async (e) => {
        e.preventDefault();

        let check = isValid();
        if (check) {
            let response = await getLogin(valueLogin, password, checkRemember);

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
                navigate('/ppp');
            } else {
                //   toast.error(serverData.EM);
                setObjCheckInput({ ...defaultValidInput, isValidValueLogin: false, isValidPassword: false });

                toast.error("Tài khoản hoặc mật khẩu không đúng !!");
            }
        }
    };
    const handleForget = async () => {
        let check = false;
        if (!valueLogin) {
            setTitleValid("Hãy nhập tên đăng nhập hoặc email !")
            setObjCheckInput({ ...defaultValidInput, isValidValueLogin: false });

            check = false;
        } else {
            check = true;
        }
        if (check) {
            let response = await sendOtp(valueLogin);

            if (response && response.EC === "0") {

                navigate("/forgetPassword");
            } else {
                //   toast.error(serverData.EM);
                setObjCheckInput({ ...defaultValidInput, isValidValueLogin: false, isValidPassword: false });

                toast.error("Tài khoản hoặc email không tồn tại !!");
            }
        }
    };
    const handleLoginGG = (event) => {
        event.preventDefault();

        window.location.href = 'https://vehicle-ear-or-component.trycloudflare.com/api/auth/google';
    }
    const handleLoginFb = (event) => {
        event.preventDefault();

        window.location.href = 'https://vehicle-ear-or-component.trycloudflare.com/api/facebook';
    }
    return (
        <div className="loginPage">
            <div className="mod">
                <div className="form-con">
                    <form action="" className="login_form">
                        <div className="heading-logo">
                            <img src={logo} alt="avt"></img>
                        </div>

                        <div className="account">
                            <input
                                placeholder="Tên đăng nhập hoặc Email"
                                className={
                                    objCheckInput.isValidValueLogin
                                        ? "email input_form_text"
                                        : "email input_form_text is-invalid"
                                }
                                name="email"
                                type="text"
                                value={valueLogin}
                                onChange={(event) => {
                                    setValueLogin(event.target.value)
                                    if (objCheckInput.isValidValueLogin === false) {
                                        setTitleValid('')
                                        setObjCheckInput({ ...defaultValidInput, isValidValueLogin: true });
                                    }
                                }
                                }
                            />
                            {!objCheckInput.isValidValueLogin && <span>{titleValid}</span>}
                        </div>

                        <div className="password">
                            <div className="pass_wrap">
                                <input
                                    placeholder="Mật khẩu"
                                    className={
                                        objCheckInput.isValidPassword
                                            ? "pass input_form_text"
                                            : "pass input_form_text is-invalid"
                                    }
                                    name="pass"
                                    type={ispass ? "password" : "text"}
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                        if (objCheckInput.isValidPassword === false) {
                                            setTitleValid('')
                                            setObjCheckInput({ ...defaultValidInput, isValidPassword: true });
                                        }
                                    }
                                    }
                                />
                                {ispass ? (
                                    <FontAwesomeIcon
                                        icon={faEyeSlash}
                                        onClick={handleIsPass}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        onClick={handleIsPass}
                                    />
                                )}
                            </div>
                            {!objCheckInput.isValidPassword && <span>{titleValid}</span>}
                        </div>
                        <div className="check_box">
                            <div className="remember_login">
                                <label className="check_btn">
                                    <input
                                        id="checked"
                                        type="checkbox"
                                        onChange={() =>
                                            setCheckRemember(!checkRemember)
                                        }
                                    />
                                    <div className="checkmark"></div>
                                </label>
                                <label htmlFor="checked">
                                    Ghi Nhớ Đăng Nhập
                                </label>
                            </div>
                            <span className="forgot_pass" onClick={() => { handleForget() }}>
                                Quên mật khẩu?
                            </span>
                        </div>
                        <div className="form_button">
                            <button
                                className="signin form_btn hhhh"
                                onClick={(e) => handleLogin(e)}
                            >
                                LOGIN
                            </button>
                            <p>Or Login with</p>
                            <div className="group_btn d-flex">
                                <button className="signin_gg form_btn gg_btn" onClick={(e) => handleLoginGG(e)}>
                                    <img src={logo_gg} alt="avt-gg"></img>
                                    <span>Google</span>
                                </button>
                                <button className="signin_gg signin_fb form_btn gg_btn" onClick={(e) => handleLoginFb(e)}>
                                    <img src={logo_fb} alt="avt-gg"></img>
                                    <span>Facebook</span>
                                </button>
                            </div>
                        </div>
                        <div className="change_page_text">
                            Bạn chưa có tài khoản?{" "}
                            <div className="change_page">
                                <NavLink
                                    to="/register"
                                    className="change_page_a"
                                >
                                    Đăng ký
                                </NavLink>
                            </div>
                        </div>
                    </form>
                </div>
                <img className="bg_login" src={bg} alt="" />
            </div>
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
                theme="light"
            />
        </div>
    );
};
export default LoginPage;
