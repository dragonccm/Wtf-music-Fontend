import { adminPlaylist } from '../controller/adminPlaylist';
const adminGetPlaylist = async (page) => {
    try {
        const data = await adminPlaylist(page)
        return data
    } catch (error) {
        console.error("Error loading Playlist data:", error);
        return null;
    }
}; 

export {
    adminGetPlaylist
}