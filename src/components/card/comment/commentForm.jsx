import { useState } from "react";

const CommentForm = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = true,
    handleCancel,
    initialText = "",
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
                <a target="_blank" href="/artists/e8e2d915-f910-43cb-a457-f4dc4aafcd9c">

                    <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2149082268791080&amp;height=50&amp;width=50&amp;ext=1727103744&amp;hash=AbY_keqBfdfoITi_bbD1TsTK" alt="userIcon" className="imgdefault" />
                </a>
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