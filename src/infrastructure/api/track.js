import api from "../http/api";

export default class TrackRepository {
    async getTrack(id, data) {
        try {
            const response = await api.get(
                `/tracks/${id}/preview?name=${data.name}&artist=${data.artist}&durationMs=${data.durationMs}`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getLyrics(id, data) {
        try {
            const response = await api.get(
                `/tracks/${id}/lyrics?name=${data.name}&artist=${data.artist}&album=${data.album}&durationMs=${data.durationMs}`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}