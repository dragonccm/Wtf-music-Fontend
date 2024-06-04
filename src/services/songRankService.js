import { getrankingController  } from '../controller/songRank';
const songRankService  = async (id) => {
    try {
        const datas = await getrankingController(id)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    songRankService 
}