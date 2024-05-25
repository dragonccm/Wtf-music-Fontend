import { restgenres } from '../controller/restGenre';
const updateGenre = async (inputdata) => {
    try {
        const data = await restgenres({ data: inputdata, status: "update" });
        return data
    } catch (error) {
        console.error("Error loading Genre data:", error);
        return null;
    }
};
const deleteGenre = async (inputdata) => {
    try {
        const data = await restgenres({ data: inputdata, status: "delete" })
        return data
    } catch (error) {
        console.error("Error loading Genre data:", error);
        return null;
    }
};
const createGenre = async (inputdata) => {

    try {
        const data = await restgenres({ data: inputdata, status: "create" })
        return data
    } catch (error) {
        console.error("Error loading Genre data:", error);
        return null;
    }
};

export {
    updateGenre,
    deleteGenre,
    createGenre
}