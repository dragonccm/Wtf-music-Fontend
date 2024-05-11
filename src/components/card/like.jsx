import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeartCrack,faHeart as faHeartSolid
} from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as faHeartRegular
} from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addLike, unLike } from "../../controller/addLike";

const Like_heart = ({ id,type }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [liked, setLiked] = useState(false);

    const currData = useSelector((state) => state.Authentication);
    const mysong = currData.defaultUser.account.likedSongs
    useEffect(() => {
        if (mysong && mysong.includes(id)) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [mysong])
    const handleAdd = async() => {
        if (currData.defaultUser.isAuthenticated === true) {
            if (liked) {
                let data 
                if (type === 'song') {
                    data = {
                        type: "song",
                        id: id
                    }
                } else if (type === 'playlist') {
                    data = {
                        type: "playlist",
                        id: id
                    }
                }
                let response = await unLike(data);
                if (response && response.EC === "0") {
                    // toast.success(response.EM)
                    // console.log(response)
                    // alert(response.EM)
                    setLiked(false)

                } else if (response && response.EC !== '0') {
                    // toast.error(response.EM);
                    // alert(response.EM)
                }
            } else {
                const data = {
                    type: "song",
                    id: id
                  }
                let response = await addLike(data);
                if (response && response.EC === "0") {
                    // toast.success(response.EM)
                    // alert(response.EM)
                    setLiked(true)

                } else if (response && response.EC !== '0') {
                    // toast.error(response.EM);
                    alert(response.EM)
                }
            }
        } else {
            navigate('/login');

        }
    }
    return (
        liked ? (
            <button className="rhap_main-controls-button rhap_button-clear" onClick={() => handleAdd()}>
                <FontAwesomeIcon icon={faHeartSolid} style={{ color: '#3b68ef' }}/>
            </button>
        ) : (
            <button className="rhap_main-controls-button rhap_button-clear" onClick={() => handleAdd()}>
                <FontAwesomeIcon icon={faHeartRegular} />
            </button>
        )
    )

}
export default Like_heart;