import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import * as apiService from "../../services/apiService";
import { useEffect, useState } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import "./PhotoPage.scss";
import StandalonePhotoCard from "../../components/StandalonePhotoCard/StandalonePhotoCard";
import back from "../../assets/images/icons/Arrow_Forest-Green.svg";
import Button from "../../components/Button/Button";

const PhotoPage = () => {
    const { photoId } = useParams();
    const [photoDetails, setPhotoDetails] = useState();
    const navigate = useNavigate();

    const getPhotoDetails = async () => {
        const data = await apiService.getPhoto(photoId);
        data.comments.sort((a, b) => b.timestamp - a.timestamp);
        setPhotoDetails(data);
    };

    useEffect(() => {
        if (!!photoId) {
            getPhotoDetails();
        }
    }, []);

    return (
        <div className="photo-page">
            <Header
                RightSideButton={() => (
                    <Button onClick={() => navigate("/")} variant="neutral">
                        <img src={back} alt="arrow pointing to the left" />
                        Home
                    </Button>
                )}
            />
            <main className="photo-page__main-content">
                {photoDetails && <StandalonePhotoCard photo={photoDetails} />}
                <CommentForm
                    photoId={photoId}
                    onCommentPost={getPhotoDetails}
                />
                {photoDetails && (
                    <CommentList comments={photoDetails.comments} />
                )}
            </main>
        </div>
    );
};

export default PhotoPage;
