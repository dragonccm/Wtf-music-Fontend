import { adSongToPlaylist } from "../controller/adSongToPlaylist"
const adSongToPlaylistService = async (data) => {
    try {
        const datas = await adSongToPlaylist(data)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    adSongToPlaylistService
}