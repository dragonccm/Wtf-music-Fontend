import { useState } from "react"
import Profile_edit from "./profile_edit"
import ProfileChangePass from "./profile_changePass"
import "../../../../css/profileSetting.scss"
const ProfileSetting = () => {
    const [area, setArea] = useState('song')
    const handleChange = (e) => {
        // console.log(e.target.value); // In ra giá trị của radio button được chọn
        setArea(e.target.value)
    }
    return (
        <div className="setting_ctn profile_page">
            <div className="radio-inputs">
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
            </div>
            {area === 'song' ? <Profile_edit /> :<ProfileChangePass />}
            
            
        </div>
    )
}
export default ProfileSetting