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
}