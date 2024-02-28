import React from 'react';
import "../../css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub,faSquareFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'


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
                    <a href="https://www.ditmenavi.com/"><FontAwesomeIcon icon={faSquareGithub} /></a>
                    <a href="https://www.ditmenavi.com/"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                    <a href="https://www.ditmenavi.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
            <div className="Privacy">
                <a href="https://www.ditmenavi.com/">Legal</a>
                <a href="https://www.ditmenavi.com/">Safety & Privacy Center</a>
                <a href="https://www.ditmenavi.com/">Privacy Policy</a>
                <a href="https://www.ditmenavi.com/">Cookies</a>
                <a href="https://www.ditmenavi.com/">About Ads</a>
                <a href="https://www.ditmenavi.com/">Accessibility</a>
            </div>
        </div>
    )
}
export default Footer;
