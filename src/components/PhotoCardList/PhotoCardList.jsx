import { useEffect, useState } from "react";
import * as apiService from "../../services/apiService";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoCardList.scss";

const PhotoCardList = ({ filter }) => {
    const [photos, setPhotos] = useState([]);
    let filteredPhotos = photos;

    useEffect(() => {
        async function getPhotos() {
            const data = await apiService.getPhotos();
            setPhotos(data);
        }

        getPhotos();
    }, []);

    if (filter) {
        filteredPhotos = photos.filter((p) => p.tags.includes(filter));
    }

    return !!filteredPhotos && filteredPhotos.length > 0 ? (
        <main className="photo-card-list">
            {filteredPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </main>
    ) : (
        <div>Loading</div>
    );
};

export default PhotoCardList;
