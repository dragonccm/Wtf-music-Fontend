import { getId,postSong } from '../controller/setupData';
const getAllId = async () => {
    try {
        const datas = await getId()
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

const pushSong = async (data) => {
    try {
        const datas = await postSong(data)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    getAllId,
    pushSong
}