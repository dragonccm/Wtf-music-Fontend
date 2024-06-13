import { adminGetComment } from '../controller/adminGetComment';
const adminGetCommentService = async (inputdata) => {
    try {
        const data = await adminGetComment(inputdata)
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    adminGetCommentService
}