import "../../../css/admin/adminUpload.scss";
import Chip from '@mui/material/Chip';
import WaveSurfer from 'wavesurfer.js';
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageUploader from "../../pages/profile/Profile-setting/uploadImage";
import AudioUploader from "../../pages/profile/Profile-setting/upladAudio";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { toast, ToastContainer } from "react-toastify";

import {
    updateSong,
    deleteSong,
    createSong,
} from "../../../services/restSongService";
import {
    adminSearchArtistsService,
    adminSearchGenreService,
} from "../../../services/adminSearchSongService";

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const milliseconds = Math.floor((seconds % 1) * 1000);

    return `${minutes}:${remainingSeconds}:${milliseconds}`;
}

const initialData = {
    lyric: [],
    thumbnail: null,
    songLink: null,
    artist: [],
    genre: []
};

const AdminUpload = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const { id } = useParams();
    const [data, setData] = useState({
        "id": id,
        "songname": "",
        "artist": [],
        "genre": [],
        "lyric": [],
        "songLink": "",
        "thumbnail": "",
    })
    const wavesurferRef = useRef(null);
    const containerRef = useRef(null);
    const [value, setValue] = useState('1');
    const [imageUrl, setImageUrl] = useState('');
    const [file, setFile] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const [audioUrl, setAudioUrl] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    // tìm kiếm
    const [searchGenre, setSearchGenre] = useState([]);
    const [searchAr, setSearchAr] = useState([]);




    useEffect(() => {
        if (containerRef.current && audioUrl) {
            if (containerRef.current) {
                wavesurferRef.current = WaveSurfer.create({
                    container: containerRef.current,
                    waveColor: '#ddd',
                    progressColor: '#ff5500',
                    cursorColor: '#ff5500',
                    barWidth: 2,
                    barRadius: 3,
                    responsive: true,
                    height: 100,
                    normalize: true,
                    partialRender: true,
                });

                wavesurferRef.current.load(audioUrl && audioUrl);

                wavesurferRef.current.on('audioprocess', () => {
                    setCurrentTime(wavesurferRef.current.getCurrentTime());
                });

                wavesurferRef.current.on('finish', () => {
                    setIsPlaying(false);
                    setCurrentTime(0);
                });
            }
        }

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
                wavesurferRef.current = null;
            }
        };
    }, [audioUrl]);
    const createMusicSongs = async () => {
        try {
            setIsSaving(true);
            data.thumbnail = file;
            data.songLink = audioFile;

            const newData = { ...data, artists: data.artist.map((data) => data.id).join(','), genresid: data.genre.map((data) => data.genreId).join(',') };
            const res = await createSong(newData);
            if (res) {
                toast.success(res.EM);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const onPlayPause = () => {
        if (wavesurferRef.current) {
            if (isPlaying) {
                wavesurferRef.current.pause();
            } else {
                wavesurferRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    const handleInputChange = (e, wordId, fieldName, lineIndex) => {
        const newValue = e.target.value;
        setData(data => {
            const newData = { ...data };
            const line = newData.lyric[lineIndex];
            const wordIndex = line.words.findIndex(w => w._id === wordId);
            if (wordIndex > -1) {
                line.words[wordIndex] = { ...line.words[wordIndex], [fieldName]: fieldName === 'startTime' || fieldName === 'endTime' ? parseInt(newValue, 10) : newValue };
            }
            console.log(newData);
            return newData;
        });
    };
    const handleSave = () => {
        data.thumbnail = file;
        data.songLink = audioFile;
        console.table(data)
    };

    const handleUpload = (file) => {
        setFile(file);
        setImageUrl(URL.createObjectURL(file));
    };

    const handleDelete = (chipToDelete, type) => () => {
        if (type === 'genre') {
            setData((data) => {
                const newData = { ...data };
                newData.genre = newData.genre.filter((chip) => chip.genreId !== chipToDelete.genreId);
                return newData;
            });
        } else {
            setData((data) => {
                const newData = { ...data };
                newData.artist = newData.artist.filter((chip) => chip.id !== chipToDelete.id);
                return newData;
            });
        }
    };

    const handleAdd = (chipToAdd, type) => () => {
        if (type === 'genre') {
            setData((data) => {
                const newData = { ...data };
                const exists = newData.genre.some(chip => chip.genreId === chipToAdd.genreId);
                if (!exists) {
                    newData.genre = [...newData.genre, chipToAdd];
                }
                return newData;
            });
        } else {
            setData((data) => {
                const newData = { ...data };
                const exists = newData.artist.some(chip => chip.id === chipToAdd.id);
                if (!exists) {
                    newData.artist = [...newData.artist, chipToAdd];
                }
                return newData;
            });
        }
    };
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSongNameChange = (e) => {
        setData((prevData) => ({ ...prevData, songname: e.target.value }));
    };
    // search 
    const handarleserch = async (e) => {
        try {
            const ser = await adminSearchArtistsService(e.target.value);
            setSearchAr(ser.DT.data.ar);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handgenreleserch = async (e) => {
        try {
            const ser = await adminSearchGenreService(e.target.value);
            setSearchGenre(ser.DT.data.genre);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleAudioUpload = (audioFile) => {
        setAudioFile(audioFile);
        setAudioUrl(URL.createObjectURL(audioFile));
    };

    const clearState = () => {
        setData(initialData);
        setCurrentTime(0);
        setIsPlaying(false);
        setImageUrl('');
        setAudioUrl('');
        setFile(null);
        setAudioFile(null);
    };
    return (
        <div className="edit">
            <h1 className="edit_title">
                Upload Nhạc
            </h1>
            <div className="player">
                <div ref={containerRef} />

                <p>Current time: {formatTime(currentTime)}</p>
                <div style={{ margin: '1em 0', display: 'flex', gap: '1em' }}>
                    <button onClick={onPlayPause} style={{ minWidth: '5em' }}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>

                <label className="fs-4 mb-2" htmlFor="create-email">
                    Chọn File Bhạc:
                </label>
                <AudioUploader onUpload={handleAudioUpload} />
            </div>

            <div className="edit_body">
                <div className="edit_body_lyrics">
                    {data && data.lyric.map((line, lineIndex) => (
                        <div key={line._id}>
                            {line.words.map((word) => (
                                <span
                                    className={`ly_text ${currentTime >= word.startTime / 1000 && currentTime <= word.endTime / 1000 ? 'highlight' : ''}`}
                                    key={word._id}
                                >
                                    {word.data}
                                    <div className={`new_ly ${currentTime >= word.startTime / 1000 && currentTime <= word.endTime / 1000 ? 'highlight_new' : ''}`}>
                                        <div className="change_time_ctn">
                                            <div className="time_format">
                                                {formatTime(word.startTime / 1000)} giây
                                            </div>
                                            <input
                                                type="number"
                                                className="change_time"
                                                value={word.startTime}
                                                name="startTime"
                                                onChange={(event) => handleInputChange(event, word._id, "startTime", lineIndex)}
                                            />
                                        </div>
                                        :
                                        <input
                                            type="text"
                                            className="new_ly_input"
                                            value={word.data}
                                            name="data"
                                            onChange={(event) => handleInputChange(event, word._id, "data", lineIndex)}
                                        />
                                        :
                                        <div className="change_time_ctn">
                                            <div className="time_format">
                                                {formatTime(word.endTime / 1000)} giây
                                            </div>
                                            <input
                                                type="number"
                                                className="change_time"
                                                value={word.endTime}
                                                name="endTime"
                                                onChange={(event) => handleInputChange(event, word._id, "endTime", lineIndex)}
                                            />
                                        </div>
                                    </div>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="edit_body_info">
                    <div className="edit_body_info_head">
                        <div className="edit_body_info_img">
                            {imageUrl ? <img src={imageUrl} className="song-img" alt="Uploaded" /> : <img src="https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" className="song-img" alt="Uploaded" />}
                            <ImageUploader onUpload={handleUpload} />
                        </div>
                        <div className="edit_body_info_text">
                            <input className="edit_body_info_text_title" onChange={(e) => handleSongNameChange(e)} defaultValue={data && data.songname} />
                            <div className="edit_body_info_text_category_gr">
                                {data && data.genre.map((data) => {
                                    return (
                                        <Chip
                                            label={data.genrename}
                                            onDelete={handleDelete(data, "genre")}
                                            className="edit_body_info_text_category"
                                        />
                                    );
                                })}
                            </div>
                            <div className="edit_body_info_text_singer_gr">
                                {data && data.artist.map((data) => {
                                    return (
                                        <Chip
                                            label={data.artistsName}
                                            onDelete={handleDelete(data, "artist")}
                                            className="edit_body_info_text_singer"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="edit_body_info_body">
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                        <Tab label="Tìm Thể Loại" value="1" />
                                        <Tab label="Tìm Nghệ Sĩ" value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel
                                    sx={{
                                        padding: 0,
                                    }}
                                    value="1">
                                    <input
                                        type="text"
                                        className="fs-4 form-control col"
                                        id="create-date"
                                        // value={editForm.genresid}
                                        onChange={handgenreleserch}
                                    />
                                    <div className="search_result">
                                        {searchGenre && searchGenre.map((data) => {
                                            return (
                                                <div className="search_result_item" key={data.genreId} onClick={handleAdd({
                                                    genreId: data.genreId,
                                                    genrename: data.genrename
                                                }, "genre")}>
                                                    <div className="search_result_img">
                                                        <img src={data.thumbnail} alt="Avatar" />
                                                    </div>
                                                    <div className="search_result_text">
                                                        <p className="search_result_text_name">{data.genrename}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </TabPanel>
                                <TabPanel
                                    sx={{
                                        padding: 0,
                                    }}
                                    value="2">
                                    <input
                                        type="text"
                                        className="fs-4 form-control col"
                                        id="create-date"
                                        // value={editForm.genresid}
                                        onChange={handarleserch}
                                    />
                                    <div className="search_result">
                                        {searchAr && searchAr.map((data) => {
                                            return (
                                                <div className="search_result_item" key={data.id} onClick={handleAdd({
                                                    id: data.id,
                                                    artistsName: data.artistsName,
                                                }, "artist")}>
                                                    <div className="search_result_img">
                                                        <img src={data.avt} alt="Avatar" />
                                                    </div>
                                                    <div className="search_result_text">
                                                        <p className="search_result_text_name">{data.artistsName}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
            <div className="gr">
                {isSaving ? 'Load' :
                    <button className="save_change" onClick={() => createMusicSongs()} disabled={isSaving}>
                        Lưu
                    </button>}

                <button className="save_change" onClick={() => clearState()}>Huỷ</button>
            </div>
        </div>
    );
}

export default AdminUpload;