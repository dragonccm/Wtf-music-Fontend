import { adminSsong } from '../controller/adminSearchSongRouter';
const adminSearchS = async (inputdata) => {

    try {
        const data = await adminSsong(inputdata);
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};

export {
    adminSearchS,

}