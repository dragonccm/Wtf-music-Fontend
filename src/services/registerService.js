import { registerUser,loginUser } from '../controller/Authentication';
const getRegister = async (email, password, username) => {
    try {
         const data = await registerUser(email, password, username)
        return data
    } catch (error) {
        console.error("Error register:", error);
        return null;
    }
}; 
const getLogin = async (valueLogin, password) => {
    try {
         const data = await loginUser(valueLogin, password)
        return data
    } catch (error) {
        console.log("Error login:", error);
        return null;
    }
}; 

export {
    getRegister,
    getLogin
}