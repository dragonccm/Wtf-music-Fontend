import "../../../css/comment.scss"
import { useState, useEffect, useCallback } from "react";
import CommentForm from "./commentForm";
import Comment from "./comment";
import { NavLink } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import { socket } from '../../../socket';
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi,
    deleteComment as deleteCommentApi,
    reportComment as reportCommentApi,
} from "./api";

const Comments = ({ commentsUrl, currentUser, id }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [rootComments, setRootComments] = useState(null);
    const [page, setPage] = useState(1); // Bắt đầu từ trang 1
    const [hasMore, setHasMore] = useState(true); // Giả sử còn dữ liệu để tải


    // const getReplies = (commentId) =>
    //     backendComments
    //         .filter((backendComment) => backendComment.parentId === commentId && backendComment.parentId)
    //         .sort(
    //             (a, b) =>
    //                 new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    //         );
    const handleNewComment = useCallback((newComment) => {
        console.log('newComment', newComment);
        // Logic xử lý sự kiện new_comment giữ nguyên từ đoạn code trước
        if (newComment.parentId) {
            let commentIndex = backendComments.findIndex(comment => comment._id === newComment.parentId);
            console.log(commentIndex);

            if (commentIndex !== -1) {
                // Tạo một bản sao của state hiện tại
                let updatedComments = [...backendComments];

                // Kiểm tra nếu chưa có mảng reply thì tạo mới
                if (!updatedComments[commentIndex].reply) {
                    updatedComments[commentIndex].reply = [];
                }

                // Thêm comment mới vào mảng reply của comment tương ứng
                updatedComments[commentIndex].reply.push(newComment);

                // Cập nhật state với mảng đã được cập nhật
                setBackendComments(updatedComments); // Giả sử setBackendComments là function cập nhật state từ useState
            } else {
                console.log("Không tìm thấy comment với _id:", newComment.parentId);
            }
        } else {
            setBackendComments([newComment, ...backendComments]);
        }
    }, [backendComments, setBackendComments]);
    const handleEditComment = useCallback((newComment) => {
        console.log('newComment', newComment);
        // Logic xử lý sự kiện new_comment giữ nguyên từ đoạn code trước
        const updatedBackendComments = backendComments.map((backendComment) => {
            if (backendComment._id === newComment._id) {
                return { ...backendComment, content: newComment.content };
            }
            return backendComment;
        });
        setBackendComments(updatedBackendComments);
    }, [backendComments, setBackendComments]);
    const handleDeleteComment = useCallback((newComment) => {
        console.log('newComment', newComment);
        // Logic xử lý sự kiện new_comment giữ nguyên từ đoạn code trước
        let commentmain = backendComments.findIndex(comment => comment._id === newComment._id);
        if (commentmain !== -1) {
            const updatedBackendComments = backendComments.filter(
                (backendComment) => backendComment._id !== newComment._id
            );
            console.log('lalalalalal');
            console.log(commentmain);

            setBackendComments(updatedBackendComments);
        } else {
            let commentIndex = backendComments.findIndex(comment => comment._id === newComment.parentId);
            if (commentIndex !== -1) {
                // Tạo một bản sao của state hiện tại
                let updatedComments = [...backendComments];
                console.log('22222222222222');

                // Xác định chỉ số của reply trong mảng reply của comment tương ứng
                let replyIndex = updatedComments[commentIndex].reply.findIndex(reply => reply._id === newComment._id);

                // Kiểm tra nếu tìm thấy reply
                if (replyIndex !== -1) {
                    // Xóa reply khỏi mảng
                    updatedComments[commentIndex].reply.splice(replyIndex, 1);

                    // Cập nhật state với mảng đã được cập nhật
                    setBackendComments(updatedComments); // Giả sử setBackendComments là function cập nhật state từ useState
                } else {
                    console.log("Không tìm thấy reply với _id:", newComment._id);
                }
            } else {
                console.log("Không tìm thấy comment với _id:", newComment._id);
            }
        }
    }, [backendComments, setBackendComments]);
    useEffect(() => {
        socket.on('new_comment', handleNewComment);

        // Hủy đăng ký khi component unmount hoặc phụ thuộc thay đổi
        return () => {
            socket.off('new_comment', handleNewComment);
        };
    }, [handleNewComment]); // Phụ thuộc chỉ bao gồm handleNewComment
    useEffect(() => {
        socket.on('edit_comment', handleEditComment);

        // Hủy đăng ký khi component unmount hoặc phụ thuộc thay đổi
        return () => {
            socket.off('edit_comment', handleEditComment);
        };
    }, [handleNewComment]); // Phụ thuộc chỉ bao gồm handleNewComment
    useEffect(() => {
        socket.on('delete_comment', handleDeleteComment);

        // Hủy đăng ký khi component unmount hoặc phụ thuộc thay đổi
        return () => {
            socket.off('delete_comment', handleDeleteComment);
        };
    }, [handleNewComment]); // Phụ thuộc chỉ bao gồm handleNewComment
    const addComment = (text, parentId, type) => {
        console.log(parentId);

        createCommentApi(text, parentId, id).then((comment) => {
            if (comment) {
                // if (type === 'reply') {
                //     let commentIndex = backendComments.findIndex(comment => comment._id === parentId);
                //     if (commentIndex !== -1) {
                //         console.log(parentId);

                //         // Tạo một bản sao của state hiện tại
                //         let updatedComments = [...backendComments];

                //         // Kiểm tra nếu chưa có mảng reply thì tạo mới
                //         if (!updatedComments[commentIndex].reply) {
                //             updatedComments[commentIndex].reply = [];
                //         }

                //         // Thêm comment mới vào mảng reply của comment tương ứng
                //         updatedComments[commentIndex].reply.push(comment);

                //         // Cập nhật state với mảng đã được cập nhật
                //         setBackendComments(updatedComments); // Giả sử setBackendComments là function cập nhật state từ useState
                //     } else {
                //         console.log("Không tìm thấy comment với _id:", parentId);
                //     }
                // } else {

                //     setBackendComments([comment, ...backendComments]);
                // }
                console.log(backendComments);

                setActiveComment(null);
            }
            else {
                toast.warning('Đã có lỗi xảy ra !!');
            }

        });
    };

    const updateComment = (text, commentId) => {
        updateCommentApi({ text, commentId }).then((response) => {
            if (response) {

                // const updatedBackendComments = backendComments.map((backendComment) => {
                //     if (backendComment._id === commentId) {
                //         return { ...backendComment, content: text };
                //     }
                //     return backendComment;
                // });
                // setBackendComments(updatedBackendComments);
                setActiveComment(null);
            } else {
                toast.warning('Đã có lỗi xảy ra !!');
            }
        });
    };
    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentApi(commentId).then((response) => {
                if (response) {
                    // let commentmain = backendComments.findIndex(comment => comment._id === commentId);
                    // if (commentmain !== -1) {
                    //     const updatedBackendComments = backendComments.filter(
                    //         (backendComment) => backendComment._id !== commentId
                    //     );
                    //     console.log('lalalalalal');
                    //     console.log(commentmain);

                    //     setBackendComments(updatedBackendComments);
                    // } else {
                    //     let commentIndex = backendComments.findIndex(comment => comment._id === response);
                    //     if (commentIndex !== -1) {
                    //         // Tạo một bản sao của state hiện tại
                    //         let updatedComments = [...backendComments];
                    //         console.log('22222222222222');

                    //         // Xác định chỉ số của reply trong mảng reply của comment tương ứng
                    //         let replyIndex = updatedComments[commentIndex].reply.findIndex(reply => reply._id === commentId);

                    //         // Kiểm tra nếu tìm thấy reply
                    //         if (replyIndex !== -1) {
                    //             // Xóa reply khỏi mảng
                    //             updatedComments[commentIndex].reply.splice(replyIndex, 1);

                    //             // Cập nhật state với mảng đã được cập nhật
                    //             setBackendComments(updatedComments); // Giả sử setBackendComments là function cập nhật state từ useState
                    //         } else {
                    //             console.log("Không tìm thấy reply với _id:", commentId);
                    //         }
                    //     } else {
                    //         console.log("Không tìm thấy comment với _id:", commentId);
                    //     }
                    // }
                }
            });
        } else {
            toast.warning('Đã có lỗi xảy ra !!');
        }
    };
    const reportComment = (commentId) => {

        reportCommentApi(commentId).then((response) => {
            if (response) {
                if (response.EC === "0") {
                    toast.success(response.EM);
                } else if (response.EC === "2") {
                    toast.warning(response.EM);
                }
            } else {
                toast.warning('Đã có lỗi xảy ra !!');
            }
        });

    };
    const handleMore = (e) => {
        e.preventDefault();
        console.log(page);

        setPage((prevPage) => prevPage + 1);

    }
    useEffect(() => {
        if (hasMore) {
            getCommentsApi(id, page).then((data) => {
                if (data.hasMore === false) {
                    setHasMore(false);
                }
                if (backendComments.length > 0) {

                    setBackendComments((prevComments) => [...prevComments, ...data.comments]);
                } else {
                    setBackendComments(data.comments)
                }

                console.log(backendComments);

            });
        }
    }, [page, hasMore]);



    useEffect(() => {
        const root = backendComments.filter(
            (backendComment) => !backendComment.parentId || backendComment.parentId === null
        );
        console.log(root);

        setRootComments(root);
        console.log(backendComments);
        console.log(rootComments);


    }, [backendComments]);
    useEffect(() => {

        console.log(rootComments);


    }, [rootComments]);
    // useEffect(() => {
    //     // Khi nhận được bình luận mới từ server
    //     socket.emit('send_message', { comment: 'ok chưa' });

    //     // Dọn dẹp khi component unmount
    //     return () => {
    //       socket.off('send_message');
    //     };
    //   }, []);
    return (
        <div className="comments">
            <h3 className="comments-title">Bình luận</h3>
            <div className="main-comment">
                {currentUser.id ?

                    <CommentForm submitLabel="Post"
                        handleSubmit={addComment}
                        hasCancelButton={false}
                        currentUser={currentUser}
                    />
                    :
                    <div className="comment-noUser">
                        <div className="comment-wrap">
                            <p>Hãy đăng nhập để có thể bình luận</p>
                            <div className="group_btn">
                                <button className="btn btn-primary">
                                    <NavLink to={'/login'} className='nav-link'>
                                        Log In
                                    </NavLink>
                                </button>
                                <button className="btn btn-dark">
                                <NavLink to={'/register'} className='nav-link'>
                                        Sign Up
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="comments-container">
                {rootComments && rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment._id}
                        comment={rootComment}
                        replies={rootComment.reply}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        reportComment={reportComment}
                        updateComment={updateComment}
                        currentUser={currentUser}
                    />
                ))}
            </div>
            {hasMore && <div className="comment_button">
                <button onClick={(e) => handleMore(e)}>Thêm bình luận...</button>
            </div>}
        </div>
    );
};

export default Comments;