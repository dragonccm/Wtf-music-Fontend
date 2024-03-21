import { playlistroute } from '../controller/playlist';
const getPlaylist = async (id) => {
    try {
        const data = await playlistroute(id)
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    getPlaylist
}