import { songInfo } from "../controller/firstfetch";
export const getSongInfor = async (Songid) => {
  // console.log('okkkkkkkkkkkkkkkkkkkkkkkkkk'+Songid);
  if (Songid) {
    try {

      const songDetailResult = await songInfo(Songid);
      const id = Songid;
      // console.log(id)
      const genres = songDetailResult.data.genres?songDetailResult.data.genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
        alias: genre.alias
      })): ['undefined', 'undefined', 'undefined'];
      const like = songDetailResult.data.like;
      const listen = songDetailResult.data.listen;
      const artistInfo = songDetailResult.data.artists?songDetailResult.data.artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
        alias: artist.alias,
      })):[''];
      const composers = songDetailResult.data.composers? songDetailResult.data.composers.map((composer) => ({
        id: composer.id,
        name: composer.name,
        alias: composer.alias,
      })) :[];
      const alias = songDetailResult.data?.alias || "Unknown Artist";
      const duration = songDetailResult.data?.duration || "Unknown Artist";


      const songname = songDetailResult.data?.title || "Untitled Song";
      const img =
        songDetailResult.data?.thumbnailM ||
        "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg";

     
      return {
        id,
        img,
        songname,
        artistInfo,
        alias,
        listen,
        like,
        duration,
        composers,
        genres
      };
    } catch (error) {
      console.error("Error loading song data:", error);
     
    }
  } else {
    return {
      artistsNames: "Andree Right Hand {bạn đang ngoại tuyến}",
      img: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/e/5/5/1e55187635c4e3bab9b8c2ea88ac35fa.jpg",
      lyricsString: "nône",
      song: "https://a128-z3.zmdcdn.me/c0ae0b2f3b725d48e5e9c93c5ee8bdda?authen=exp=1710563102~acl=/c0ae0b2f3b725d48e5e9c93c5ee8bdda/*~hmac=34375752b5df23f3197d3cbd167970c1",
      songname: "Chơi Như Tụi Mỹ Clai",
    };
  }
};
