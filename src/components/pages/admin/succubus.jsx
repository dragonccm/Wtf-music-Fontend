import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Statcard from '../../card/statcard'
import ChartElement from "../../card/chartElement";
import {
    songRankService,
    songRankListenService,
} from "../../../services/songRankService";
import { getbanService } from "../../../services/getbanService";
import { adminSearchS } from "../../../services/adminSearchSongService";
import "../../../css/admin/musicAdmin.scss";


const datatop = [
    {
        title: 'Users',
        value: '14k',
        interval: 'Last 30 days',
        trend: 'up',
        data: [
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
            360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
        ],
    },
    {
        title: 'Conversions',
        value: '325',
        interval: 'Last 30 days',
        trend: 'down',
        data: [
            1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
            780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
        ],
    },
    {
        title: 'Event count',
        value: '200k',
        interval: 'Last 30 days',
        trend: 'neutral',
        data: [
            500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
            520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
        ],
    },
];
const session = [
    {
        id: 'page-views',
        label: 'Page views',
        data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
        stack: 'A',
    },
    {
        id: 'downloads',
        label: 'Downloads',
        data: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
        stack: 'A',
    },
    {
        id: 'conversions',
        label: 'Conversions',
        data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
        stack: 'A',
    },
]

const xAxis = 
    [
    {
        scaleType: 'band',
        categoryGapRatio: 0.5,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
  ]
const series = 
    [
    {
        id: 'page-views',
        label: 'Page views',
        data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
        stack: 'A',
    },
    {
        id: 'downloads',
        label: 'Downloads',
        data: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
        stack: 'A',
    },
    {
        id: 'conversions',
        label: 'Conversions',
        data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
        stack: 'A',
    },
  ]
export default function Chart() {
    const [data, setData] = useState([]);
    const [years, setYears] = useState([]);
    const [UKGDPperCapita, setUKGDPperCapita] = useState([]);
    const [tilte, settilte] = useState("");
    const [id, setid] = useState("all");
    const [fetchid, setfetchid] = useState("like");
    const [searchdata, setsearchdata] = useState([]);
    const [isInteractingWithResults, setIsInteractingWithResults] =
        useState(false);
    useEffect(() => {
        const fetchRankSongs = async () => {
            try {
                if (fetchid === "like") {
                    const response = await songRankService(id,"30","09-01-2024");
                    setData(response.DT.data);
                } else if (fetchid === "listen") {
                    const response = await songRankListenService(id,"30","09-01-2024");
                    setData(response.DT.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchRankSongs();

        const fetchban = async () => {
            try {
                const response = await getbanService();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchban();
    }, [id, fetchid]);
    useEffect(() => {
        if (id === "all") {
            settilte("Thống kê lượt thích tất cả Bài hát trong 1 tháng");
            const formattedYears = data.map((day) => {
                const f = new Date(day.date);
                const year = parseInt(f.getFullYear());
                const month = parseInt(f.getMonth()) + 1;
                const date = parseInt(f.getDate());
                return new Date(year, month, date);
            });
            formattedYears.sort((a, b) => a - b);
            setYears(formattedYears);
            const UKGDPperCapitadata = data.map((data) => data.likeCount);
            setUKGDPperCapita(UKGDPperCapitadata);
        } else {
            settilte("Thống kê lượt thích 7 ngày gần nhất");
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
                return { id: data.id, songname: data.songname };
            });
            setsearchdata(format);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const lineChartsParams = {
        series: [
            {
                label: "Song",
                data: UKGDPperCapita,
                showMark: false,
            },
        ],
        width: 1100,
        height: 400,
    };

    const yearFormatter = (date) =>
        `${date.getDate().toString()}/${date.getMonth().toString()}`;
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
            <nav class="d-flex ranking_select">
                <select
                    className=" p-3"
                    onChange={(e) => setfetchid(e.target.value)}
                >
                    <option value="like">Like</option>
                    <option value="listen">Listen</option>
                </select>
                <nav class="navbar">
                    <div class="search_ctn">
                        <input
                            class="mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleserch}
                            onBlur={handleclear}
                        />
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            type="button"
                        >
                            Search
                        </button>
                    </div>
                </nav>
                {searchdata.length > 0 && (
                    <div
                        class="search_result"
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
                                onClick={() => handleSearchResultClick(data.id)}
                            >
                                {data.songname}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
            {!Array.isArray(data) || data.length < 1 ? (
                <h2 className="undefine">
                    chưa có dữ liệu trong 7 ngày gần nhất
                </h2>
            ) : (
                <>
                    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
                        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                            Overview
                        </Typography>
                        <Stack
                            direction="row"
                            sx={{ gap: 1 }}
                        >
                            {datatop.map((item) => (
                                <Statcard {...item} />
                            ))}
                        </Stack>
                        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <ChartElement xAxis={[
                                {
                                    data: years,
                                    scaleType: "time",
                                    valueFormatter: yearFormatter,
                                },
                            ]}
                                series={lineChartsParams.series.map((series) => ({
                                    ...series,
                                    data: UKGDPperCapita,
                                }))} />
                            <ChartElement xAxis={[
                                {
                                    data: years,
                                    scaleType: "time",
                                    valueFormatter: yearFormatter,
                                },
                            ]}
                                series={lineChartsParams.series.map((series) => ({
                                    ...series,
                                    data: UKGDPperCapita,
                                }))} />
                        </Stack>
                    </Box>
                </>
            )}
        </>
    );
}