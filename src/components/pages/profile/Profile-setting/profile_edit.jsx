import { useState, useEffect } from "react";
import ImageUploader from "./uploadImage";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getInforUser, editInforUser } from "../../../../redux/slide/InforUserSlice";
import Loading from "../../../sideNavigation/mascot_animation";
const Profile_edit = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInforUser());
    }, []);
    const infor = useSelector((state) => {
        return state.inforUser.userInfor;
    });

    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");

    const [imageUrl, setImageUrl] = useState('');
    const [file, setFile] = useState(null);
    const handleUpload = (file) => {
        setFile(file);
        setImageUrl(URL.createObjectURL(file));
    };

    useEffect(() => {
        if (infor && infor.DT) {
            setEmail(infor.DT.email)
            if (infor.DT.avt) setImageUrl('data:image/png;base64,' + infor.DT.avt)
            if (infor.DT.birthday) {
                const date = new Date(infor.DT.birthday);
                const formattedDate = date.toISOString().split('T')[0];
                setBirthday(formattedDate)
            }
            if (infor.EM === 'updated successfully') {
                toast.success('Cập nhật thông tin thành công')
            }
        } 
    }, [infor])
    const isLoading = useSelector((state) => {
        return state.inforUser.isLoading;
    });
    if ((Object.keys(infor).length === 0 && !isLoading) || !infor.DT) {
        return <div className="main_banner"><Loading/></div>;
    }

    const handleEdit = () => {
        // console.log(birthday)
        // console.log(file)
        if (file !== 'data:image/png;base64,' + infor.DT.avt) {

            dispatch(editInforUser({ email, birthday, file }));
        } else {
            dispatch(editInforUser({ email, birthday }));

        }
    }
    return (
        <>
            <div className="info_card_ctn">
                <h2 className="profile_details">Chỉnh sửa thông tin</h2>

                <div className="main">
                    <div className="avt_main">
                    <div className="avt-container">
                        {imageUrl && <img src={imageUrl} className="avt-img" alt="Uploaded" />}
                        <ImageUploader onUpload={handleUpload} />
                    </div>
                    </div>
                    <div className="info_card">

                        <div className="input_group">
                            <label htmlhtmlfor ="username">Tên tài khoản:</label>
                            <div className="input_group_pass">
                                <input
                                    id="username"
                                    type='text'
                                    value={infor.DT.username}
                                    readOnly
                                />

                            </div>

                        </div>
                        <div className="input_group">
                            <label htmlhtmlfor ="email">Email:</label>
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
                            <label htmlhtmlfor ="birthday">Sinh nhật</label>
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
export default Profile_edit