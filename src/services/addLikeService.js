import { addLike } from "../controller/addLike"
const addLikeService = async (data) => {
    try {
        const datas = await addLike(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    addLikeService
}