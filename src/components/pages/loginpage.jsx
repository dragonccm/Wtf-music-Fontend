import instance from "../../setup/axios";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../../css/login_page.scss";
import logo from "../../img/logo3 (1).png";
import "../../css/login_page.scss";
import bg from "../../img/bg_login.jpg";
import { getLogin } from '../../services/registerService'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginer } from '../../redux/slide/AuthenticationSlice'

import { useDispatch } from "react-redux";

const LoginPage = () => {
    const [valueLogin, setValueLogin] = useState('')
    const [password, setPassword] = useState('')
    const [checkRemember, setCheckRemember] = useState(false)
    const navigate = useNavigate();
    const defaultValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,
    };
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        setObjCheckInput(defaultValidInput);
        if (!valueLogin) {
            setObjCheckInput({ ...defaultValidInput, isValidValueLogin: false });

            //   toast.error("Please enter your email address or phone number")
            return;
        }
        if (!password) {
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

            //   toast.error("Please enter your password")
            return;
        }
        let response = await getLogin(valueLogin, password, checkRemember)
        let serverData = response;
        console.log(serverData)

        if (response && response.EC === '0') {

            let email = response.DT.email;
            let username = response.DT.username;
            let token = response.DT.access_token;
            let data = {
                isAuthenticated: true,
                token: token,
                account: { email, username }
            }
            localStorage.setItem("jwt", token);
            instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;

            console.log('ok');
            dispatch(loginer(data))
            navigate('/');
        } else {
            //   toast.error(serverData.EM);
            console.log('chưa đc');
        }
    }
    return (
        <div className="mod">
            <img className="bg_login" src={bg} alt="" />
            <div className="form-con">
                <form action="" className="login_form">
                    <h1>
                        <a href="/">
                            <img src={logo} alt="avt"></img>
                        </a>
                    </h1>
                    <input
                        placeholder="Tên đăng nhập hoặc Email"
                        className={objCheckInput.isValidValueLogin ? "email input_form_text" : "email input_form_text is_invalid"}
                        name="email"
                        type="text"
                        value={valueLogin}
                        onChange={(event) => setValueLogin(event.target.value)}
                    ></input>
                    <input
                        placeholder="Mật khẩu"
                        className={objCheckInput.isValidValueLogin ? "pass input_form_text" : "pass input_form_text is_invalid"}
                        name="pass"
                        type="text"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    <div className="check_box">
                        <div className="remember_login">
                            <div className="check_btn">
                                <input id="checked" type="checkbox" onChange={() => setCheckRemember(!checkRemember)} />
                                <div className="checkmark"></div>
                            </div>
                            <label htmlFor="checked">Ghi Nhớ Đăng Nhập</label>
                        </div>
                        <a className="forgot_pass" href="/">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div className="form_button">
                        <button className="signin form_btn hhhh" onClick={(e) => handleLogin(e)}>LOGIN</button>
                        <p>Or Login with</p>
                        <button className="signin_gg form_btn">
                            <FontAwesomeIcon icon={faGoogle} /> Google
                        </button>
                    </div>
                    <div className="change_page_text">
                        Bạn chưa có tài khoản?{" "}
                        <div className="change_page">

                            <NavLink
                                to="/register"
                                className='change_page_a'
                            >
                                Đăng ký
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage