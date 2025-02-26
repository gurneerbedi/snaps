import Tag from "../Tag/Tag";
import "./PhotoCard.scss";

const PhotoCard = ({ photo }) => {
    return (
        <article className="photo-card">
            <div className="photo-card__photo">
                <img
                    src={photo.photo}
                    className="photo-card__image"
                    alt={`Photo by ${photo.photographer}`}
                />
                <label className="photo-card__photographer">
                    {photo.photographer}
                </label>
            </div>
            <div className="photo-card__tags">
                {photo.tags.map((tag) => (
                    <Tag
                        key={tag}
                        text={tag}
                        clickable={false}
                        className="photo-card__tag"
                    />
                ))}
            </div>
        </article>
    );
};

export default PhotoCard;
