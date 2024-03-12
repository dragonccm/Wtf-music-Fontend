import { search } from '../controller/firstfetch';

export const searchFetch = async (searchData) => {
    if (!searchData) {
        return { result: [] };
    }
    try {
        const searchResult = await search(searchData);
        const results = searchResult.data.items[1].suggestions.map(suggestion => {
            const baseData = {
                id: suggestion.id,
                thumb: suggestion.thumb,
                type: suggestion.type
            };
            
            if (suggestion.type === 1) {
            
                return {
                    ...baseData,
                    name: suggestion.title,
                    thumb: suggestion.thumb,
                    artists: suggestion.artists ? suggestion.artists.map(artist => artist.name).join(', ') : 'Không xác định',
                };
            } else if (suggestion.type === 4) {
            
                return {
                    ...baseData,
                    name: suggestion.name,
                    avatar: suggestion.avatar,
                    followers: suggestion.followers
                
                };
            }
            
        
            return baseData;
        });
        
        return { result: results };
        
    } catch (error) {
        console.error("Error loading search data:", error);
        return null;
    }
};