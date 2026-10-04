import api from "../http/api";

export default class AuthenticationRepository {
    async register(data) {
        try {
            const response = await api.post(
                '/user/auth/register', data
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    async login(data) {
        try {
            const response = await api.post(
                '/user/auth/login', data
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}