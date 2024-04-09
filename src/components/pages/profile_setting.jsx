import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getInforUser } from "../../redux/slide/InforUserSlice";

const ProfileSetting = () => {
    const [ispass, setIsPass] = useState(true);
    const [ispassNew, setIsPassNew] = useState(true);
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInforUser());
    }, [dispatch]);

    const infor = useSelector((state) => {
        return state.inforUser.userInfor;
    });
    const isLoading = useSelector((state) => {
        return state.inforUser.isLoading;
    });
    if (Object.keys(infor).length === 0 && !isLoading) {
        return <div className="main_banner">Loading...</div>;
    }
    console.log(infor)
    const handleIsPass = () => {
        if (ispass) {
            setIsPass(false);
            console.log("đây là trang profile", ispass);
        } else {
            setIsPass(true);
        }
    };
    const handleIsPassNew = () => {
        if (ispassNew) {
            setIsPassNew(false);
            console.log("đây là trang profile new", ispassNew);
        } else {
            setIsPassNew(true);
        }
    };
    const userdata = {
        avt: "https://i.redd.it/ykbmzd7rlyq01.jpg",
        name: "Dragonccm",
        email: "dragonccm@gmail.com",
        date: "10/02/2003",
        pass: "long20%long555",
    };
    return (
         infor && infor.DT &&
        <div className="setting_ctn profile_page">
            <div className="info_card_ctn">
                <h2 className="profile_details">Profile details</h2>
                <div className="avt_container">
                    <img src='https://i.redd.it/ykbmzd7rlyq01.jpg' alt="f" />
                </div>
                <div className="info_card">
                    <div className="info_card_item">
                        <label>Tên: </label>
                        <p>{infor.DT.username}</p>
                    </div>
                    <div className="info_card_item">
                        <label>Email: </label>
                        <p>{infor.DT.email}</p>
                    </div>
                    <div className="info_card_item">
                        <label>Ngày Sinh: </label>
                        <p>{infor.DT.createdAt}</p>
                    </div>
                </div>
            </div>
            <div className="change_pass">
                <h1>Thay đổi mật khẩu</h1>
                <form action="">
                    <div className="input_group">
                        <label htmlhtmlFor="old_pass">Mật khẩu hiện tại</label>
                        <div className="input_group_pass">
                            <input
                                id="old_pass"
                                type={ispass ? "password" : "text"}
                                value={oldPass}
                                onChange={(event) => setOldPass(event.target.value)}
                            />
                            {ispass ? (
                                <FontAwesomeIcon
                                    icon={faEyeSlash}
                                    onClick={handleIsPass}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faEye}
                                    onClick={handleIsPass}
                                />
                            )}
                        </div>
                    </div>
                    <div className="input_group">
                        <label htmlhtmlFor="new_pass">Mật khẩu mới</label>
                        <div className="input_group_pass">
                            <input
                                id="new_pass"
                                type={ispassNew ? "password" : "text"}
                                value={newPass}
                                onChange={(event) => setNewPass(event.target.value)}
                            />
                            {ispassNew ? (
                                <FontAwesomeIcon
                                    icon={faEyeSlash}
                                    onClick={handleIsPassNew}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faEye}
                                    onClick={handleIsPassNew}
                                />
                            )}
                        </div>
                    </div>
                    <div className="input_group">
                        <button className="list_nav_item">Thay đổi</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ProfileSetting