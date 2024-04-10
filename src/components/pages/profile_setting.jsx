import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import ImageUploader from "./uploadImage";
import {
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getInforUser, editInforUser } from "../../redux/slide/InforUserSlice";
import { changePass } from '../../controller/changePass'
import '../../css/profileSetting.scss'
const ProfileSetting = () => {
    const [ispass, setIsPass] = useState(true);
    const [ispassNew, setIsPassNew] = useState(true);
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");


    const [imageUrl, setImageUrl] = useState("https://i.redd.it/ykbmzd7rlyq01.jpg");

    const handleUpload = (url) => {
        setImageUrl(url);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInforUser());
    }, []);

    const infor = useSelector((state) => {
        return state.inforUser.userInfor;
    });
    useEffect(() => {
        if (infor && infor.DT) {
            setEmail(infor.DT.email)
            if (infor.DT.birthday) {
                const date = new Date(infor.DT.birthday);
                const formattedDate = date.toISOString().split('T')[0];
                setBirthday(formattedDate)
            }
        }
    }, [infor])
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
    const handleEdit = () => {
        console.log(birthday)
        dispatch(editInforUser({ email, birthday }));
    }
    const handleChangePass = async (e) => {
        e.preventDefault();
        if (newPass === '' || newPass.length < 6 || oldPass === '') {
            alert('Please enter')
        } else {
            let response = await changePass(oldPass, newPass);
            if (response && response.EC === "0") {
                console.log("ok");
                toast.success('okkkkk')
            } else {
                //   toast.error(serverData.EM);
                toast.error("Chưa được");
                console.log("chưa đc");
            }
        }
    }

    return (
        infor && infor.DT &&
        <>
            <div className="setting_ctn profile_page">
                <div className="info_card_ctn">
                    <h2 className="profile_details">Profile details</h2>
                   
                    <div className="avt-container">
                        {imageUrl && <img src={imageUrl} className="avt-img" alt="Uploaded" />}
                        <ImageUploader onUpload={handleUpload} />
                    </div>
                    <div className="info_card">

                        <div className="input_group">
                            <label htmlhtmlFor="username">Tên tài khoản:</label>
                            <div className="input_group_pass">
                                <input
                                    id="username"
                                    type='text'
                                    value={infor.DT.username}
                                    readonly
                                />

                            </div>

                        </div>
                        <div className="input_group">
                            <label htmlhtmlFor="email">Email:</label>
                            <div className="input_group_pass">
                                <input
                                    id="email"
                                    type='text'
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />

                            </div>

                        </div>
                        <div className="input_group">
                            <label htmlhtmlFor="birthday">Sinh nhật</label>
                            <div className="input_group_pass">
                                <input
                                    id="birthday"
                                    type='date'
                                    value={birthday}
                                    onChange={(event) =>
                                        setBirthday(event.target.value)
                                    }
                                />
                            </div>

                        </div>
                        <div className="input_group">
                            <button className="list_nav_item" onClick={() => handleEdit()}>Thay đổi</button>
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
                            <button className="list_nav_item" onClick={(e) => handleChangePass(e)}>Thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                style={{ fontSize: "16px" }}
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}
export default ProfileSetting