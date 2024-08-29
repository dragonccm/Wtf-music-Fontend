import "../../../css/comment.scss"
import { useState, useEffect } from "react";
import CommentForm from "./commentForm";
import Comment from "./comment";
import { toast, ToastContainer } from "react-toastify";
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi,
    deleteComment as deleteCommentApi,
} from "./api";

const Comments = ({ commentsUrl, currentUserId,id }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [rootComments, setRootComments] = useState(null);
    
    const getReplies = (commentId) =>
        backendComments
            .filter((backendComment) => backendComment.parentId === commentId && backendComment.parentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
    const addComment = (text, parentId) => {
        console.log(parentId);
        
        createCommentApi(text, parentId,id).then((comment) => {
            setBackendComments([comment, ...backendComments]);
            console.log(backendComments);
            
            setActiveComment(null);
        });
    };

    const updateComment = (text, commentId) => {
        updateCommentApi({ text, commentId }).then((response) => {
            if (response) {
                
                const updatedBackendComments = backendComments.map((backendComment) => {
                    if (backendComment._id === commentId) {
                        return { ...backendComment, content: text };
                    }
                    return backendComment;
                });
                setBackendComments(updatedBackendComments);
                setActiveComment(null);
            } else {
                toast.warning('Đã có lỗi xảy ra !!');
            }
        });
    };
    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentApi().then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            });
        }
    };

    useEffect(() => {
        console.log(id);
        
        getCommentsApi(id).then((data) => {
            setBackendComments(data);
            console.log(backendComments);
            
        });
    }, []);
    useEffect(() => {
        const root = backendComments.filter(
            (backendComment) => !backendComment.parentId  || backendComment.parentId === null
        );
        console.log(root);
        
        setRootComments(root);
            console.log(backendComments);
            console.log(rootComments);
            
        
    }, [backendComments]);
    useEffect(() => {
        
            console.log(rootComments);
            
        
    }, [rootComments]);
    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="main-comment">

                <CommentForm submitLabel="Post" handleSubmit={addComment} hasCancelButton={false} />
            </div>
            <div className="comments-container">
                {rootComments && rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment._id}
                        comment={rootComment}
                        replies={getReplies(rootComment._id)}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        currentUserId={currentUserId}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;