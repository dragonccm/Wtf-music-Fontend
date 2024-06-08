import { deleteplaylist } from "../controller/deletemyPlaylist"
const deleteplaylistService = async (data) => {
    try {
        const datas = await deleteplaylist(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    deleteplaylistService
}