import { getRating } from '../controller/rating';
const getRatingData = async () => {
    try {
        const data = await getRating()
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    getRatingData
}