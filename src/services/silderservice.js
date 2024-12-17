import { 
    getSlideController,
    setSildeController,
    insertSildeController
} from '../controller/sliderComtroller.js';
const getSlideService = async () => {
    try {
        const datas = await getSlideController()
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

const setSlideService = async (id,data) => {
    try {
        const datas = await  setSildeController(id,data)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 


const insertSildeService = async (data) => {
    try {
        const datas = await insertSildeController(data)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
};

export {
    getSlideService,
    setSlideService,
    insertSildeService
}