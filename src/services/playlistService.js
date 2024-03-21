import { playlistroute } from '../controller/playlist';
import {clonePlayListData} from '../controller/playlistclone'

const getPlaylist = async (id) => {
    try {
        const data = await playlistroute(id)
        const clone = {
            id:data.data.encodeId ,
            playlistname:data.data.title ,
            genresid:data.data.genres.map(genres => genres.id),
            artistsId:data.data.artists.map(artists => artists.id),
            thumbnail:data.data.thumbnailM ,
            desciption:data.data.description ,
            songid:data.data.song.items.map(song => song.encodeId),
            like:data.data.like ,
            listen:data.data.listen ,
        }
        await clonePlayListData(clone)
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
}; 

export {
    getPlaylist
}