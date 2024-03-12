import React from "react";
import "../../css/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/logo3 (1).png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="info_contaier">
        <div className="column_container">
          <div className="column main">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="content">
              Nền tảng giải trí trực tuyến số 1 đa vũ trụ. Ngoài ra, còn các
              dịch vụ ẩn vô cùng vô cùng thú vị.
            </div>
          </div>
          <div className="column">
            <h3>Contact</h3>
            <div className="pd_phone">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>120 Đồng Không Mông Quạnh,Ninh Kiều, Cần Thơ, VN</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:(+84) 24042003">
                <span>(+84) 24042003</span>
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <span> mail@wtfdev.pages.dev</span>
            </div>
          </div>
          <div className="column">
            <h3>Communities</h3>
            <div>For Artists</div>
            <div>Developers</div>
            <div>Advertising</div>
            <div>Investors</div>
            <div>Vendors</div>
          </div>
          <div className="column">
            <h3>Useful links</h3>
            <div>Support</div>
            <div>Free Mobile App</div>
          </div>
        </div>

        {/* <div className="Social_media">
                    <a href="https://www.ditmenavi.com/"><FontAwesomeIcon icon={faSquareGithub} /></a>
                    <a href="https://www.ditmenavi.com/"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                    <a href="https://www.ditmenavi.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div> */}
      </div>
      {/* <div className="Privacy">
                <a href="https://www.ditmenavi.com/">Legal</a>
                <a href="https://www.ditmenavi.com/">Safety & Privacy Center</a>
                <a href="https://www.ditmenavi.com/">Privacy Policy</a>
                <a href="https://www.ditmenavi.com/">Cookies</a>
                <a href="https://www.ditmenavi.com/">About Ads</a>
                <a href="https://www.ditmenavi.com/">Accessibility</a>
            </div> */}
    </div>
  );
};
export default Footer;
