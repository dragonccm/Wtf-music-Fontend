import { addPlayList } from "../controller/addPlayList"
const addPlayListService = async (data) => {
    try {
        const datas = await addPlayList(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    addPlayListService
}