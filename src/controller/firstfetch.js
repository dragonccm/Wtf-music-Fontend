// controller/SongController.js

export const getSongData = async () => {
    const urls = [
        "http://localhost:6969/api/songdetail",
        "http://localhost:6969/api/songurl",
        "http://localhost:6969/api/songly",
    ];

    const options = {
        method: "GET",
    };

    try {
        const responses = await Promise.all(urls.map(url => fetch(url, options)));
        const results = await Promise.all(responses.map(res => res.json()));

        const songDetailResult = results[0];
        const songUrlResult = results[1];
        const songLyricsResult = results[2];

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
        console.log(Ly)
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
};