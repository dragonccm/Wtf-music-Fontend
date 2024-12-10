import { getrankingController, getrankinglistenController, getrankingplserviceController, getrankingplservicelistenController } from '../controller/songRank';


const songRankService  = async (id,range,startday) => {
    try {
        const datas = await getrankingController(id,range,startday)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

const songRankListenService = async (id, range, startDate) => {
    try {
        const datas = await getrankinglistenController(id,range,startDate)
        return datas
    } catch (error) {
        console.error("Error fetching song rank listen data:", error);
        throw error;
    }
};

const songRankPLService = async (id, range, startday) => {
    try {
        const datas = await getrankingplserviceController(id, range, startday);
        return datas;
    } catch (error) {
        console.error("Error loading playlist ranking data:", error);
        return null;
    }
};

const songRankPLListenService = async (id, range, startday) => {
    try {
        const datas = await getrankingplservicelistenController(id, range, startday);
        return datas;
    } catch (error) {
        console.error("Error loading playlist ranking listen data:", error);
        return null;
    }
};

export {
    songRankService,
    songRankListenService,
    songRankPLService,
    songRankPLListenService
}