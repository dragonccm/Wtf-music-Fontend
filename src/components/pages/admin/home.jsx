import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMicrophone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../../../css/admin/homeAdmin.scss";
import "../../../css/admin/musicAdmin.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import Loading from "../../sideNavigation/mascot_animation";
import { fetchAdminHome } from "../../../redux/slide/adminHomeSlice";
import { adminGetArtist } from "../../../services/adminSingerService";
import { adminGetUsers } from "../../../services/adminGetUserService";
import { adminGetSong } from "../../../services/adminSongService";
import {
    getSlider,
    setSlider,
    insertSlider
} from '../../../redux/slide/silderSlice';
import { MuiChipsInput } from 'mui-chips-input';
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import {
    adminSearchPlaylistService
} from "../../../services/adminSearchSongService";
import { useForm } from "react-hook-form";

const HomeAdmin = () => {
    const [user, setuser] = useState([]);
    const [musicSongs, setMusicSongs] = useState([]);
    const [Artists, setArtists] = useState([]);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const [searchResults, setSearchResults] = useState([]);
    const [file, setFile] = useState(null);
    const [localImageUrl, setImageUrl] = useState("");
    const [playlist, setPlaylist] = useState([]);
    const { register, handleSubmit, reset, setValue } = useForm();
    const [editMode, setEditMode] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);

    useEffect(() => {
        dispatch(fetchAdminHome())
            .then(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });

        dispatch(getSlider())
            .then(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [dispatch]);

    useEffect(() => {
        fetchMusicSongs();
    }, []);

    const fetchMusicSongs = async () => {
        try {
            const response = await adminGetUsers(0);
            const Artistresponse = await adminGetArtist(0);
            const songsresponse = await adminGetSong(0);
            setMusicSongs(songsresponse.handledata);
            setuser(response.DT.handledata);
            setArtists(Artistresponse.handleData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const slider = useSelector((state) => state.slider.sliderData);
    const currData = useSelector((state) => state.admin.AdminHome.DT);

    const handleUpload = (uploadedFile) => {
        setFile(uploadedFile);
        setImageUrl(URL.createObjectURL(uploadedFile));
    };

    const onSubmit = (data) => {
        if (editMode) {
            dispatch(setSlider(currentSlide._id, data));
        } else {
            dispatch(insertSlider(data));
        }
        reset();
        setEditMode(false);
        setCurrentSlide(null);
    };

    const handleEdit = (slide) => {
        setEditMode(true);
        setCurrentSlide(slide);
        setValue("slideName", slide.slideName);
        setValue("slideDescription", slide.slideDescription);
        setValue("playlistId", slide.playlistId);
        setImageUrl(slide.slideImage);
        setPlaylist(slide.Playlist.map(pl => ({ playlistId: pl.playlistId, name: pl.playlistname })));
    };

    const handleSubmitForm = async (data) => {
        const formData = new FormData();
        formData.append("slideName", data.slideName);
        formData.append("file", file);
        formData.append("slideDescription", data.slideDescription);
        formData.append("playlistId", playlist.map(item => item.playlistId).join(","));

        await onSubmit(formData);
    };

    const handleAddItem = (item) => {
        setPlaylist([...playlist, { playlistId: item.playlistId, name: item.playlistname }]);
    };

    const handleDeleteItem = (index) => {
        setPlaylist(playlist.filter((_, i) => i !== index));
    };

    const handleSearch = async (query) => {
        let response;
        response = await adminSearchPlaylistService(query);
        setSearchResults({ ...searchResults, playlist: response.DT.data.Playlist });
    };

    const toggleFormMode = () => {
        setEditMode(!editMode);
        reset();
        setCurrentSlide(null);
        setImageUrl("");
    };

    if (isLoading && currData) {
        return <div><Loading /></div>;
    }

    return (
        <main className="main-content">
            <div className="HomeAdmin">
                <h2 className="page_title">MUSIC ADMIN DASHBOARD</h2>
                {/* data statistical */}
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

                                <h4 className="text-capitalize mt-4 mb-1">{currData && currData.ar}</h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Artist
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

                                <h4 className="text-capitalize mt-4 mb-1">{currData && currData.songs}</h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Songs
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

                                <h4 className="text-capitalize mt-4 mb-1">{currData && currData.Playlist}</h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Playlist
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
                                <h4 className="text-capitalize mt-4 mb-1">{currData && currData.User}</h4>

                                <p className="mb-0 text-capitalize text-body">
                                    total Music Users
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* top data */}
                <section className="row my-5">


                    <div className="col-lg-8 py-3 card container-admin">
                        <div className="row py-5 card-header">
                            <div className="col-lg-6 header-title">
                                <h4 className="card-title text-capitalize">
                                    top artist
                                </h4>
                            </div>
                        </div>
                        <table
                            style={{ border: "none" }}
                            className="w-100 fs-4 text-justify table-admin"
                        >
                            <thead>
                                <tr>
                                    <th>Thứ tự</th>
                                    <th>Tên nghệ sĩ</th>
                                    <th>Ngày hoạt động</th>
                                    <th>Tổng bài hát</th>
                                    <th>lượt theo dõi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Artists && Artists.slice(0, 3).map((data) => (
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>
                                            <h6 className="fs-4 text-capitalize">
                                                {data.artistsName}
                                            </h6>
                                            <p
                                                className="mb-0 custom-icon"
                                                style={{ color: "#aaa" }}
                                            >
                                                {data.alias}
                                            </p>
                                        </td>
                                        <td>{data.createdAt}</td>
                                        <td>{Array.isArray(data.songListId) && data.songListId.length}</td>
                                        <td>{data.totalFollow.toLocaleString()}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <div className="d-flex py-4 pagination-admin">
                            <div className="col-6 description-pagination"></div>
                            <div className="col-6 pe-5 pagination-numbers">
                                <ul className="pagination justify-content-end ">
                                    <li className="border">
                                        <a
                                            className="d-block fs-4 px-4 py-1 opacity-75"
                                            href="#"
                                        >
                                            Previous
                                        </a>
                                    </li>
                                    <li className="border active">
                                        <a
                                            className="d-block fs-4 px-4 py-1 opacity-75"
                                            href="#"
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li className="border">
                                        <a
                                            className="d-block fs-4 px-4 py-1 opacity-75"
                                            href="#"
                                        >
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div
                            style={{ height: "100%" }}
                            className="card py-3 px-2 container-admin"
                        >
                            <div className="card-header">
                                <div className="header-title">
                                    <h4 className="mb-5 card-title text-capitalize">
                                        total reviews
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="d-flex align-items-center mb-5">
                                    <FontAwesomeIcon
                                        icon={faMicrophone}
                                        className="icon-artist icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between  ">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Artist
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                {currData && currData.ar}
                                            </h6>
                                        </div>
                                        <div
                                            className="progress bg-soft-success shadow-none w-100"
                                            style={{ height: "6px" }}
                                        >
                                            <div
                                                className="progress-bar bg-soft-success"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="23"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{
                                                    width: "21%",
                                                    transition:
                                                        "width 2s ease 0s",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <FontAwesomeIcon
                                        icon={faMusic}
                                        className="icon-songs icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Songs
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                {currData && currData.songs}
                                            </h6>
                                        </div>
                                        <div
                                            className="progress bg-soft-info shadow-none w-100"
                                            style={{ height: "6px" }}
                                        >
                                            <div
                                                className="progress-bar bg-soft-info"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="45"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{
                                                    width: "45%",
                                                    transition:
                                                        "width 2s ease 0s",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <FontAwesomeIcon
                                        icon={faList}
                                        className="icon-playlist icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between  ">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Playlist
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                {currData && currData.Playlist}
                                            </h6>
                                        </div>
                                        <div
                                            className="progress bg-soft-success shadow-none w-100"
                                            style={{ height: "6px" }}
                                        >
                                            <div
                                                className="progress-bar bg-soft-success"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="23"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{
                                                    width: "27%",
                                                    transition:
                                                        "width 2s ease 0s",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon
                                        icon={faCircleUser}
                                        className="icon-playlist icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between  ">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Users
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                {currData && currData.User}
                                            </h6>
                                        </div>
                                        <div
                                            className="progress bg-soft-success shadow-none w-100"
                                            style={{ height: "6px" }}
                                        >
                                            <div
                                                className="progress-bar bg-soft-success"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="23"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{
                                                    width: "63%",
                                                    transition:
                                                        "width 2s ease 0s",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* total users */}
                <section className="row">
                    <div className="col-lg-6">
                        <div className="card py-3 px-2">
                            <div className="card-header">
                                <div className="header-title">
                                    <h4 className="card-title text-capitalize">
                                        Recent Users
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ui className="list-unstyled p-0 m-0">
                                    {user.slice(0, 5).map((data) => (
                                        <li className="mb-4">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={data.avt}
                                                        id="07"
                                                        className="img-fluid  h-50 avatar-52"
                                                        alt="review-img"
                                                    />
                                                    <div className="ms-5">
                                                        <h6 className="text-capitalize fs-3 fw-normal">
                                                            {data.user}
                                                        </h6>
                                                        <small
                                                            style={{
                                                                color: "#aaa",
                                                            }}
                                                            className="text-capitalize fs-4"
                                                        >
                                                            {data.email}
                                                        </small>
                                                    </div>
                                                </div>
                                                <p
                                                    style={{
                                                        color: "#aaa",
                                                        width: "22%",
                                                    }}
                                                    className="mb-0 custom-icon fs-3"
                                                >
                                                    {data.createdAt}
                                                </p>
                                            </div>{" "}
                                        </li>
                                    ))}

                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card py-3 px-2">
                            <div className="card-header">
                                <div className="header-title">
                                    <h4 className="card-title text-capitalize">
                                        total reviews
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ui className="list-unstyled p-0 m-0">
                                    {musicSongs.slice(0, 5).map((data) => (
                                        <li className="mb-4">
                                            <div className="d-flex">
                                                <img
                                                    src={data.thumbnail}
                                                    id="07"
                                                    className="img-fluid avatar-52"
                                                    alt="review-img"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                                                        {data.songname}
                                                    </h6>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <small
                                                            style={{
                                                                color: "#aaa",
                                                            }}
                                                            className="text-capitalize fs-4"
                                                        >
                                                            {data.alias}
                                                        </small>
                                                        <small
                                                            style={{
                                                                color: "#aaa",
                                                            }}
                                                            className="text-capitalize custom-icon fs-3"
                                                        >
                                                            {data.createdAt}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                        </li>
                                    ))}
                                </ui>
                            </div>
                        </div>
                    </div>
                </section>
                {/* form  */}


                <section className="row my-5">
                    <div className="col-lg-8 py-3 card container-admin">
                        <div className="row py-5 card-header">
                            <div className="col-lg-6 header-title">
                                <h4 className="card-title text-capitalize">Slider</h4>
                            </div>
                        </div>
                        <table className="w-100 fs-4 text-justify table-admin">
                            <thead>
                                <tr>
                                    <th>Thứ tự</th>
                                    <th>Tên slide</th>
                                    <th>Mô tả</th>
                                    <th>Hình ảnh</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {slider.DT && slider.DT.map((slide, index) => (
                                    <tr key={slide._id}>
                                        <td>{index + 1}</td>
                                        <td>{slide.slideName}</td>
                                        <td>{slide.slideDescription}</td>
                                        <td><img src={slide.slideImage} alt={slide.slideName} className="img-fluid" style={{ width: "50px" }} /></td>
                                        <td>
                                            <button className="btn btn-secondary" onClick={() => handleEdit(slide)}>Chỉnh sửa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>


                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="text-center opacity-75 mb-5 fs-2">{editMode ? "Cập nhật tiêu đề" : "Tạo mới tiêu đề"}</h2>
                    <button className="btn btn-info" onClick={toggleFormMode}>
                        {editMode ? "Chuyển sang thêm mới" : "Chuyển sang cập nhật"}
                    </button>
                </div>
                
                <form onSubmit={handleSubmit(handleSubmitForm)} className="needs-validation" noValidate>
                    <div className="mb-4 form-group">
                        <label className="fs-5 mb-2" htmlFor="create-name">Tên slide:</label>
                        <input type="text" className="fs-5 form-control" id="create-name" {...register("slideName", { required: true })} />
                        <div className="invalid-feedback">
                            Vui lòng nhập tên slide.
                        </div>
                    </div>
                    <div className="mb-4 form-group">
                        <label className="fs-5 mb-2" htmlFor="edit-profile">Hình ảnh slide:</label>
                        {localImageUrl && <img style={{ width: "12%" }} src={localImageUrl} className="avt-img mb-2" alt="Uploaded" />}
                        <ImageUploader onUpload={handleUpload} />
                        <div className="invalid-feedback">
                            Vui lòng tải lên hình ảnh slide.
                        </div>
                    </div>
                    <div className="mb-4 form-group">
                        <label className="fs-5 mb-2" htmlFor="create-description">Mô tả slide:</label>
                        <input type="text" className="fs-5 form-control" id="create-description" {...register("slideDescription", { required: true })} />
                        <div className="invalid-feedback">
                            Vui lòng nhập mô tả slide.
                        </div>
                    </div>
                    <div className="mb-4 form-group">
                        <label className="fs-5 mb-2" htmlFor="create-genre">Playlist ID:</label>
                        <input
                            type="text"
                            className="fs-5 form-control mb-2"
                            placeholder="Tìm kiếm thể loại"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <MuiChipsInput
                            value={playlist.map(g => g.name)}
                            onAdd={(chip) => handleAddItem({ playlistId: chip, playlistname: chip })}
                            onDeleteChip={(chip, index) => handleDeleteItem(index)}
                        />
                        <div className="list-group d-flex flex-wrap">
                            {Array.isArray(searchResults.playlist) && searchResults.playlist.map((playlist, index) => (
                                <button key={index} type="button" className="list-group-item list-group-item-action m-1" onClick={() => handleAddItem(playlist)}>
                                    {playlist.playlistname}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="text-end form-group">
                        <button type="submit" className="px-4 py-2 btn btn-primary fs-4">{editMode ? "Cập nhật slide" : "Tạo mới"}</button>
                        <button type="button" className="px-4 py-2 btn btn-secondary ms-3 fs-4" onClick={reset}>Hủy bỏ</button>
                    </div>
                </form>

             
                {/* form  */}
            </div>
        </main>
    );
};
export default HomeAdmin;
