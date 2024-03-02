import React from 'react';
import "../../css/Header.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faChevronRight,faUser,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from '../../img/logo3 (1).png'

const Header = () => {
    return (
        <div className='Header'>
            <div className='header_wrap'>
            <div className="Navigation">
                <button className='Navigation_btn previous_page'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className='Navigation_btn next_page'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="h_avt_container">


                <Popup trigger={<button className='avt_page'><img src={logo} alt="f" /></button>} position="bottom right"
                    nested
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: '0', border: 'none' }}
                    arrow={false}>
                    <div className="menu">
                        <a href='/login' className="menu-item"><FontAwesomeIcon icon={faUser} /> Hồ sơ của bạn</a>
                        <a href='/profile/info' className="menu-item"><FontAwesomeIcon icon={faRightFromBracket} /> đăng xuất</a>
                    </div>
                </Popup>

            </div>
            </div>
        </div>
    )
}
export default Header;
