import SongCard2 from "../../card/song_card2";
import { useState, useEffect } from "react";
import '../../../css/profileMyMusic.scss'
import Loading from "../../sideNavigation/mascot_animation";
import { setUserBlocked } from '../../../redux/slide/InforUserSlice'
import { useSelector, useDispatch } from "react-redux";
import { getBlockList } from "../../../controller/MyPlaylist";
const BlockedSong = ({ type }) => {
    const dispatch = useDispatch();
    const userBlocked = useSelector((state) => {
        return state.inforUser.userBlocked;
    });
    useEffect(() => {
        console.log('kaka');

        const fetchHis = async () => {
            console.log('lolo');
            const response = await getBlockList();
            if (response.EC === '0') {
                dispatch(setUserBlocked(response.DT));
            }
        }
        fetchHis()
    }, [dispatch]);


    if (!Array.isArray(userBlocked)) {
        return <><Loading /></>
    }

   





    return (
        <div className="like_song history">

            {userBlocked.length > 0 ?
                userBlocked.map((data,index) =>
                (
                    <SongCard2
                        key={index} // Thêm key ở đây
                        data={data}
                        rating={{
                            israting: false,
                            index: index
                        }}
                        block={true}
                    />
                )
                )

                :
                <h3>Danh sách trống</h3>}


        </div>

    )
}
export default BlockedSong