import React from "react";
import Card from "./song_card";
import "../../css/list_card.scss";
const ListCard = ({ data }) => {
    console.log(JSON.stringify(data));
    return (
        <>
            {data.map((element) => (
                <div className="element" key={element.title}>
                    <div className="element_head">
                        <h1>{element.title}</h1>
                        <a className="show_all">Tất cả</a>
                    </div>

                    <div className="card_container">
                        {element.list.map((playlist) => (
                            <Card playlist={playlist} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
export default ListCard;