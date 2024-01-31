import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'


import "../css/Bottombar.css"
const Bottombar = () => {
    return (
        <div>
            <div className="bottom_bar">
                <div className="left">
                    <div className="info_img">
                        <img src="../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg" alt="" className="song_avt" />
                    </div>
                    <div className="info">
                        <h3>Flower</h3>
                        <p>JISOO</p>
                    </div>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="center">
                    <div className="control">
                        <FontAwesomeIcon icon={faShuffle} />
                        <FontAwesomeIcon icon={faBackwardStep} />
                        <FontAwesomeIcon icon={faCirclePlay} />
                        <FontAwesomeIcon icon={faForwardStep} />
                        <FontAwesomeIcon icon={faRepeat} />
                    </div>
                    <div className="timeline">

                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
export default Bottombar