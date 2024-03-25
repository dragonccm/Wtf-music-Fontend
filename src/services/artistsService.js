import { artist  } from '../controller/artist';
const getArtist  = async () => {
    try {
        const datas = await artist()
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    getArtist 
}