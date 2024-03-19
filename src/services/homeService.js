import { homeInfo } from '../controller/home';
const getHomeData = async (Songid) => {
    try {
         const data = await homeInfo()
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    getHomeData
}