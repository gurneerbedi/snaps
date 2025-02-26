import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoCardList.scss";

const PhotoCardList = ({ filter }) => {
    let filteredPhotos = photos;
    if (filter) {
        filteredPhotos = filteredPhotos.filter((p) => p.tags.includes(filter));
    }
    return (
        <main className="photo-card-list">
            {filteredPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </main>
    );
};

export default PhotoCardList;
