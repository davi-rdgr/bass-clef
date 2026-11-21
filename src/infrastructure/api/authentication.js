import api from "../http/api";

export default class AuthenticationRepository {
    async register(data) {
        try {
            const response = await api.post(
                '/auth/register', data
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    async login(data) {
        try {
            const response = await api.post(
                '/auth/login', data
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}