import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../../css/login_page.scss";
import logo from "../../img/logo3 (1).png";
import bg from "../../img/bg_login.jpg";
import { toast } from "react-toastify";
import {getRegister} from "../../services/registerService"
function Loginform() {
  // Trạng thái để xác định form đăng nhập hay form đăng ký đang hiển thị
  const [isLogin, setIsLogin] = useState(true);

  // Hàm để thay đổi trạng thái giữa form đăng nhập và đăng ký
  function toggleForm(event) {
    // Ngăn việc tải lại trang
    event.preventDefault();
    setIsLogin(!isLogin);
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

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
    console.log('hahahahahahh')
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
    }  else if (!username) {
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
        {isLogin ? (
          // Form đăng nhập
          <form action="" className="login_form">
            <h1>
              <a href="/">
                <img src={logo} alt="avt"></img>
              </a>
            </h1>
            <input
              placeholder="Tên đăng nhập hoặc Email"
              className="email input_form_text"
              name="email"
              type="text"
            ></input>
            <input
              placeholder="Mật khẩu"
              className="pass input_form_text"
              name="pass"
              type="text"
            ></input>
            <div className="check_box">
              <div className="remember_login">
                <div className="container">
                  <input id="checked" type="checkbox" />
                  <div className="checkmark"></div>
                </div>
                <label htmlFor="checked">Ghi Nhớ Đăng Nhập</label>
              </div>
              <a className="forgot_pass" href="/">
                Quên mật khẩu?
              </a>
            </div>
            <div className="form_button">
              <button className="signin form_btn">LOGIN</button>
              <p>Or Login with</p>
              <button className="signin_gg form_btn">
                <FontAwesomeIcon icon={faGoogle} /> Google
              </button>
            </div>
            <div className="change_page_text">
              Bạn chưa có tài khoản?{" "}
              <div className="change_page" onClick={toggleForm}>
                Đăng ký{" "}
              </div>
            </div>
          </form>
        ) : (
          // Form đăng ký
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
                onChange={(event) => setUsername(event.target.value)}
            ></input>
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
                  onChange={(event) => setEmail(event.target.value)}
            ></input>
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
                onChange={(event) => setPassword(event.target.value)}
            ></input>

            <div className="form_button">
              <button className="signin form_btn" onClick={(e)=> handleRegister(e)}>SIGN UP</button>
              <p>Or Sign up with</p>
              <button className="signin_gg form_btn">
                <FontAwesomeIcon icon={faGoogle} /> Google
              </button>
            </div>
            <div className="change_page_text">
              Bạn chưa có tài khoản?{" "}
              <div className="change_page" onClick={toggleForm}>
                Đăng nhập{" "}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Loginform;
