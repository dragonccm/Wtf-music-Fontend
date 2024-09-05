import { deditgetdataCtrl } from "../controller/editgetdataCtrl";
const deditgetdata = async (id) => {
    try {
        const datas = await deditgetdataCtrl(id);
        return datas;
    } catch (error) {
        console.error("Error loading deditgetdataCtrl data:", error);
        return null;
    }
};

export { deditgetdata };
