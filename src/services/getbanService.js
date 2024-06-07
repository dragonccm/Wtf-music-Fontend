import { getban } from "../controller/getban";
const getbanService = async () => {
    try {
        const datas = await getban();
        return datas;
    } catch (error) {
        console.error("Error loading genres data:", error);
        return null;
    }
};

export { getbanService };
