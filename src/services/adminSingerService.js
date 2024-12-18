import { adminSinger } from '../controller/adminSingers';
const adminGetSinger = async (page) => {
    try {
        const data = await adminSinger(page)
        return data
    } catch (error) {
        console.error("Error loading artist data:", error);
        return null;
    }
}; 

export {
    adminGetSinger
}