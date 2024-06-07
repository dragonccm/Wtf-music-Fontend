import { getrankingController,getrankinglistenController  } from '../controller/songRank';
const songRankService  = async (id) => {
    try {
        const datas = await getrankingController(id)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 
const songRankListenService  = async (id) => {
    try {
        const datas = await getrankinglistenController(id)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}

export {
    songRankService,
    songRankListenService
}