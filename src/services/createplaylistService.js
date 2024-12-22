import { createplaylist } from "../controller/createPlaylist"
const createplaylistService = async (data) => {
    try {
        const datas = await createplaylist(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    createplaylistService
}