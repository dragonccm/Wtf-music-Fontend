import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../../css/login_page.scss";


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
      <img className="bg_login" src='https://th.bing.com/th/id/R.d454115307015ba9cdaa40e510fbb012?rik=aqjycCmZNnqTtw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2fe%2f7%2f1385470-best-blue-music-wallpaper-1920x1200-for-xiaomi.jpg&ehk=HrnnakVPa%2bMrE4T%2bktSVYoPogJTfXpV%2f5Fin29xZK%2bI%3d&risl=&pid=ImgRaw&r=0' alt="" />
      <div className="form-con">
        {isLogin ? (
          // Form đăng nhập
          <form action="" className="login_form">
            <h1><a href="/">WTF MUSIC</a></h1>
            <input
              placeholder="Tên đăng nhập hoặc Email"
              className="email input_form_text"
              name="email"
              type="text"></input>
            <input
              placeholder="Mật khẩu"
              className="pass input_form_text"
              name="pass"
              type="text"></input>
            <div className="check_box">
              <div className="remember_login">
                <label class="container">
                  <input type="checkbox" />
                  <div class="checkmark"></div>
                </label>
                <p>Ghi Nhớ Đăng Nhập</p>
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
            <p className="change_page_text">
              Bạn chưa có tài khoản?{" "}
              <div className="change_page" onClick={toggleForm}>
                Đăng ký{" "}
              </div>
            </p>
          </form>
        ) : (
          // Form đăng ký
          <form action="" className="signup_form">
              <h1><a href="/">WTF MUSIC</a></h1>
              <input
              placeholder="Tên tài khoản"
              className="username input_form_text"
              name="username"
              type="text"></input>      
            <input
              placeholder="Email"
              className="email input_form_text is-invalid"
              name="email"
              type="text"></input>
            <input
              placeholder="Mật khẩu"
              className="pass input_form_text"
              name="pass"
              type="text"></input>
            
            <div className="form_button">
              <button className="signin form_btn">SIGN UP</button>
              <p>Or Sign up with</p>
              <button className="signin_gg form_btn">
                <FontAwesomeIcon icon={faGoogle} /> Google
              </button>
            </div>
            <p className="change_page_text">
              Bạn chưa có tài khoản?{" "}
              <div className="change_page" onClick={toggleForm}>
                Đăng nhập{" "}
              </div>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Loginform;
