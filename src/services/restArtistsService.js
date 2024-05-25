import { restArtists } from '../controller/restArtists';
const updateArtists = async (inputdata) => {
    try {
        const data = await restArtists({ data: inputdata, status: "update" });
        return data
    } catch (error) {
        console.error("Error loading Artists data:", error);
        return null;
    }
};
const deleteArtists = async (inputdata) => {
    try {
        const data = await restArtists({ data: inputdata, status: "delete" })
        return data
    } catch (error) {
        console.error("Error loading Artists data:", error);
        return null;
    }
};
const createArtists = async (inputdata) => {

    try {
        const data = await restArtists({ data: inputdata, status: "create" })
        return data
    } catch (error) {
        console.error("Error loading Artists data:", error);
        return null;
    }
};

export {
    updateArtists,
    deleteArtists,
    createArtists
}