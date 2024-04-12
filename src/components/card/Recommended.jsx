import { useState } from "react";
import React from "react";
import "../../css/recommend.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faHeart } from "@fortawesome/free-solid-svg-icons";

import SongCard2 from "./song_card2";
const Recommended = ({ datas, type, describe, maxItemsToShow, israting }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    const validDatas = Array.isArray(datas) ? datas : [];
    console.log("dụ má có", datas);

    return (
        <>
            {/* lable */}
            <h1 className="Recommended">
                <i className="animation"></i>
                {type}
                <i className="animation"></i>
            </h1>
            <p className="Recommended_1">{describe}</p>
            {/* lable */}
            <div className="full_list">
                {validDatas
                    .slice(0, showAll ? validDatas.length : maxItemsToShow)
                    .map((data, index) =>
                        israting === true ? (
                            <SongCard2
                                data={data}
                                rating={{
                                    israting: true,
                                    index: index,
                                }}
                            />
                        ) : (
                            <SongCard2
                                data={data}
                                rating={{
                                    israting: true,
                                    index: index,
                                }}
                            />
                        )
                    )}
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
