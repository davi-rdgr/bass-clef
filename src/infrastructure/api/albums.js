import api from "../http/api";

export default class AlbumRepository {
    async getAlbumTracks(id) {
        try {
            const response = await api.get(
                `/albums/${id}/tracks`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}