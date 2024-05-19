import { adminGetGenre } from '../controller/adminGenres';
const adminGetGenres = async (page) => {
    try {
        const data = await adminGetGenre(page)
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    adminGetGenres
}