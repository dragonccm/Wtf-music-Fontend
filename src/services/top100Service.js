import { top100route } from '../controller/top100';
const gettop100 = async () => {
    try {
        const datas = await top100route()
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    gettop100
}