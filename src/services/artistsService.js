import { artist  } from '../controller/artist';
const getArtist  = async (id) => {
    try {
        const datas = await artist(id)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    getArtist 
}