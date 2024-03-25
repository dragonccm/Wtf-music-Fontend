import { adminHome } from '../controller/adminHome';
const adminService = async () => {
    try {
        const datas = await adminHome()
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    adminService
}