import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { BarChart,barElementClasses } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import ChartElement from "../../card/chartElement";
import {
  songRankService,
  songRankListenService,
  songRankPLService,
  songRankPLListenService,
} from "../../../services/songRankService";
import { adminGetSongRankThisMonthSV } from "../../../services/adminSongService";
import { getbanService } from "../../../services/getbanService";
import {
  adminSearchS,
  adminSearchPlaylistService,
} from "../../../services/adminSearchSongService";
import Loading from "../../sideNavigation/mascot_animation";
import { fetchAdminHome } from "../../../redux/slide/adminHomeSlice";
import "../../../css/admin/musicAdmin.scss";
import "../../../css/admin/chartAdmin.scss";
import { color } from "@chakra-ui/react";


export default function Chart() {
  const [data, setData] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [listenData, setListenData] = useState([]);
  const [playlistListenData, setPlaylistListenData] = useState([]);
  const [years, setYears] = useState([]);
  const [UKGDPperCapita, setUKGDPperCapita] = useState([]);
  const [UKGDPperCapitaListen, setUKGDPperCapitaListen] = useState([]);
  const [tilte, settilte] = useState(
    "Thống kê lượt thích và lượt nghe tất cả Bài hát"
  );
  const [id, setid] = useState("all");
  const [searchdata, setsearchdata] = useState([]);
  const [isInteractingWithResults, setIsInteractingWithResults] =
    useState(false);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [range, setRange] = useState("10");
  const [dataType, setDataType] = useState("song");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedName, setSelectedName] = useState("");
  const [musicSongs, setMusicSongs] = useState({ data: [], label: [] });
  useEffect(() => {
    dispatch(fetchAdminHome())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
      setListenData(response.DT);
      console.table(response.DT);
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
      const response = await songRankPLListenService({
        id,
        days: range,
        startDate,
      });
      setPlaylistListenData(response.DT);
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
    const currentListenData =
      dataType === "song" ? listenData : playlistListenData;
    if (id === "all") {
      settilte(
        `Thống kê lượt thích và nghe của tất cả ${
          dataType === "song" ? "Bài hát" : "Playlist"
        } trong`
      );
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
        const UKGDPperCapitaListenData = currentListenData.map(
          (data) => data.listenCount
        );
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
          const UKGDPperCapitaListenData = currentListenData.map(
            (data) => data.listenCount
          );
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
        const listenResponse = await songRankListenService(
          id,
          range,
          startDate
        );
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

  const yearFormatter = (date) =>
    `${date.getDate().toString()}/${date.getMonth().toString()}`;
  const lineChartsParams = {
    series: [
      {
        id: "like",
        label: "like",
        data: UKGDPperCapita,
        stack: "A",
      },
      {
        id: "listen",
        label: "listen",
        data: UKGDPperCapitaListen,
        stack: "A",
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

  const fetchMusicSongs = async () => {
    try {
      const songsresponse = await adminGetSongRankThisMonthSV();
      const label = songsresponse.DT.filter(
        (data, index) => index < 10 && data.songName !== undefined
      ).map((data) => data.songName);
      const data = songsresponse.DT.filter(
        (data, index) => index < 10 && data.listenCount !== undefined
      ).map((data) => data.listenCount);
      if (label.length === data.length) {
        setMusicSongs({ data: data, label: label });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMusicSongs();
  }, []);

  useEffect(() => {
    console.log("startDate", startDate);
  }, [startDate]);
  if (isLoading || data.length < 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  const colors = ["#465fff", "#EC407A"];

  return (
    <div className="chart-container">
      <h1>TOP NHẠC CÓ LƯỢT NGHE CAO NHẤT THÁNG</h1>
      <div className="HomeAdmin top_music py-5">
        {musicSongs.data.length > 0 && musicSongs.label.length > 0 ? (
          <BarChart
            series={[{ data: musicSongs.data, color: "#1f66ff" }]}
            height={290}
            xAxis={[
              {
                data: musicSongs.label,
                scaleType: "band",
                axisLabelStyle: { fill: "transparent" }, // chữ trắng
                tickLabelStyle: { fill: "transparent" }, // số & label trục x
              },
            ]}
            yAxis={[
              {
                axisLabelStyle: { fill: "#87a2b3" }, // chữ trắng
                tickLabelStyle: { fill: "#87a2b3" }, // số trục y
                axisLineStyle: { stroke: "#87a2b3" }, // 🔴 Màu trục X
                tickLineStyle: { stroke: "#87a2b3" },
              },
            ]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            sx={{
              [`& .${barElementClasses.root}`]: {
                fill: "#1f66ff", // màu thân cột
                strokeWidth: 2,
              },
              [`& .MuiBarElement-series-l_id`]: {
                stroke: colors[0],
              },
              [`& .MuiBarElement-series-r_id`]: {
                stroke: colors[1],
              },
              [`& .${axisClasses.root}`]: {
                [`& .${axisClasses.tick}, & .${axisClasses.line}`]: {
                  stroke: "#1d2939", // màu trục X/Y và các vạch
                  strokeWidth: 2,
                },
                [`& .${axisClasses.tickLabel}`]: {
                  fill: "#fff", // màu chữ của label trục
                  fontWeight: 600,
                },
              },
              border: "1px solid rgba(0, 0, 0, 0.1)",
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
              backgroundPosition: "20px 20px, 20px 20px",
            }
        }
            colors={colors}
          />
        ) : (
          <p>No music data available</p>
        )}
      </div>
      <h1>{tilte}</h1>
      <nav className="d-flex flex-column flex-md-row align-items-md-center ranking_select mb-3">
        <div className="d-flex flex-column flex-md-row align-items-md-center mb-3 mb-md-0">
           <button
              className="btn btn-primary btn_toggle"
              style={{ width: "175px", padding: "10px" }}
              onClick={() =>
                setDataType(dataType === "song" ? "playlist" : "song")
              }
            >
              {dataType === "song" ? "Xem Playlist" : "Xem Nhạc"}
            </button>
            <input
              type="date"
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
                className="list-group-item search_result_item top_item"
                value="all"
                onClick={() => handleSearchResultClick("all")}
              >
                Thống kê tất cả
              </button>
              {searchdata.map((data) => (
                <button
                  className="list-group-item search_result_item"
                  value={data.id}
                  onClick={() =>
                    handleSearchResultClick(
                      data.id,
                      dataType === "song" ? data.songname : data.playlistname
                    )
                  }
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
        <div className="chart-listen">
          <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
            <h1>
              {dataType === "song"
                ? selectedName
                  ? `Dữ Liệu Thống Kê Của Bài Hát: ${selectedName}`
                  : "Dữ Liệu Thống Kê Của Nhạc"
                : selectedName
                ? `Dữ Liệu Thống Kê Của Playlist: ${selectedName}`
                : "Dữ Liệu Thống Kê Của PlayList"}
              <br />
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
                    id: "like",
                    label:
                      dataType === "song" ? "Song Likes" : "Playlist Likes",
                    data: UKGDPperCapita,
                    stack: "A",
                    area: true,
                    color:"#1f66ff",

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
                    id: "listen",
                    label:
                      dataType === "song" ? "Song Listens" : "Playlist Listens",
                    data: UKGDPperCapitaListen,
                    stack: "A",
                    area: true,
                    color:"#1f66ff",
                  },
                ]}
                total={300}
              />
            </Stack>
          </Box>
        </div>
      )}
    </div>
  );
}
