import api from "../http/api";

export default class PlayerRepository {
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
}