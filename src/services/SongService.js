import { songInfo, songUrl, songLyric } from '../controller/firstfetch';
export const getSongData = async (Songid) => {
    if (Songid) {
        try {
            if (Songid) {
                const songDetailResult = await songInfo(Songid)
                const songUrlResult = await songUrl(Songid)
                const songLyricsResult = await songLyric(Songid)

                const artistsNames = songDetailResult.data.artistsNames;
                const songname = songDetailResult.data.title;
                const img = songDetailResult.data.thumbnail;
                const song = songUrlResult.data[128];

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
            } else {
                return {
                    artistsNames: "N/A",
                    songname: "N/A",
                    img: "N/A",
                    song: "N/A",
                    lyricsString: null,
                }
            }
        } catch (error) {
            console.error("Error loading song data:", error);
            return null;
        }
    }
};