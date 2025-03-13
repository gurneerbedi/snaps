import Button from "../Button/Button";
import "./CommentForm.scss";
import { useState } from "react";
import { postComment } from "../../services/apiService";

const CommentForm = ({ photoId, onCommentPost }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [formState, setFormState] = useState("clean");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !comment) {
            setFormState("error");
            return;
        }

        try {
            await postComment(photoId, name, comment);
            onCommentPost();
            setName("");
            setComment("");
            setFormState("clean");
        } catch (e) {
            console.error(e);
        }
    };

    const showNameError = formState === "error" && !name;
    const showCommentError = formState === "error" && !comment;

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label className="form-field__label" htmlFor="name">
                    Name
                </label>
                <input
                    className={`form-field__input ${
                        showNameError ? "form-field__input--error" : ""
                    }`}
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <small className="form-field__error">
                    {showNameError && "Name is a required field."}
                </small>
            </div>
            <div className="form-field">
                <label className="form-field__label" htmlFor="comment">
                    Comment
                </label>
                <textarea
                    className={`form-field__textarea ${
                        showCommentError ? "form-field__textarea--error" : ""
                    }`}
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <small className="form-field__error">
                    {showCommentError && "Comment is a required field."}
                </small>
            </div>
            <Button
                variant="primary"
                className="comment-form__submit"
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
};

export default CommentForm;
