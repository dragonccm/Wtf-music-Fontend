import { playlistroute } from "../controller/playlist";
import { clonePlayListData } from "../controller/playlistclone";

const getPlaylist = async (id) => {
  try {
    const data = await playlistroute(id);
    console.log(data);
    if (data) {
      // const clone = {
      //   playlistId: data.data.DT.playlist.playlistId,
      //   playlistname: data.data.DT.playlist.playlistname,
      //   genresid: data.data.DT.playlist.genres.map((genres) => genres.id),
      //   artistsId: data.data.DT.playlist.artists.map((artists) => artists.id),
      //   type: "playlist",
      //   thumbnail: data.data.DT.playlist.thumbnailM,
      //   description: data.data.DT.playlist.description ? data.data.DT.playlist.description:'Playlist hay đi vào lòng người!',
      //   songid: data.data.DT.playlist.song.items.map((song) => song.encodeId),
      //   like: data.data.DT.playlist.like,
      //   listen: data.data.DT.playlist.listen,
      // };
      // await clonePlayListData(clone);
    }
    return data;
  } catch (error) {
    console.error("Error loading song data:", error);
    return null;
  }
};

export { getPlaylist };
