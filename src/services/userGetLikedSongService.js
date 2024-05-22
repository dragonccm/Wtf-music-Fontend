import { usergetlikedsong } from "../controller/usergetlikedsongs"
const getUserLikedSongsSv = async () => {
    try {
        const datas = await usergetlikedsong()
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    getUserLikedSongsSv
}