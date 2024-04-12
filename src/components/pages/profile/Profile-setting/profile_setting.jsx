import Profile_edit from "./profile_edit"
import ProfileChangePass from "./profile_changePass"
import  "../../../../css/profileSetting.scss"
const ProfileSetting = () => {
    return (
        <div className="setting_ctn profile_page">
            <Profile_edit />
            <ProfileChangePass />
        </div>
    )
}
export default ProfileSetting