import { getrankingPlController  } from '../controller/playlistRank';
const playlistRankService  = async (id) => {
    try {
        const datas = await getrankingPlController(id)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    playlistRankService 
}