import React, { useState } from "react";
import { getRegister } from "../../services/registerService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import "../../css/login_page.scss";
import bg from "../../img/bg_login.jpg";
import { NavLink } from "react-router-dom";
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const defaultValidInput = {
    isValidUser: true,
    isValidPassword: true,
    isValidEmail: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const handleRegister = async (e) => {
    e.preventDefault();
    let check = isValid();
    if (check) {
      let response = await getRegister(email, password, username);
      console.log(response);
    }
    console.log("hahahahahahh");
  };
  const isValid = () => {
    setObjCheckInput(defaultValidInput);
    let regexEmail = /\S+@\S+\.\S+/;
    if (!email) {
      toast.error("Email is required !");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    } else if (!regexEmail.test(email)) {
      toast.error("Please enter a valid email address");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });

      return false;
    } else if (!username) {
      toast.error("Username is required !");

      return false;
    } else if (!password) {
      toast.error("Password is required !");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

      return false;
    }

    return true;
  };
  return (
    <div className="mod">
      <img className="bg_login" src={bg} alt="" />
      <div className="form-con">
        <form action="" className="signup_form">
          <h1>
            <a href="/">WTF MUSIC</a>
          </h1>
          <input
            placeholder="Tên tài khoản"
            className={
              objCheckInput.isValidPassword
                ? "username input_form_text"
                : "username input_form_text is-invalid"
            }
            name="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}></input>
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
            onChange={(event) => setEmail(event.target.value)}></input>
          <input
            placeholder="Mật khẩu"
            className={
              objCheckInput.isValidPassword
                ? "pass input_form_text"
                : "pass input_form_text is-invalid"
            }
            name="pass"
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}></input>

          <div className="form_button">
            <button
              className="signin form_btn"
              onClick={(e) => handleRegister(e)}>
              SIGN UP
            </button>
            <p>Or Sign up with</p>
            <button className="signin_gg form_btn">
              <FontAwesomeIcon icon={faGoogle} /> Google
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
    </div>
  );
};
export default RegisterPage;
