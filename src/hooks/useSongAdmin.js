import { useState, useEffect } from "react";
import { adminGetSong } from "../services/adminSongService";
import {
    adminSearchS,
    adminSearchArtistsService,
    adminSearchGenreService,
} from "../services/adminSearchSongService";
import { updateSong, deleteSong, createSong } from "../services/restSongService";
import { getbanService } from "../services/getbanService";
import { toast } from "react-toastify";

const useSongAdmin = () => {
    const [musicSongs, setMusicSongs] = useState([]);
    const [maxpage, setmaxpage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editForm, setEditForm] = useState({});
    const [createForm, setCreateForm] = useState({});
    const [imageUrl, setImageUrl] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [file, setFile] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const itemsPerPage = 20;

    useEffect(() => {
        fetchMusicSongs();
    }, [currentPage]);

    const fetchMusicSongs = async () => {
        try {
            const response = await adminGetSong((currentPage - 1) * itemsPerPage);
            setMusicSongs(response.handledata);
            setmaxpage(response.maxPage);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handlePageChange = (pageNum) => {
        if (pageNum < 1 || pageNum > Math.ceil(maxpage / itemsPerPage)) return;
        setCurrentPage(pageNum);
    };

    const openEditModal = (song) => {
        setEditForm(song);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => setIsEditModalOpen(false);

    const openCreateModal = () => setIsCreateModalOpen(true);

    const closeCreateModal = () => setIsCreateModalOpen(false);

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleCreateFormChange = (e) => {
        const { name, value } = e.target;
        setCreateForm({ ...createForm, [name]: value });
    };

    const handleUpload = (file) => {
        setFile(file);
        setImageUrl(URL.createObjectURL(file));
    };

    const handleAudioUpload = (audioFile) => {
        setAudioFile(audioFile);
        setAudioUrl(URL.createObjectURL(audioFile));
    };

    const updateMusicKind = async (e) => {
        e.preventDefault();
        try {
            const res = await updateSong({ ...editForm, thumbnail: file, songLink: audioFile });
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
                handleserch({ target: { value: '' } }); // Ensure updated data is fetched
                closeEditModal();
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const createMusicKind = async (e) => {
        e.preventDefault();
        try {
            const res = await createSong({ ...createForm, thumbnail: file, songLink: audioFile });
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
                handleserch({ target: { value: '' } }); // Ensure updated data is fetched
                closeCreateModal();
            }
        } catch (error) {
            console.error("Error creating data:", error);
        }
    };

    const deleteMusicKind = async (id) => {
        try {
            const res = await deleteSong({ id });
            if (res) {
                toast.success("Cập nhật thành công");
                fetchMusicSongs();
            }
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    const handleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setMusicSongs(ser.DT.data.songs);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handlegetban = async () => {
        try {
            const ser = await getbanService();
            setMusicSongs(ser.DT.song);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const totalPages = Math.ceil(maxpage / itemsPerPage) - 5;

    return {
        musicSongs,
        maxpage,
        currentPage,
        totalPages,
        isEditModalOpen,
        isCreateModalOpen,
        editForm,
        createForm,
        imageUrl,
        audioUrl,
        handlePageChange,
        openEditModal,
        closeEditModal,
        openCreateModal,
        closeCreateModal,
        handleEditFormChange,
        handleCreateFormChange,
        updateMusicKind,
        createMusicKind,
        deleteMusicKind,
        handleUpload,
        handleAudioUpload,
        handleserch,
        handlegetban,
    };
};

export { useSongAdmin };
