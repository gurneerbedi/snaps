import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";
import "./PhotoCard.scss";

import PhotoCardImage from "../PhotoCardImage/PhotoCardImage";

const PhotoCard = ({ photo }) => {
    return (
        <Link to={`/${photo.id}`} className="photo-card">
            <article>
                <PhotoCardImage showLabel photo={photo} />
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
        </Link>
    );
};

export default PhotoCard;
