import { getrankingPlController, getrankingPllistenController } from '../controller/playlistRank';
const playlistRankService = async (id) => {
    try {
        const datas = await getrankingPlController(id)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
};
const playlistRankListenService = async (id) => {
    try {
        const datas = await getrankingPllistenController(id)
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