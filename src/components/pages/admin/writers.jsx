import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { songRankService } from "../../../services/songRankService";
import { playlistRankService } from "../../../services/palylistRankService";

export default function WriterAdmin() {
    const [data, setData] = useState([]);
    const [years, setYears] = useState([]);
    const [UKGDPperCapita, setUKGDPperCapita] = useState([]);

    useEffect(() => {
        const fetchRankSongs = async () => {
            try {
                const response = await songRankService("82954FD8");
                setData(response.DT.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchRankSongs();

        const fetchRankplaylists = async () => {
            try {
                const response = await playlistRankService("6C00I0C0");
                console.log(response.DT.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchRankplaylists();
    }, []);

    useEffect(() => {
        if (Array.isArray(data)) {
            const formattedYears = data.map((day) => {
                const f = new Date(day.rankingDate);
                return new Date(f.getFullYear(), f.getMonth(), f.getDate());
            });
            formattedYears.sort((a, b) => a - b); // Sort dates in ascending order
            setYears(formattedYears);

            const UKGDPperCapitadata = data.map((data) => data.likeCount);
            setUKGDPperCapita(UKGDPperCapitadata);
        }
    }, [data]);

    if (!Array.isArray(data) || data.length < 1) {
        return <>dell</>;
    }

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

    const yearFormatter = (date) => `${date.getDate().toString()}/${date.getMonth().toString()}/${date.getFullYear().toString()}`;
    console.log(years);
    return (
        <LineChart
            {...lineChartsParams}
            xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormatter }]}
            series={lineChartsParams.series.map((series) => ({
                ...series,
                data:  UKGDPperCapita,
            }))}
        />
    );
}
