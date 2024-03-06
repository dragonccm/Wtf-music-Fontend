import React from "react";
import Card from "../card/song_card";
import "../../css/top100.scss";

const Top100 = ({ data }) => {
    return (
        <div className="top100_main">
            <div className="main_banner">
                <h1>TOP 100</h1>
            </div>
            <h1 className="catego_title">Nhạc việt</h1>
            <div className="list_card">
                <Card playlist={data} />
            </div>
            <h1 className="catego_title">US-UK</h1>
            <div className="list_card">
                <Card playlist={data} />
                <Card playlist={data} />
            </div>
            <h1 className="catego_title">KPOP</h1>
            <div className="list_card">
                <Card playlist={data} />
            </div>
            <h1 className="catego_title">phonk</h1>
            <div className="list_card">
                <Card playlist={data} />
            </div>
        </div>
    );
}

export default Top100;