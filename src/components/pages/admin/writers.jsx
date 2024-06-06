import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { LineChart } from '@mui/x-charts/LineChart';
import { songRankService } from "../../../services/songRankService";
import { playlistRankService } from "../../../services/palylistRankService";
import { adminSearchS } from "../../../services/adminSearchSongService";
import "../../../css/admin/musicAdmin.scss";
export default function WriterAdmin() {
    const [data, setData] = useState([]);
    const [years, setYears] = useState([]);
    const [UKGDPperCapita, setUKGDPperCapita] = useState([]);
    const [tilte, settilte] = useState("")
    const [id,setid] = useState("all");
    const [searchdata, setsearchdata] = useState([]);
    const [isInteractingWithResults, setIsInteractingWithResults] = useState(false);
    useEffect(() => {
        const fetchRankSongs = async () => {
            try {
                const response = await songRankService(id);
                setData(response.DT.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchRankSongs();

        // const fetchRankplaylists = async () => {
        //     try {
        //         const response = await playlistRankService("6C00I0C0");
        //         console.log(response.DT.data);
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // };
        // fetchRankplaylists();
    }, [id]);
    useEffect(() => {
        if (id === "all") {
            settilte("Thống kê lượt thích Tất Cả Bài Hát trong 1 tháng")
            const formattedYears = data.map((day) => {
                const f = new Date(day.date);
                const year = parseInt(f.getFullYear());
                const month = parseInt(f.getMonth()) + 1;
                const date = parseInt(f.getDate());
                console.log(f.getFullYear(), f.getMonth(), f.getDate());
                return new Date(year, month, date);
            });
            formattedYears.sort((a, b) => a - b);
            setYears(formattedYears);
            const UKGDPperCapitadata = data.map((data) => data.likeCount);
            setUKGDPperCapita(UKGDPperCapitadata);
        } else {
            settilte("Thống kê lượt thích 7 ngày gần nhất")
            if (Array.isArray(data)) {
                const formattedYears = data.map((day) => {
                    const f = new Date(day.rankingDate);
                    return new Date(f.getFullYear(), f.getMonth(), f.getDate());
                });
                formattedYears.sort((a, b) => a - b);
                setYears(formattedYears);

                const UKGDPperCapitadata = data.map((data) => data.likeCount);
                setUKGDPperCapita(UKGDPperCapitadata);
            }
        }
    }, [data]);

    const handleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            const format = ser.DT.songs.map((data) => {
                return ({ id: data.id, songname: data.songname })
            })
            setsearchdata(format);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const lineChartsParams = {
        series: [
            {
                label: 'Song',
                data: UKGDPperCapita,
                showMark: false,
            },
        ],
        width: 1100,
        height: 500,
    };

    const yearFormatter = (date) => `${date.getDate().toString()}/${date.getMonth().toString()}`;
    const handleSearchResultClick = async (id) => {
        setIsInteractingWithResults(false);
        try {
            const response = await songRankService(id);
            setData(response.DT.data);
            setid(id);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleclear = () => {
        if (!isInteractingWithResults) {
            setsearchdata([]);
        }
    };
    const handleResultMouseEnter = () => {
        setIsInteractingWithResults(true);
    };

    const handleResultMouseLeave = () => {
        setIsInteractingWithResults(false);
    };
    return (
        <>
            <h1>{tilte}</h1>
            <nav class="navbar navbar-light bg-light">
                <div class="search_ctn">
                    <input class="mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleserch} onBlur={handleclear} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </div>
                {searchdata.length > 0 &&
                    <div class="search_result" onMouseEnter={handleResultMouseEnter} onMouseLeave={handleResultMouseLeave}>
                        <button className='list-group-item search_result_item' value="all" onClick={() => handleSearchResultClick("all")}>thống kê tất cả</button>
                        {searchdata.map((data) => (
                            <button className='list-group-item search_result_item' value={data.id} onClick={() => handleSearchResultClick(data.id)}>{data.songname}</button>
                        ))}
                    </div>
                }
            </nav>
            {!Array.isArray(data) || data.length < 1 ? (<h2 className='undefine'>chưa có dữ liệu trong 7 ngày gần nhất</h2>) :
                (
                    <LineChart
                        {...lineChartsParams}
                        xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormatter }]}
                        series={lineChartsParams.series.map((series) => ({
                            ...series,
                            data: UKGDPperCapita,
                        }))}
                    />
                )}
        </>
    );
}
