import api from "../http/api";

export default class ArtistRepository {
    async getTopTracks(id) {
        try {
            const response = await api.get(
                `/artists/${id}/top-tracks`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getArtistAlbums(id) {
        try {
            const response = await api.get(
                `/artists/${id}/albums`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getInfo(id, name, lang) {
        const response = await api.get(`/artists/${id}/info`, {
            params: { name, lang }
        });
        return response.data;
    }

    async getSimilar(id, name, limit) {
        try {
            const response = await api.get(`/artists/${id}/similar`, {
                params: { name, limit }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}