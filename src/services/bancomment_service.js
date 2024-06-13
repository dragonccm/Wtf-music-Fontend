import { bancomment } from "../controller/bancomment"
const bancommentService = async (data) => {
    try {
        const datas = await bancomment(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    bancommentService
}