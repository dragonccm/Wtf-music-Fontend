import { adminSong } from '../controller/adminSong';
const adminGetSong = async () => {
    try {
        const data = await adminSong()
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    adminGetSong
}