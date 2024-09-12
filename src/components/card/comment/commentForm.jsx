import { useState } from "react";
import { NavLink } from "react-router-dom";

const CommentForm = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = true,
    handleCancel,
    initialText = "",
    currentUser
}) => {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="userImg">
                <NavLink to={`/artists/${currentUser.id}`} className='nav-link'>
                    <img src={currentUser.avt} alt="userIcon" referrerPolicy="no-referrer" className="imgdefault" />
                </NavLink>
            </div>
            <div className="emoji-input">
                <input
                    className="comment-form-textarea"
                    value={text}
                    placeholder="Để lại bình luận của bạn..."
                    onChange={(e) => setText(e.target.value)}
                />

            </div>

            {hasCancelButton && (
                <button
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            )}
            <button className="comment-form-button" disabled={isTextareaDisabled}>
                {submitLabel}
            </button>
        </form>
    );
};

export default CommentForm;