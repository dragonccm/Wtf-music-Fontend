import { adminGetUser } from '../controller/adminGetUser';
const adminGetUsers = async (inputdata) => {
    try {
        const data = await adminGetUser(inputdata)
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    adminGetUsers
}