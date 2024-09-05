import "../../../css/admin/adminUpload.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import WaveSurfer from 'wavesurfer.js';
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { deditgetdata } from "../../../services/editgetdata";
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const milliseconds = Math.floor((seconds % 1) * 1000);

    return `${minutes}:${remainingSeconds}:${milliseconds}`;
}

const AdminUpload = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [editedWord, setEditedWord] = useState(null);
    const [data, setData] = useState()
    const wavesurferRef = useRef(null);
    const containerRef = useRef(null);
    const { id } = useParams();




    useEffect(() => {
        if (containerRef.current && data?.songLink) {
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

                wavesurferRef.current.load(data.songLink && data.songLink);

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
    }, [data]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await deditgetdata(id);
                setData(response.DT.songs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching lyric:', error);

                setLoading(false);
            }
        };
        fetchData();
    }, []);

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


    const handleInputChange = (e, word) => {
        const { name, value } = e.target;
        console.log(name, value);
        setEditedWord({
            ...word,
            [name]:  name === "startTime" || name ==="endTime" ? Number(value) : value,
        });
    };

    const handleSave = async (word) => {
        console.log(word);
        try {
            const response = await fetch('http://wtfmusic.vercel.app/api/updatelyric', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(word),
            });
            if (!response.ok) {
                throw new Error('Failed to update lyric');
            }
        } catch (error) {
            console.error('Error updating lyric:', error);
        }
    };


    if (isLoading) {
        return <div>Loading...</div>;
    }

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
            </div>

            <div className="edit_body">
                <div className="edit_body_lyrics">
                    {data.lyric.map((line) => (
                        <div key={line._id}>
                            {line.words.map((word) => (
                                <span
                                    className={`ly_text ${currentTime >= word.startTime / 1000 && currentTime <= word.endTime / 1000 ? 'highlight' : ''}`}
                                    key={word._id}
                                >
                                    {word.data}
                                    <div className={`new_ly ${currentTime >= word.startTime / 1000 && currentTime <= word.endTime / 1000 ? 'highlight_new' : ''}`}>
                                        <input
                                            type="time"
                                            className="change_time"
                                            defaultValue={word.startTime}
                                            name="startTime"
                                            onChange={(e) => handleInputChange(e, word)}
                                        />
                                        :
                                        <input
                                            type="text"
                                            className="new_ly_input"
                                            defaultValue={word.data}
                                            name="word"
                                            onChange={(e) => handleInputChange(e, word)}
                                        />
                                        
                                        :
                                        <input
                                            type="time"
                                            className="change_time"
                                            defaultValue={Number(word.endTime)}
                                            name="endTime"
                                            onChange={(e) => handleInputChange(e, word)}
                                        />
                                        <button onClick={() => handleSave(editedWord || word)} className="save_change">Save</button>
                                    </div>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="edit_body_info">
                    <div className="edit_body_info_head">
                        <div className="edit_body_info_img">
                            <img src={data.thumbnail} alt="song" />
                        </div>
                        <div className="edit_body_info_text">
                            <input className="edit_body_info_text_title" value={data.songname} />
                            <input className="edit_body_info_text_category" value={data.genresid && data.genresid.map((category) => category).join(', ')} />
                            <input className="edit_body_info_text_singer" value={data.artists && data.artists.map((artist) => artist.name).join(', ')} />
                        </div>
                    </div>
                    <div className="edit_body_info_body">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUpload;