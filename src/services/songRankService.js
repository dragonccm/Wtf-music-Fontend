import { getrankingController,getrankinglistenController  } from '../controller/songRank';
const songRankService  = async (id,range,startday) => {
    try {
        const datas = await getrankingController(id,range,startday)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 
const songRankListenService  = async (id,range,startday) => {
    try {
        const datas = await getrankinglistenController(id,range,startday)
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