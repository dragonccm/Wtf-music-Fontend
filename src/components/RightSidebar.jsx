import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "../css/RightSidebar.css"
const RightSidebar = ()=>{
    return(
        <div>
            <div className="top_bar">
                <a href="/"><FontAwesomeIcon icon={faHouse} />  Home</a>
                <a href="/"><FontAwesomeIcon icon={faMagnifyingGlass} />  Search</a>
            </div>
        </div>
    )
}
export default RightSidebar