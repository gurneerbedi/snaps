import "./PhotoCardImage.scss";

const PhotoCardImage = ({ showLabel = false, photo }) => {
    return (
        <div className="photo-card-image">
            <img
                src={photo.photo}
                className="photo-card-image__photo"
                alt={`Photo by ${photo.photographer}`}
            />
            {showLabel && (
                <label className="photo-card-image__photographer">
                    {photo.photographer}
                </label>
            )}
        </div>
    );
};

export default PhotoCardImage;
