import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../../css/login_page.scss";
import bg_login from '../../img/bg_login.jpg'

function Loginform() {
  // Trạng thái để xác định form đăng nhập hay form đăng ký đang hiển thị
  const [isLogin, setIsLogin] = useState(true);

  // Hàm để thay đổi trạng thái giữa form đăng nhập và đăng ký
  function toggleForm(event) {
    // Ngăn việc tải lại trang
    event.preventDefault();
    setIsLogin(!isLogin);
  }

  return (
    <div className="mod">
      <img className="bg_login" src={bg_login} alt="" />
      <div className="form-con">
        {isLogin ? (
          // Form đăng nhập
          <form action="" className="login_form">
            <h1><a href="/">WTF_MUSIC</a></h1>
            <input
              placeholder="email"
              className="email input_form_text"
              name="email"
              type="text"></input>
            <input
              placeholder="mật khẩu"
              className="pass input_form_text"
              name="pass"
              type="text"></input>
            <div className="check_box">
              <div className="remember_login">
                <input type="checkbox" name="nho" className="login_check" />
                <p>Ghi Nhớ Đăng Nhập</p>
              </div>
              <a className="forgot_pass" href="">
                Quên mật khẩu?
              </a>
            </div>
            <div className="form_button">
              <button className="signin form_btn">LOGIN</button>
              <p>Or Sign in with</p>
              <button className="signin_gg form_btn">
                <FontAwesomeIcon icon={faGoogle} /> Google
              </button>
            </div>
            <p className="change_page_text">
              Bạn chưa có tài khoản?{" "}
              <div className="change_page" onClick={toggleForm}>
                đăng ký{" "}
              </div>
            </p>
          </form>
        ) : (
          // Form đăng ký
          <form action="" className="signup_form">
            <h1>WTF_MUSIC</h1>
            <input
              placeholder="email"
              className="email input_form_text"
              name="email"
              type="text"></input>
            <input
              placeholder="mật khẩu"
              className="pass input_form_text"
              name="pass"
              type="text"></input>
            <div className="check_box">
              <div className="remember_login">
                <input type="checkbox" name="nho" className="login_check" />
                <p>Ghi Nhớ Đăng Nhập</p>
              </div>
              <a className="forgot_pass" href="">
                Quên mật khẩu?
              </a>
            </div>
            <div className="form_button">
              <button className="signin form_btn">LOGIN</button>
              <p>Or Sign in with</p>
              <button className="signin_gg form_btn">
                <FontAwesomeIcon icon={faGoogle} /> Google
              </button>
            </div>
            <p className="change_page_text">
              Bạn chưa có tài khoản?{" "}
              <div className="change_page" onClick={toggleForm}>
                đăng ký{" "}
              </div>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Loginform;
