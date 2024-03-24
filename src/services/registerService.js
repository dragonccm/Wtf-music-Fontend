import { registerUser } from '../controller/register';
const getRegister = async (email, password, username) => {
    try {
         const data = await registerUser(email, password, username)
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    getRegister
}