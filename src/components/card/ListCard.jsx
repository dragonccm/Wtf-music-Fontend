import React from "react";
import Card from "./playlist_card";
import "../../css/list_card.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ListCard = ({ data }) => {

    return (
        <>
            {data.map((element) => (
                <div className="element" key={element.title}>
                    <div className="element_head">
                        <h1>{element.title}</h1>
                        <a href="show" className="show_all">Tất cả<FontAwesomeIcon className="icon" icon={faChevronRight} /></a>
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



