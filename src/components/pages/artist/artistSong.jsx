import { useState, useEffect } from "react";
import Recommended from "../../card/Recommended"
import '../../../css/Singerpage.scss'

import { artistSong } from "../../../controller/artist";
import { useParams } from 'react-router-dom';
const ArtistSong = () => {
    let { id } = useParams();
    const [song, setSong] = useState({})
    useEffect(() => {

        const fetchSong = async () => {
            let data = await artistSong(id)
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
        <h1>{id} - Tất cả bài hát</h1>
       
        <Recommended
            datas= {song}
            describe={""}
                maxItemsToShow="100"
                isPlaylist={false}
            
        />
    </div>
    );
};
export default ArtistSong;