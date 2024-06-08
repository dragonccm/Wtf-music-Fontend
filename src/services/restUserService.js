import { restUser } from '../controller/restUser';

const deleteUser = async (inputdata,role) => {
    try {
        const data = await restUser({ id: inputdata , role: role, status: "delete" })
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};

export {
    deleteUser,
}