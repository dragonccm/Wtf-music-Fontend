import { searchPageController  } from '../controller/searchPageController';
const searchPageService  = async (id) => {
    try {
        const datas = await searchPageController(id)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    searchPageService 
}