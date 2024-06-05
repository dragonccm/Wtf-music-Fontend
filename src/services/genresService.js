import { genres } from "../controller/genres";
const getGenres = async () => {
    try {
        const datas = await genres();
        return datas;
    } catch (error) {
        console.error("Error loading genres data:", error);
        return null;
    }
};

export { getGenres };
