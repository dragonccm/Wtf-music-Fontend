import CommentForm from "./commentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faEllipsisVertical, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";

const Comment = ({
    comment,
    replies,
    setActiveComment,
    activeComment,
    updateComment,
    deleteComment,
    reportComment,
    addComment,
    parentId,
    currentUser,
}) => {
    const isEditing =
        activeComment &&
        activeComment.id === comment._id &&
        activeComment.type === "editing";
    const isReplying =
        activeComment &&
        activeComment.id === comment._id &&
        activeComment.type === "replying";
    // const fiveMinutes = 3000000;
    // const [timePassed, setTimePassed] = useState(false);
    const [hidenReply, setHidenReply] = useState(false);
    const canDelete =
        currentUser.id === comment.userId && (!replies || replies.length === 0);
    const canReply = Boolean(currentUser.id);
    const canEdit = currentUser.id === comment.userId;
    const replyId = parentId ? parentId : comment._id;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();


    // useEffect(() => {
    //     const createdAt = new Date(comment.createdAt);
    //     const checkTime = () => {
    //         if (new Date() - createdAt > fiveMinutes) {
    //             setTimePassed(true);
    //         } else {
    //             setTimePassed(false);
    //         }
    //     };

    //     // Kiểm tra lần đầu khi component được render
    //     checkTime();

    //     // Thiết lập timer để kiểm tra mỗi giây
    //     const intervalId = setInterval(checkTime, 1000);

    //     // Dọn dẹp khi component unmount
    //     return () => clearInterval(intervalId);
    // }, [comment.createdAt]);
    return (
        <div key={comment._id} className="comment">
            <div className="comment-image-container">
                <div  className='nav-link'>
                    <img src={comment.userAvt} alt="userIcon" referrerPolicy="no-referrer" />
                </div>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.userName}</div>
                    <div>{createdAt}</div>
                </div>
                {!isEditing && <div className="comment-text">
                    {comment.content}
                    <div className="menu-more">

                        <Popup
                            trigger={<div className="menu-item"> <FontAwesomeIcon icon={faEllipsisVertical} /> </div>}
                            position="left top"
                            on="hover"
                            closeOnDocumentClick
                            mouseLeaveDelay={300}
                            mouseEnterDelay={0}
                            contentStyle={{ padding: '0px', border: 'none' }}
                            arrow={false}
                        >
                            <div className="menu-comment more_action">
                                {canEdit && (
                                    <div
                                        className="comment-action menu-item"
                                        onClick={() =>
                                            setActiveComment({ id: comment._id, type: "editing" })
                                        }
                                    >
                                        Sửa
                                    </div>
                                )}
                                {canDelete && (
                                    <div
                                        className="comment-action menu-item"
                                        onClick={() => deleteComment(comment._id)}
                                    >
                                        Ẩn
                                    </div>
                                )}
                                <div className="menu-item comment-action"
                                    onClick={() => reportComment(comment._id)}>
                                    Báo xấu
                                    
                                </div>

                            </div>
                        </Popup>
                    </div>

                </div>}
                {isEditing && (
                    <CommentForm
                        submitLabel="Update"
                        hasCancelButton={true}
                        initialText={comment.content}
                        handleSubmit={(text) => updateComment(text, comment._id)}
                        handleCancel={() => {
                            setActiveComment(null);
                        }}
                        currentUser={currentUser}
                    />
                )}
                <div className="comment-actions">
                    {canReply && (
                        <div
                            className="comment-action"
                            onClick={() =>
                                setActiveComment({ id: comment._id, type: "replying" })
                            }
                        >
                            <FontAwesomeIcon icon={faReply} />Reply
                        </div>
                    )}

                </div>
                {isReplying && (
                    <CommentForm
                        submitLabel="Reply"
                        handleSubmit={(text) => addComment(text, replyId, 'reply')}
                        handleCancel={() => {
                            setActiveComment(null);
                        }}
                        currentUser={currentUser}
                    />
                )}
                {replies && replies.length > 0 && (
                    <div className="replies">
                        <p className="repstatus" onClick={() => setHidenReply(!hidenReply)}>{hidenReply ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} Xem {replies.length} phản hồi</p>
                    </div>
                )}
                {replies && replies.length > 0 && hidenReply && (
                    <div className="replies">
                        {replies.map((reply) => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                setActiveComment={setActiveComment}
                                activeComment={activeComment}
                                updateComment={updateComment}
                                deleteComment={deleteComment}
                                reportComment={reportComment}
                                addComment={addComment}
                                parentId={comment._id}
                                replies={[]}
                                currentUser={currentUser}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Comment;