import { artist  } from '../controller/artist';
import {cloneArtistsData} from '../controller/atistsClone';
const getArtist  = async (id) => {
    try {
        const datas = await artist(id)
        let birthday = new Date(datas.data.birthday.split("/").reverse().join("-"));
        const artistClone = {
            id:datas.data.id,
            artistsName:datas.data.name,
            alias:datas.data.alias,
            biography:datas.data.biography,
            avt:datas.data.thumbnailM,
            birthday:birthday,
            realName:datas.data.realname,
            totalFollow:datas.data.totalFollow,
            songListId:datas.data.sections[0].items.map((data)=>[data.encodeId]),
            playListId:datas.data.sections[1].items.map((data)=>[data.encodeId]),
        }
        await cloneArtistsData(artistClone)
        return datas
    } catch (error) {
        console.error("Error loading top100 data:", error);
        return null;
    }
}; 

export {
    getArtist 
}