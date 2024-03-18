import { songInfo, songUrl, songLyric } from '../controller/firstfetch';
export const getSongData = async (Songid) => {
    if (Songid) {
        try {
            const songDetailResult = await songInfo(Songid)
            const songUrlResult = await songUrl(Songid)
            const songLyricsResult = await songLyric(Songid)

            const artistsNames = songDetailResult.data?.artistsNames || 'Unknown Artist';
            const songname = songDetailResult.data?.title || 'Untitled Song';
            const img = songDetailResult.data?.thumbnailM || 'https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg';
            const song = songUrlResult.data?.[128] || "https://a128-z3.zmdcdn.me/c0ae0b2f3b725d48e5e9c93c5ee8bdda?authen=exp=1710563102~acl=/c0ae0b2f3b725d48e5e9c93c5ee8bdda/*~hmac=34375752b5df23f3197d3cbd167970c1";

            const Ly = songLyricsResult.data.sentences.map(sentence =>
                sentence.words.map(word => {
                    const endTime = parseInt(word.endTime, 10);
                    const startTime = parseInt(word.startTime, 10);
                    const formatTime = milliseconds => {
                        const totalSeconds = Math.floor(milliseconds / 1000);
                        const minutes = Math.floor(totalSeconds / 60);
                        const seconds = totalSeconds % 60;
                        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
                    };
                    const formattedStartTime = formatTime(startTime);
                    const logMessage = `[${formattedStartTime}.${(endTime - startTime / 100)
                        .toString()
                        .substring(0, 2)}]${word.data},`;
                    return logMessage;
                }).join('\n')
            ).join('\n');
            return {
                artistsNames,
                songname,
                img,
                song,
                lyricsString: Ly,
            };

        } catch (error) {
            console.error("Error loading song data:", error);
            return null;
        }
    } else {
        return {
            artistsNames: "Andree Right Hand {bạn đang ngoại tuyến}",
            img: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/e/5/5/1e55187635c4e3bab9b8c2ea88ac35fa.jpg",
            lyricsString: "nône",
            song: "https://a128-z3.zmdcdn.me/c0ae0b2f3b725d48e5e9c93c5ee8bdda?authen=exp=1710563102~acl=/c0ae0b2f3b725d48e5e9c93c5ee8bdda/*~hmac=34375752b5df23f3197d3cbd167970c1",
            songname: "Chơi Như Tụi Mỹ Clai",
        }
    }
};