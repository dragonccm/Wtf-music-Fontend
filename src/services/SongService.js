import { songInfo, songUrl, songLyric } from "../controller/firstfetch";
import { cloneSongsService } from "../services/songCloneService";
export const getSongData = async (Songid) => {
  // console.log('okkkkkkkkkkkkkkkkkkkkkkkkkk'+Songid);
  if (Songid) {
    try {

      const songDetailResult = await songInfo(Songid);
      const songUrlResult = await songUrl(Songid);
      const songLyricsResult = await songLyric(Songid);
      const id = Songid;
      // console.log(id)
      if (songDetailResult.err === 0) {
        const genres = songDetailResult.data.genres ? songDetailResult.data.genres.map((genre) => ({
          id: genre.id,
          name: genre.name,
          alias: genre.alias
        })) : ['undefined', 'undefined', 'undefined'];
        const like = songDetailResult.data.like;
        const listen = songDetailResult.data.listen;
        const artistInfo = songDetailResult.data.artists ? songDetailResult.data.artists.map((artist) => ({
          id: artist.id,
          name: artist.name,
          alias: artist.alias,
        })) : [''];
        const composers = songDetailResult.data.composers ? songDetailResult.data.composers.map((composer) => ({
          id: composer.id,
          name: composer.name,
          alias: composer.alias,
        })) : [];
        const alias = songDetailResult.data?.alias || "Unknown Artist";
        const duration = songDetailResult.data?.duration || "Unknown Artist";


        const songname = songDetailResult.data?.title || "Untitled Song";
        const img =
          songDetailResult.data?.thumbnailM ||
          "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg";

        const song =
          songUrlResult.data?.[128] ||
          "https://a128-z3.zmdcdn.me/c2e3abd902697240cf99ffb93e9e38f3?authen=exp=1712376116~acl=/c2e3abd902697240cf99ffb93e9e38f3/*~hmac=d9866bb2a2216c3ce17a63244b18dde1";
        const Ly = songLyricsResult.data.sentences;
        const jj = await cloneSongsService(
          {
            id: id,
            thumbnail: img,
            songname: songname,
            artistInfo: artistInfo,
            alias: alias,
            song: song,
            listen: listen,
            like: like,
            duration: duration,
            lyricsString: Ly,
            composers: composers,
            genres: [
              "IWZ9Z097",
              "IWZ9Z09F"
            ],
          })
        console.log(jj)
        return {
          id,
          img,
          songname,
          artistInfo,
          alias,
          song,
          listen,
          like,
          duration,
          lyricsString: Ly,
          composers,
          genres
        };
      } else {
        // const jj = await cloneSongsService(
        //   {
        //     id: id,
        //     img: img,
        //     songname: songname,
        //     artistInfo: artistInfo,
        //     alias: alias,
        //     song: song,
        //     listen: listen,
        //     like: like,
        //     duration: duration,
        //     lyricsString: Ly,
        //     composers: composers,
        //     genres: [
        //       "IWZ9Z097",
        //       "IWZ9Z09F"
        //     ],
        //   })
        // console.log(jj)
        return {
          id: '1',
          img: '1',
          songname: '1',
          artistInfo: '1',
          alias: '1',
          song: '1',
          listen: '1',
          like: '1',
          duration: '1',
          lyricsString: '1',
          composers: '1',
          genres: '1'[
            "IWZ9Z097",
            "IWZ9Z09F"
          ],

        }
      }
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
