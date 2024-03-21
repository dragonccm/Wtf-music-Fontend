import { getRating } from '../controller/rating';
const getRatingData = async () => {
    try {
        const data = await getRating()
        console.log(data)
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    getRatingData
}