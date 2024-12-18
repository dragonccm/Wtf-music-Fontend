import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChartElement from "../../card/chartElement";
import {
    songRankService,
    songRankListenService,
    songRankPLService,
    songRankPLListenService,
} from "../../../services/songRankService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faCircleUser, faMusic, faList } from "@fortawesome/free-solid-svg-icons";
import { getbanService } from "../../../services/getbanService";
import { adminSearchS, adminSearchPlaylistService } from "../../../services/adminSearchSongService";
import Loading from "../../sideNavigation/mascot_animation";
import { fetchAdminHome } from "../../../redux/slide/adminHomeSlice";
import "../../../css/admin/musicAdmin.scss";

export default function Chart() {
    const [data, setData] = useState([]);
    const [playlistData, setPlaylistData] = useState([]);
    const [listenData, setListenData] = useState([]);
    const [playlistListenData, setPlaylistListenData] = useState([]);
    const [years, setYears] = useState([]);
    const [UKGDPperCapita, setUKGDPperCapita] = useState([]);
    const [UKGDPperCapitaListen, setUKGDPperCapitaListen] = useState([]);
    const [tilte, settilte] = useState("Thống kê lượt thích tất cả Bài hát trong 1 tháng");
    const [id, setid] = useState("all");
    const [searchdata, setsearchdata] = useState([]);
    const [isInteractingWithResults, setIsInteractingWithResults] = useState(false);
    const [startDate, setStartDate] = useState("12-5-2024");
    const [range, setRange] = useState("30");
    const [dataType, setDataType] = useState("song");
    const currData = useSelector((state) => state.admin.AdminHome.DT);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedName, setSelectedName] = useState("");

    useEffect(() => {
        dispatch(fetchAdminHome())
            .then(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [dispatch]);

    const fetchRankSongs = async () => {
        try {
            const response = await songRankService(id, range, startDate);
            setData(response.DT.data);
            console.log(response.DT.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchRankSongsListen = async () => {
        try {
            const response = await songRankListenService(id, range, startDate);
            setListenData(response.DT.data);
            console.log(response.DT.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchRankPlaylist = async () => {
        try {
            const response = await songRankPLService({ id, days: range, startDate });
            setPlaylistData(response.DT);
            console.log(response.DT);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchRankPlaylistListen = async () => {
        try {
            const response = await songRankPLListenService({ id, days: range, startDate });
            setPlaylistListenData(response.DT);
            console.log(response.DT);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        if (dataType === "song") {
            fetchRankSongs();
            fetchRankSongsListen();
        } else {
            fetchRankPlaylist();
            fetchRankPlaylistListen();
        }

        const fetchban = async () => {
            try {
                const response = await getbanService();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchban();
    }, [id, range, startDate, dataType]);

    useEffect(() => {
        const currentData = dataType === "song" ? data : playlistData;
        const currentListenData = dataType === "song" ? listenData : playlistListenData;
        if (id === "all") {
            settilte(`Thống kê lượt thích tất cả ${dataType === "song" ? "Bài hát" : "Playlist"} trong 1 tháng`);
            const formattedYears = currentData.map((day) => {
                const f = new Date(day.date);
                const year = parseInt(f.getFullYear());
                const month = parseInt(f.getMonth()) + 1;
                const date = parseInt(f.getDate());
                return new Date(year, month, date);
            });
            formattedYears.sort((a, b) => a - b);
            setYears(formattedYears);
            const UKGDPperCapitadata = currentData.map((data) => data.likeCount);
            setUKGDPperCapita(UKGDPperCapitadata);
            if (Array.isArray(currentListenData)) {
                const UKGDPperCapitaListenData = currentListenData.map((data) => data.listenCount);
                setUKGDPperCapitaListen(UKGDPperCapitaListenData);
            }
        } else {
            settilte(`Thống kê lượt thích 7 ngày gần nhất`);
            if (Array.isArray(currentData)) {
                const formattedYears = currentData.map((day) => {
                    const f = new Date(day.rankingDate);
                    return new Date(f.getFullYear(), f.getMonth(), f.getDate());
                });
                formattedYears.sort((a, b) => a - b);
                setYears(formattedYears);
                const UKGDPperCapitadata = currentData.map((data) => data.likeCount);
                setUKGDPperCapita(UKGDPperCapitadata);
                if (Array.isArray(currentListenData)) {
                    const UKGDPperCapitaListenData = currentListenData.map((data) => data.listenCount);
                    setUKGDPperCapitaListen(UKGDPperCapitaListenData);
                }
            }
        }
    }, [data, playlistData, listenData, playlistListenData, dataType]);

    useEffect(() => {
        if (dataType === "song") {
            fetchRankSongs();
            fetchRankSongsListen();
        } else {
            fetchRankPlaylist();
            fetchRankPlaylistListen();
        }
    }, [dataType]);

    const handleserch = async (e) => {
        try {
            let ser;
            if (dataType === "song") {
                ser = await adminSearchS(e.target.value);
                const format = ser.DT.data.songs.map((data) => {
                    return { id: data.id, songname: data.songname };
                });
                setsearchdata(format);
            } else {
                ser = await adminSearchPlaylistService(e.target.value);
                const format = ser.DT.data.Playlist.map((data) => {
                    return { id: data.playlistId, playlistname: data.playlistname };
                });
                setsearchdata(format);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSearchResultClick = async (id, name) => {
        setIsInteractingWithResults(false);
        try {
            if (dataType === "song") {
                const response = await songRankService(id, range, startDate);
                setData(response.DT.data);
                const listenResponse = await songRankListenService(id, range, startDate);
                setListenData(listenResponse.DT.data);
            } else {
                const response = await songRankPLService(id);
                setPlaylistData(response.DT.data);
                const listenResponse = await songRankPLListenService(id);
                setPlaylistListenData(listenResponse.DT.data);
            }
            setid(id);
            setSelectedName(name);
            setsearchdata([]); // Clear search results after selection
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

    const yearFormatter = (date) => `${date.getDate().toString()}/${date.getMonth().toString()}`;
    const lineChartsParams = {
        series: [
            {
                id: 'like',
                label: 'like',
                data: UKGDPperCapita,
                stack: 'A',
            },
            {
                id: 'listen',
                label: 'listen',
                data: UKGDPperCapitaListen,
                stack: 'A',
            },
        ],
        width: 1100,
        height: 400,
    };

    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split("-");
        return new Date(year, month - 1, day);
    };

    const endDate = new Date(formatDate(startDate));
    endDate.setDate(endDate.getDate() + parseInt(range));

    const formattedStartDate = `${formatDate(startDate).getDate()}-${formatDate(startDate).getMonth() + 1}-${formatDate(startDate).getFullYear()}`;
    const formattedEndDate = `${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}`;

    if (isLoading || data.length < 0) {
        return <div><Loading /></div>;
    }

    return (
        <>
            <h1>{tilte}</h1>
            <nav className="d-flex flex-column flex-md-row align-items-md-center ranking_select mb-3">
                <div className="d-flex flex-column flex-md-row align-items-md-center mb-3 mb-md-0">
                    <div className="d-flex flex-column flex-md-row align-items-md-center">
                        <input
                            type="text"
                            className="form-control me-md-2 mb-2 mb-md-0"
                            placeholder="Start Date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control me-md-2 mb-2 mb-md-0"
                            placeholder="Range"
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={() => setDataType(dataType === "song" ? "playlist" : "song")}>
                            {dataType === "song" ? "Chuyển sang Playlist" : "Chuyển sang Bài hát"}
                        </button>
                    </div>
                </div>
                <div className="navbar">
                    <div className="search_ctn">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleserch}
                            onBlur={handleclear}
                            onFocus={() => setIsInteractingWithResults(true)}
                        />
                        <button className="btn btn-outline-success" type="button">
                            Tìm Kiếm
                        </button>
                    </div>
                    {searchdata.length > 0 && isInteractingWithResults && (
                        <div
                            className="search_result"
                            onMouseEnter={handleResultMouseEnter}
                            onMouseLeave={handleResultMouseLeave}
                        >
                            <button
                                className="list-group-item search_result_item"
                                value="all"
                                onClick={() => handleSearchResultClick("all")}
                            >
                                thống kê tất cả
                            </button>
                            {searchdata.map((data) => (
                                <button
                                    className="list-group-item search_result_item"
                                    value={data.id}
                                    onClick={() => handleSearchResultClick(data.id, dataType === "song" ? data.songname : data.playlistname)}
                                >
                                    {dataType === "song" ? data.songname : data.playlistname}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
            {!Array.isArray(data) || data.length < 1 ? (
                <h2 className="undefine">chưa có dữ liệu trong 30 ngày gần nhất</h2>
            ) : (
                <>
                    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
                        <div className="HomeAdmin">
                            <section className="row">
                                <div className="col">
                                    <div className="card card-box text-center ">
                                        <div className="card-body bg-artist">
                                            <div className="admin-circle-box rounded-pill">
                                                <FontAwesomeIcon
                                                    icon={faMicrophone}
                                                    className="icon-artist"
                                                />
                                            </div>

                                            <h4 className="text-capitalize mt-4 mb-1">{currData.ar}</h4>
                                            <p className="mb-0 text-capitalize text-body">
                                                Tổng Số Nghệ Sĩ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-box text-center">
                                        <div className="card-body bg-songs">
                                            <div className="admin-circle-box rounded-pill">
                                                <FontAwesomeIcon
                                                    icon={faMusic}
                                                    className="icon-songs"
                                                />
                                            </div>

                                            <h4 className="text-capitalize mt-4 mb-1">{currData.songs}</h4>
                                            <p className="mb-0 text-capitalize text-body">
                                                Tổng Số Bài Hát
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-box text-center">
                                        <div className="card-body bg-playlist">
                                            <div className="admin-circle-box rounded-pill">
                                                <FontAwesomeIcon
                                                    icon={faList}
                                                    className="icon-playlist"
                                                />
                                            </div>

                                            <h4 className="text-capitalize mt-4 mb-1">{currData.Playlist}</h4>
                                            <p className="mb-0 text-capitalize text-body">
                                                Tổng Số Playlist
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-box text-center">
                                        <div className="card-body bg-users">
                                            <div className="admin-circle-box rounded-pill">
                                                <FontAwesomeIcon
                                                    icon={faCircleUser}
                                                    className="icon-users"
                                                />
                                            </div>
                                            <h4 className="text-capitalize mt-4 mb-1">{currData.User}</h4>

                                            <p className="mb-0 text-capitalize text-body">
                                                Tổng Số Người Dùng
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                            Overview
                        </Typography>
                        <h1>
                            {dataType === "song"
                                ? selectedName ? `Dữ Liệu Thống Kê Của Bài Hát: ${selectedName}` : "Dữ Liệu Thống Kê Của Nhạc"
                                : selectedName ? `Dữ Liệu Thống Kê Của Playlist: ${selectedName}` : "Dữ Liệu Thống Kê Của PlayList"}
                            <br />
                            {`(Từ ngày ${formattedStartDate} đến ngày ${formattedEndDate})`}
                        </h1>
                        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <ChartElement
                                xAxis={[
                                    {
                                        data: years,
                                    },
                                ]}
                                series={[
                                    {
                                        id: 'like',
                                        label: dataType === "song" ? "Song Likes" : "Playlist Likes",
                                        data: UKGDPperCapita,
                                        stack: 'A',
                                        area: true,
                                    },
                                ]}
                                total={300}
                            />
                            <ChartElement
                                xAxis={[
                                    {
                                        data: years,
                                        scaleType: "time",
                                        valueFormatter: yearFormatter,
                                    },
                                ]}
                                series={[
                                    {
                                        id: 'listen',
                                        label: dataType === "song" ? "Song Listens" : "Playlist Listens",
                                        data: UKGDPperCapitaListen,
                                        stack: 'A',
                                        area: true,
                                    },
                                ]}
                                total={300}
                            />
                        </Stack>
                    </Box>
                </>
            )}
        </>
    );
}