import { top100route } from '../controller/top100';
const gettop100 = async () => {
    try {
        const datas = await top100route()
        console.log("GET TOP 100 SERVICE STATR")
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    gettop100
}