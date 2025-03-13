import "./StandalonePhotoCard.scss";
import PhotoCardImage from "../PhotoCardImage/PhotoCardImage";
import Tag from "../Tag/Tag";
import timestampToDate from "../../utils/timestampToDate";
import LikeIcon from "../../assets/images/icons/Like_Outline.svg";

const StandalonePhotoCard = ({ photo }) => {
    return (
        <article className="standalone-photo-card">
            <PhotoCardImage photo={photo} />
            <div className="standalone-photo-card__tags">
                {photo.tags.map((tag) => (
                    <Tag
                        key={tag}
                        text={tag}
                        clickable={false}
                        jumbo
                        className="standalone-photo-card__tag"
                    />
                ))}
            </div>
            <div className="standalone-photo-card__details">
                <div className="standalone-photo-card__detail">
                    <img src={LikeIcon} alt="Unfilled heart icon" />
                    {`${photo?.likes} Likes`}
                </div>
                <div className="standalone-photo-card__detail standalone-photo-card__detail--last">
                    Photo by&nbsp; {photo.photographer}
                </div>
                <div className="standalone-photo-card__detail">
                    {timestampToDate(photo.timestamp)}
                </div>
            </div>
        </article>
    );
};

export default StandalonePhotoCard;
