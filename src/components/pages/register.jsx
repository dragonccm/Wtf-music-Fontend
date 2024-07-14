import React, { useState } from "react";
import { getRegister } from "../../services/registerService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "../../css/login_page.scss";
import logo from "../../img/logo3 (1).png";
import logo_gg from "../../img/logo-gg.png";
import bg from "../../img/bg-login.avif";
import { NavLink, useNavigate } from "react-router-dom";
const RegisterPage = () => {
    const navigate = useNavigate();

    const [ispass, setIsPass] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [titleValid, setTitleValid] = useState("");
    const defaultValidInput = {
        isValidUser: true,
        isValidPassword: true,
        isValidEmail: true,
    };
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

    const handleIsPass = () => {
        if (ispass) {
            setIsPass(false);
        } else {
            setIsPass(true);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        let check = isValid();
        if (check) {
            let response = await getRegister(email, password, username);
            // console.log(response);
            if (response && response.EM === 'the Username already exists') {
                setObjCheckInput({ ...defaultValidInput, isValidUser: false });
                toast.error('Tài khoản đã được sử dụng')
            } else if (response && response.EM === 'the Email already exists') {
                setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
                toast.error('Email đã được sử dụng')
            } else if (response && response.EM === 'A user created successfully') {
                toast.success('Tạo tài khoản thành công')
                setTimeout(() => {

                    navigate("/login");
                }, 2000)
            }
        }
        console.log("hahahahahahh");
    };
    const isValid = () => {
        setObjCheckInput(defaultValidInput);
        let regexEmail = /\S+@\S+\.\S+/;
        if (!username) {
            setTitleValid("Hãy nhập tên đăng nhập !")
            setObjCheckInput({ ...defaultValidInput, isValidUser: false });

            return false;
        } else if (!email) {
            setTitleValid("Hãy nhập email !")
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        } else if (!regexEmail.test(email)) {
            setTitleValid("Hãy nhập đúng định dạng email !")

            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });

            return false;
        } else if (!password) {
            setTitleValid("Hãy nhập mật khẩu !")

            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

            return false;
        }
        else if (password.length < 6) {
            setTitleValid("Mật khẩu phải hơn 6 kí tự !")

            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

            return false;
        }

        return true;
    };
    return (
        <>
            <div className="mod">
                <div className="form-con">
                    <form action="" className="signup_form">
                        <div className="heading-logo">
                            <img src={logo} alt="avt"></img>
                        </div>
                        <div className="account">
                            <input
                                placeholder="Tên tài khoản"
                                className={
                                    objCheckInput.isValidUser
                                        ? "username input_form_text"
                                        : "username input_form_text is-invalid"
                                }
                                name="username"
                                type="text"
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value)
                                    if (objCheckInput.isValidUser === false) {
                                        setTitleValid('')
                                        setObjCheckInput({ ...defaultValidInput, isValidUser: true });
                                    }
                                }
                                }
                            />
                            {!objCheckInput.isValidUser && <span>{titleValid}</span>}
                        </div>
                        <div className="account">
                            <input
                                placeholder="Email"
                                className={
                                    objCheckInput.isValidEmail
                                        ? "email input_form_text"
                                        : "email input_form_text is-invalid"
                                }
                                name="email"
                                type="text"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                    if (objCheckInput.isValidEmail === false) {
                                        setTitleValid('')
                                        setObjCheckInput({ ...defaultValidInput, isValidEmail: true });
                                    }
                                }}
                            />
                            {!objCheckInput.isValidEmail && <span>{titleValid}</span>}


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

                        <div className="form_button">
                            <button
                                className="signin form_btn"
                                onClick={(e) => handleRegister(e)}
                            >
                                SIGN UP
                            </button>
                            <p>Or Sign up with</p>
                            <button className="signin_gg form_btn gg_btn">
                                <img src={logo_gg} alt="avt-gg"></img>
                                <span>Google</span>
                            </button>
                        </div>
                        <div className="change_page_text">
                            Bạn chưa có tài khoản?
                            <div className="change_page">
                                <NavLink to="/login" className="change_page_a">
                                    Đăng nhập
                                </NavLink>
                            </div>
                        </div>
                    </form>
                </div>
                <img className="bg_login" src={bg} alt="" />
            </div>
           
        </>
    );
};
export default RegisterPage;
