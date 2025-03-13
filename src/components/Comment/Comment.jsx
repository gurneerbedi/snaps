import timestampToDate from "../../utils/timestampToDate";
import "./Comment.scss";

const Comment = ({ comment }) => {
    return (
        <article className="comment">
            <hr className="comment__separator" />
            <div className="comment__small-details">
                <span>{comment.name}</span>
                <span>{timestampToDate(comment.timestamp)}</span>
            </div>

            <p className="comment__text">{comment.comment}</p>
        </article>
    );
};

export default Comment;
