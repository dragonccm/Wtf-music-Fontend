import { useState, useEffect } from "react";
import { adminGetPlaylist } from "../services/adminPlaylistService";
import {
    adminSearchPlaylistService,
} from "../services/adminSearchSongService";
import { updatePlaylist, deletePlaylist, createPlaylist } from "../services/restPlaylistService";
import { getbanService } from "../services/getbanService";
import { toast } from "react-toastify";

const usePlaylistAdmin = () => {
    const [musicSongs, setMusicSongs] = useState([]);
    const [maxpage, setmaxpage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editForm, setEditForm] = useState({});
    const [createForm, setCreateForm] = useState({});
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState(null);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchMusicSongs();
    }, [currentPage]);

    const fetchMusicSongs = async () => {
        try {
            const response = await adminGetPlaylist((currentPage - 1) * itemsPerPage);
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

    const openEditModal = (kind) => {
        setEditForm(kind);
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

    const updateMusicKind = async (e) => {
        e.preventDefault();
        try {
            const res = await updatePlaylist({ ...editForm, thumbnail: file });
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
            const res = await createPlaylist({ ...createForm, thumbnail: file });
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
            const res = await deletePlaylist({ playlistId: id });
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
            const ser = await adminSearchPlaylistService(e.target.value);
            setMusicSongs(ser.DT.data.Playlist);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handlegetban = async () => {
        try {
            const ser = await getbanService();
            setMusicSongs(ser.DT.playlist);
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
        handleserch,
        handlegetban,
    };
};

export { usePlaylistAdmin };
