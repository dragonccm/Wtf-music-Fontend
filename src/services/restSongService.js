import { restsongs } from '../controller/restSongs';
const updateSong = async (inputdata) => {

    try {
        const data = await restsongs({ data: inputdata, status: "update" });
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};
const deleteSong = async (inputdata) => {
    try {
        const data = await restsongs({ data: inputdata, status: "delete" })
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};
const createSong = async (inputdata) => {
    try {
        const data = await restsongs({ data: inputdata, status: "create" })
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};

export {
    updateSong,
    deleteSong,
    createSong
}