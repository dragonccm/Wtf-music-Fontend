import { addNewH } from '../controller/history';
const addHisFetch = async (data) => {
    try {
        const datas = await addNewH(data)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    addHisFetch
}