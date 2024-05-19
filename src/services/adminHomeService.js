import { adminHome } from '../controller/adminHome';
const adminHomeService = async () => {
    try {
         const data = await adminHome()
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    adminHomeService
}