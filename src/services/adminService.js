import { adminHome } from '../controller/adminHome';
const adminService = async (id) => {
    try {
        const datas = await adminHome(id)
        return datas
    } catch (error) {
        console.error("Error loading adminHome data:", error);
        return null;
    }
}; 

export {
    adminService
}