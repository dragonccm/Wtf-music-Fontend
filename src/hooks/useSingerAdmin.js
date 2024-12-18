import { useState, useEffect } from "react";
import {
    adminSearchS,
    adminSearchPlaylistService,
    adminSearchArtistsService,
} from "../services/adminSearchSongService";
import { adminGetSinger } from "../services/adminSingerService";
import {
    updateArtists,
    deleteArtists,
    createArtists,
} from "../services/restArtistsService";
import { getbanService } from "../services/getbanService";
import { toast } from "react-toastify";

const useSingerAdmin = () => {
    const [musicSongs, setMusicSongs] = useState([]);
    const [maxpage, setmaxpage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setloading] = useState(false);
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
        if (!loading) {
            try {
                const offset = (currentPage - 1) * itemsPerPage;
                const response = await adminGetSinger(offset, itemsPerPage);
                if (response) {
                    setMusicSongs(response.handleData);
                    setmaxpage(response.maxPage);
                    setloading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
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
            const res = await updateArtists({ ...editForm, avt: file });
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
                handleserch({ target: { value: '' } });
                closeEditModal();
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const createMusicKind = async (e) => {
        e.preventDefault();
        try {
            const res = await createArtists({ ...createForm, avt: file });
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
                handleserch({ target: { value: '' } });
                closeCreateModal();
            }
        } catch (error) {
            console.error("Error creating data:", error);
        }
    };

    const deleteMusicKind = async (id) => {
        try {
            const res = await deleteArtists({ id });
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
            const ser = await adminSearchArtistsService(e.target.value);
            setMusicSongs(ser.DT.data.ar);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handlegetban = async () => {
        try {
            const ser = await getbanService();
            setMusicSongs(ser.DT.artist);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handSongsearch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setMusicSongs(ser.DT.data.songs);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handPlaylistsearch = async (e) => {
        try {
            const ser = await adminSearchPlaylistService(e.target.value);
            setMusicSongs(ser.DT.data.Playlist);
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
        itemsPerPage,
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
        handSongsearch,
        handPlaylistsearch,
    };
};

export default useSingerAdmin;
