import React from 'react';
import "../css/Header.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faChevronRight,faUser,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='Header'>
            <div className="Navigation">
                <button className='Navigation_btn previous_page'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className='Navigation_btn next_page'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="avt_container">


                <Popup trigger={<button className='avt_page'><img src="../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg" alt="f" /></button>} position="bottom right"
                    nested
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: '0', border: 'none' }}
                    arrow={false}>
                    <div className="menu">
                        <button className="menu-item"><FontAwesomeIcon icon={faUser} /> Hồ sơ của bạn</button>
                        <button className="menu-item"><FontAwesomeIcon icon={faRightFromBracket} /> đăng xuất</button>
                    </div>
                </Popup>

            </div>
        </div>
    )
}
export default Header;
