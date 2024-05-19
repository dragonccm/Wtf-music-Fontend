import { cloneSongs } from '../controller/SongsClone';
const cloneSongsService = async (data) => {
    try {
        const datas = await cloneSongs(data)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    cloneSongsService
}