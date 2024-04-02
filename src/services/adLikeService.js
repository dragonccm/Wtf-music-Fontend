import { addLikes } from '../controller/addLikes';
const addLikesService = async (data) => {
    try {
        const datas = await addLikes(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    addLikesService
}