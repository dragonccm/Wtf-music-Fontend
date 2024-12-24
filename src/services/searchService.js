import { search } from '../controller/firstfetch';

export const searchFetch = async (searchData) => {
    if (!searchData) {
        return { result: [] };
    }
    try {
        const searchResult = await search(searchData);
        const results = searchResult.map(suggestion => {
            const baseData = {
                id: suggestion.id,
                thumb: suggestion.thumbnail,
                type: suggestion.type
            };
            
            if (suggestion.type === 1) {
                
                return {
                    ...baseData,
                    songname: suggestion.songname,
                    thumbnail: suggestion.thumbnail,
                };
            } else if (suggestion.type === 4) {
                return {
                    ...baseData,
                    aliasName:suggestion.artistsName,
                    name: suggestion.artistsName,
                    avatar: suggestion.avt,
                    alias: suggestion.alias,
                };
            }
            else if (suggestion.type === 3) {
                
                return {
                    ...baseData,
                    playlistId: suggestion.playlistId,
                    name: suggestion.playlistname,
                    thumb: suggestion.thumbnail,
                };
            }
            
            
            return baseData;
        });
        // console.log("SAER SD")

        return { result: results };

    } catch (error) {
        console.error("Error loading search data:", error);
        return null;
    }
};