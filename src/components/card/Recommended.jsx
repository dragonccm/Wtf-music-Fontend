import { useState } from "react";
import React from "react";
import "../../css/recommend.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import Skeleton from '@mui/material/Skeleton';
import SongCard2 from "./song_card2";
const Recommended = ({ datas, type, describe, maxItemsToShow, rank,size }) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const validDatas = Array.isArray(datas) ? datas : [];
console.log(rank);

  return (
    <>
      {/* lable */}
      {type && <h1 className="Recommended">
        <i className="animation"></i>
        {type}
        <i className="animation"></i>
      </h1>}
      <p className="Recommended_1">{describe}</p>
      {/* lable */}
      <div className="full_list">
        {
          validDatas && validDatas.length > 0
            ?
            validDatas
              .slice(0, showAll ? validDatas.length : maxItemsToShow)
              .map((data, index) => (
                data && rank ?

                  (<SongCard2
                    key={index} // Thêm key ở đây
                    data={data}
                    rating={{
                      israting: true,
                      index: index
                    }}
                    rank={rank.index[index]}
                    onPlaylist={{
                      idPlaylist: rank.playlistId,
                      isPlay: true
                    }}
                    size={size}
                  />)
                  :
                  (<SongCard2
                    key={index} // Thêm key ở đây
                    data={data}
                    rating={{
                      israting: false,
                      index: index
                    }}
                  />)
              )
              )
            :
            <>
              <div>
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="song_card2">
                    <div className="song_img_ctn">
                      <div className="row_order">
                        <Skeleton variant="circular" width={30} height={30} />
                      </div>
                      <div className="song_img">
                        <Skeleton variant="rectangular" width={60} height={60} />
                      </div>
                      <div className="songif">
                        <Skeleton variant="text" width={200} height={20} />
                        <Skeleton variant="text" width={200} height={15} />
                      </div>
                    </div>
                    <div className="root_album">
                      <Skeleton variant="rectangular" width={100} height={15} />
                    </div>
                    <div className="foot_r">
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={50} height={15} />
                    </div>
                  </div>
                ))}
              </div>
            </>
        }
      </div>
      {validDatas.length > maxItemsToShow && !showAll && (
        <div className="list_row list_row_btn ">
          <button className="refresh" onClick={toggleShowAll}>
            Xem tất cả
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      )}
    </>
  );
};
export default Recommended;
