import {  getrankingPlController,getrankingPllistenController } from '../controller/playlistRank';
const playlistRankService = async (data) => {
    try {        
        const datas = await getrankingPlController(data)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
};
const playlistRankListenService = async (data) => {
    try {        
        const datas = await getrankingPllistenController(data)
        return datas
    } catch(error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}

export {
    playlistRankService,
    playlistRankListenService
}