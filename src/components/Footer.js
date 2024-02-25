import React from 'react';
import "../css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => {
    return (
        <div className='Footer'>
            <div className="info_contaier">
                <div className="column_container">
                    <div className="column">
                        <h3>Company</h3>
                        <div>About</div>
                        <div>Jobs</div>
                        <div>For the Record</div>
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

                <div className="Social_media">
                    <a href="">git</a>
                    <a href="">fb</a>
                    <a href="">ins</a>
                </div>
            </div>
            <div className="Privacy">
                <a href="">Legal</a>
                <a href="">Safety & Privacy Center</a>
                <a href="">Privacy Policy</a>
                <a href="">Cookies</a>
                <a href="">About Ads</a>
                <a href="">Accessibility</a>
            </div>
        </div>
    )
}
export default Footer;
