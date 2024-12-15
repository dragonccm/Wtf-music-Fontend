import { useState } from "react"
import Profile_edit from "./profile_edit"
import ProfileChangePass from "./profile_changePass"
import { useSelector, useDispatch } from "react-redux";
import "../../../../css/profileSetting.scss"
const ProfileSetting = () => {
    const currData = useSelector((state) => state.Authentication);
    const type = currData.defaultUser.account.type_login;
    const [area, setArea] = useState('song')
    const handleChange = (e) => {
        // console.log(e.target.value); // In ra giá trị của radio button được chọn
        setArea(e.target.value)
    }
    return (
        <div className="setting_ctn profile_page">
           {type !== 'email' && <div className="radio-inputs">
                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='song'
                        checked={area === 'song'}
                        onChange={(e) => handleChange(e)}
                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            Thông tin
                        </span>
                    </span>
                </label>
                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='playlist'
                        checked={area === 'playlist'}

                        onChange={(e) => handleChange(e)}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            Đổi mật khẩu
                        </span>
                    </span>
                </label>
            </div>}
            {area === 'song' ? <Profile_edit /> : <ProfileChangePass />}


        </div>
    )
}
export default ProfileSetting