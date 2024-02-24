import React from "react";
import Card from "./song_card";
const ListCard = ({ data }) => {
    console.log(JSON.stringify(data));
    return (
        <>
            {data.map((element) => (
                <div className="element" key={element.title}>
                    <div className="element_head">
                        <h1>{element.title}</h1>
                        <button className="show_all">Hiện tất cả</button>
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