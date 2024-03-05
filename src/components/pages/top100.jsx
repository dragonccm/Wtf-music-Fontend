import React from "react";
import Card from "../card/song_card";
import "../../css/top100.scss";

const Top100 = ({ data }) => {
    return (
        <div className="top100_main">
            <div className="main_banner">
                <h1>cái banner gì đó</h1>
            </div>
            <div className="list_card">
                <h1>Có thể bạn muốn nghe</h1>
                <Card playlist={data} />
            </div>
            <div className="list_card">
                <h1>Có thể bạn muốn nghe</h1>
                <Card playlist={data} />
            </div>
            <div className="list_card">
                <h1>Có thể bạn muốn nghe</h1>
                <Card playlist={data} />
            </div>
            <div className="list_card">
                <h1>Có thể bạn muốn nghe</h1>
                <Card playlist={data} />
            </div>
        </div>
    );
}

export default Top100;