import api from "../http/api";

export default class UserRepository {
    async getHome() {
        try {
            const response = await api.get(
                '/user/me'
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}