import { adminArtist } from '../controller/adminSingers';
const adminGetArtist = async (page) => {
    try {
        const data = await adminArtist(page)
        return data
    } catch (error) {
        console.error("Error loading artist data:", error);
        return null;
    }
}; 

export {
    adminGetArtist
}