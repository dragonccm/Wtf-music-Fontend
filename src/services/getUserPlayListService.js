import { userPLayList } from "../controller/getUserPlayList"
const getUserPLayListSv = async (data) => {
    try {
        const datas = await userPLayList(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    getUserPLayListSv
}