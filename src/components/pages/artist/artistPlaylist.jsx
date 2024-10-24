import { useState, useEffect } from "react";
import Card from "../../card/playlist_card"
import '../../../css/Singerpage.scss'

import { artistPlaylist } from "../../../controller/artist";
import { useParams } from 'react-router-dom';
const ArtistPlaylist = () => {
    let { id } = useParams();
    const [song, setSong] = useState({})
    useEffect(() => {

        const fetchSong = async () => {
            let data = await artistPlaylist(id)
            console.log(data);
            
            if (data && data.EC === "0") {
                setSong(data.DT)
    
            } else {
            console.log('No Playlists')
                
            }
        }
      fetchSong()
    
       
    }, []);
    
    return (
        <div className="artist-more">
        <h1>{id} - Tất cả Single, Ep & Album</h1>
       
        {song && song.length>0 && <Card playlist={song} limit = {100} />}

    </div>
    );
};
export default ArtistPlaylist;