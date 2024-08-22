import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast,ToastContainer } from "react-toastify";
import '../../css/profileSetting.scss'
import '../../css/resetPass.scss'
import {
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { resetPass } from '../../controller/changePass'
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
    const [ispass, setIsPass] = useState(true);
    const [ispassNew, setIsPassNew] = useState(true);
    const [confirmPass, setConfirmPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [titleValid, setTitleValid] = useState("");
    const navigate = useNavigate();
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

    const handleChangePass = async (e) => {
        e.preventDefault();
        let check = isValid();
        if (check) {
            let response = await resetPass(confirmPass, newPass);
            if (response && response.EC === "0") {
                // console.log("ok");
                toast.success('Đã cập nhật mật khẩu thành công !')
                setTimeout(async () => {
                    navigate("/login");
                }, 1000)
            } else if (response && response.EM === 'Bạn đã sai mật khẩu!') {
                toast.error(response.EM);
                // setObjCheckInput({ ...defaultValidInput, isValidPass: false });
            }

        }
    }

    const isValid = () => {
        setObjCheckInput(defaultValidInput);
        if (!newPass) {
            setTitleValid("Hãy nhập mật khẩu mới !");
            setObjCheckInput({ ...defaultValidInput, isValidNewPass: false });
            return false;
        } else if (newPass.length < 6) {
            setTitleValid("Mật khẩu phải hơn 6 kí tự !");
            setObjCheckInput({ ...defaultValidInput, isValidNewPass: false });

            return false;
        } else if (!confirmPass) {
            setTitleValid("Hãy nhập lại mật khẩu !");
            setObjCheckInput({ ...defaultValidInput, isValidPass: false });
            return false;
        } else if (newPass!==confirmPass) {
            setTitleValid("Mật khẩu không trùng khớp !");
            setObjCheckInput({ ...defaultValidInput, isValidPass: false });
            return false;
        }

        return true;
    };
    return (
        <>
            <div className="reset-pass profile_page">
                <form action="" className="col-sm-9 mx-auto">
                <h1>Thay đổi mật khẩu</h1>
                    
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
                        {!objCheckInput.isValidNewPass && <span>{titleValid}</span>}

                    </div>
                    <div className="input_group">
                        <label htmlhtmlfor="old_pass">Nhập lại mật khẩu</label>
                        <div className="input_group_pass">
                            <input
                                id="old_pass"
                                type={ispass ? "password" : "text"}
                                value={confirmPass}
                                onChange={(event) => setConfirmPass(event.target.value)}
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
                        {!objCheckInput.isValidPass && <span>{titleValid}</span>}
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
                theme="light"
            />
        </>
    )
}
export default ResetPass