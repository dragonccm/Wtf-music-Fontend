import { cloneArtistsData } from "../controller/atistsClone"
const postss = async (data) => {
    try {
        const datas = await cloneArtistsData(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    postss
}