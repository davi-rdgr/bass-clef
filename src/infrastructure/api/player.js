import api from "../http/api";

export default class PlayerRepository {
    async getTrack(id, data) {
        try {
            const response = await api.get(
                `/track/${id}/preview?name=${data.name}&artist=${data.artist}&durationMs=${data.durationMs}`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}