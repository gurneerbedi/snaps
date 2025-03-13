import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getPhotos = async () => {
    try {
        const { data } = await axios.get(`${API_URL}/photos`);
        return data;
    } catch (e) {
        console.error(e);
    }
};

export const getPhoto = async (photoId) => {
    try {
        const { data } = await axios.get(`${API_URL}/photos/${photoId}`);
        return data;
    } catch (e) {
        console.error(e);
    }
};

export const getTags = async () => {
    try {
        const { data } = await axios.get(`${API_URL}/tags`);
        return data;
    } catch (e) {
        console.error(e);
    }
};

export const postComment = async (photoId, name, comment) => {
    try {
        const { data } = await axios.post(
            `${API_URL}/photos/${photoId}/comments`,
            {
                name,
                comment,
            }
        );
        return data;
    } catch (e) {
        console.error(e);
    }
};
