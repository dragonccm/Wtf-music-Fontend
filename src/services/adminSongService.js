import { adminSong } from '../controller/adminSong';
const adminGetSong = async (page) => {
    try {
        const data = await adminSong(page)
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    adminGetSong
}