import { restplaylist } from '../controller/restPlaylist';
const updatePlaylist = async (inputdata) => {
    try {
        const data = await restplaylist({ data: inputdata, status: "update" });
        return data
    } catch (error) {
        console.error("Error loading Playlist data:", error);
        return null;
    }
};
const deletePlaylist = async (inputdata) => {
    try {
        const data = await restplaylist({ data: inputdata, status: "delete" })
        return data
    } catch (error) {
        console.error("Error loading Playlist data:", error);
        return null;
    }
};
const createPlaylist = async (inputdata) => {

    try {
        const data = await restplaylist({ data: inputdata, status: "create" })
        return data
    } catch (error) {
        console.error("Error loading Playlist data:", error);
        return null;
    }
};

export {
    updatePlaylist,
    deletePlaylist,
    createPlaylist
}