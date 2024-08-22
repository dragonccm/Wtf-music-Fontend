import {
    adminSong,
    searchGenre,
    searchPlaylist,
    searchUser,
    searchArtists,
} from '../controller/searchService/adminSearchSongRouter';
const adminSearchS = async (inputdata) => {
    try {
        const data = await adminSong(inputdata);
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};

const adminSearchGenreService = async (inputdata) => {
    try {
        const data = await searchGenre(inputdata);
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};
const adminSearchPlaylistService = async (inputdata) => {
    try {
        const data = await searchPlaylist(inputdata);
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};
const adminSearchUserService = async (inputdata) => {
    try {
        const data = await searchUser(inputdata);
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};
const adminSearchArtistsService = async (inputdata) => {
    try {
        const data = await searchArtists(inputdata);
        return data
    } catch (error) {
        console.error("Error loading song data:", error);
        return null;
    }
};

export {
    adminSearchS,
    adminSearchArtistsService,
    adminSearchPlaylistService,
    adminSearchGenreService,
    adminSearchUserService,
}