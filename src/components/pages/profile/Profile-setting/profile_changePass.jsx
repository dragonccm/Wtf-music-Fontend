import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import { getLogout } from "../../../../services/registerService";
import { logouter } from "../../../../redux/slide/AuthenticationSlice";
import { useDispatch } from "react-redux";
import instance from "../../../../setup/axios";

import {
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { changePass } from '../../../../controller/changePass'

const ProfileChangePass = () => {
    const [ispass, setIsPass] = useState(true);
    const [ispassNew, setIsPassNew] = useState(true);
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");

    const defaultValidInput = {
        isValidPass: true,
        isValidNewPass: true,
    };
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
    const handleIsPass = () => {
        if (ispass) {
            setIsPass(false);
        } else {
            setIsPass(true);
        }
    };
    const handleIsPassNew = () => {
        if (ispassNew) {
            setIsPassNew(false);
        } else {
            setIsPassNew(true);
        }
    };
    const dispatch = useDispatch();

    const handleChangePass = async (e) => {
        e.preventDefault();
        let check = isValid();
        if (check) {
            let response = await changePass(oldPass, newPass);
            if (response && response.EC === "0") {
                console.log("ok");
                toast.success('Đã cập nhật mật khẩu thành công !')
                setTimeout(async() => {
                    let data = await getLogout(); //clear cookies
                    localStorage.removeItem("jwt"); // clear local storage
                    instance.defaults.headers.common["Authorization"] = undefined;
                    dispatch(logouter()); //clear user in context
                    if (data && data.EC === "0") {
                        toast.success("Logout successful");
                    } else {
                        toast.error(data.EM);
                    }
                }, 2000)
            } else if (response && response.EM === 'Bạn đã sai mật khẩu!') {
                toast.error(response.EM);
                // setObjCheckInput({ ...defaultValidInput, isValidPass: false });
            }

        }
    }

    const isValid = () => {
        setObjCheckInput(defaultValidInput);
        if (!oldPass) {
            toast.error("Hãy nhập mật khẩu hiện tại !");
            setObjCheckInput({ ...defaultValidInput, isValidPass: false });
            return false;
        } else if (!newPass) {
            toast.error("Hãy nhập mật khẩu mới !");
            setObjCheckInput({ ...defaultValidInput, isValidNewPass: false });
            return false;
        } else if (newPass.length < 6) {
            toast.error("Mật khẩu phải hơn 6 kí tự");
            setObjCheckInput({ ...defaultValidInput, isValidNewPass: false });

            return false;
        }

        return true;
    };
    return (
        <>
            <div className="change_pass">
                <h1>Thay đổi mật khẩu</h1>
                <form action="">
                    <div className="input_group">
                        <label htmlhtmlfor="old_pass">Mật khẩu hiện tại</label>
                        <div className="input_group_pass">
                            <input
                                id="old_pass"
                                type={ispass ? "password" : "text"}
                                value={oldPass}
                                onChange={(event) => setOldPass(event.target.value)}
                                className={
                                    objCheckInput.isValidPass
                                        ? "pass input_form_text"
                                        : "pass input_form_text is-invalid"
                                }
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
                        <label htmlhtmlfor="new_pass">Mật khẩu mới</label>
                        <div className="input_group_pass">
                            <input
                                id="new_pass"
                                type={ispassNew ? "password" : "text"}
                                value={newPass}
                                onChange={(event) => setNewPass(event.target.value)}
                                className={
                                    objCheckInput.isValidNewPass
                                        ? "pass input_form_text"
                                        : "pass input_form_text is-invalid"
                                }
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
export default ProfileChangePass