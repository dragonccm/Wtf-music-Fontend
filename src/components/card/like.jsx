import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeartCrack, faHeart as faHeartSolid
} from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as faHeartRegular
} from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addLike, unLike } from "../../controller/addLike";
import { getInforUser } from "../../redux/slide/InforUserSlice";

const Like_heart = ({ id, type }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [liked, setLiked] = useState(false);
    const currData = useSelector((state) => state.inforUser);
    
    const mysong = currData.userInfor.DT.likedSongs;
    const myplaylist = currData.userInfor.DT.likedPlayLists;
    const authen = useSelector((state) => state.Authentication);

    useEffect(() => {

        if (type === 'playlist') {
            // console.log('lllll')
            if (myplaylist && myplaylist.includes(id)) {
                setLiked(true)
            } else {
                setLiked(false)
            }
        } else {
            if (mysong && mysong.includes(id)) {
                setLiked(true)
            } else {
                setLiked(false)
            }
        }

    }, [mysong, myplaylist])
    const handleAdd = async (e) => {
        e.preventDefault();
        if (authen.defaultUser.isAuthenticated === true) {
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
                    dispatch(getInforUser());

                } else if (response && response.EC !== '0') {
                    // toast.error(response.EM);
                    // alert(response.EM)
                }
            } else {
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
                let response = await addLike(data);
                if (response && response.EC === "0") {
                    // toast.success(response.EM)
                    // alert(response.EM)
                    setLiked(true)
                    dispatch(getInforUser());
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
            <button className="rhap_main-controls-button rhap_button-clear" onClick={(e) => handleAdd(e)}>
                <FontAwesomeIcon icon={faHeartSolid} style={{ color: '#3b68ef' }} />
            </button>
        ) : (
            <button className="rhap_main-controls-button rhap_button-clear" onClick={(e) => handleAdd(e)}>
                <FontAwesomeIcon icon={faHeartRegular} />
            </button>
        )
    )

}
export default Like_heart;