import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import "../../css/Bottombar.scss"
const Bottombar = (props) => {
    return (
        <div className="main_bottom_bar">
            <div className="bottom_bar">
                <div className="left">
                    <div className="info_img">
                        <img src="https://lh3.googleusercontent.com/03WLPin15fkpkLMayBhp4E1YyOJRtcwOL8r2albpcYfmva2vqNbr4RM8q8zk5pGhu9PHdWHk60d2haTOPdgghaUxpDFO4ROPSg=w1600-rj" alt="f" className="song_avt" />
                    </div>
                    <div className="info">
                        <h3>Flower</h3>
                        <p>JISOO</p>
                    </div>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="center">
                        <AudioPlayer
                            autoPlay
                            src={props.music}
                            onPlay={e => console.log("onPlay")}
                        />
                </div>
                <div className="right">
                    <p>một cái gì đó tao sẽ làm </p>
                </div>
            </div>
        </div>
    )
}
export default Bottombar