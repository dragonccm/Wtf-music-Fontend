import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import '../../css/login_page.css'
function Loginform() {
    return (
        <div className="mod">
            <form action="" className="login_form">
                <h1>WTF_MUSIC</h1>
                <input placeholder="email" className="email" name="email" type="text"></input>
                <input placeholder="mật khẩu" className="pass" name="pass" type="text"></input>
                <input placeholder="nhập lại mật khẩu" className="pass" name="pass_again" type="text"></input>
                <div className="check_box">
                    <input type="checkbox" name="nho" className="login_check" />
                    <p>Ghi Nhớ Đăng Nhập</p>
                </div>
                <button className="signin">login</button>
                <button className="signin_gg"><FontAwesomeIcon icon={faGoogle} /> Google</button>
                <p className="change_page_text">Bạn đã có tài khoản hãy đăng nhập <div className="change_page">đăng nhập</div></p>
                <button className="logout">Đăng Xuất</button>
            </form>
            <form action="" className="signup_form">
                <h1>WTF_MUSIC</h1>
                <input placeholder="email" className="email" name="email" type="text"></input>
                <input placeholder="mật khẩu" className="pass" name="pass" type="text"></input>
                <input placeholder="nhập lại mật khẩu" className="pass" name="pass_again" type="text"></input>
                <div className="check_box">
                    <input type="checkbox" name="nho" className="login_check" />
                    <p>Ghi Nhớ Đăng Nhập</p>
                </div>
                <button className="signin">login</button>
                <button className="signin_gg"><FontAwesomeIcon icon={faGoogle} /> Google</button>
                <p className="change_page_text">Bạn đã có tài khoản hãy đăng nhập <div className="change_page">đăng nhập</div></p>
                <button className="logout">Đăng Xuất</button>
            </form>
        </div>
    );
}

export default Loginform;