import Comment from "../Comment/Comment";
import "./CommentList.scss";

const CommentList = ({ comments }) => {
    return (
        <section className="comment-list">
            <h2 className="comment-list__header">{`${comments.length} Comment${
                comments.length !== 1 ? "s" : ""
            }`}</h2>
            {comments.map((c) => (
                <Comment key={c.id} comment={c} />
            ))}
        </section>
    );
};

export default CommentList;
