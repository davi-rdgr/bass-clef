import { defineStore } from "pinia";
import AuthenticationRepository from "@/infrastructure/api/authentication";
import { ref, computed } from "vue";

export const useAuthStore = defineStore('authStore', () => {
    const repository = new AuthenticationRepository();

    const token = ref(localStorage.getItem('token'));
    const user = ref(null);
    const isAuthenticated = computed(() => !!token.value);

    const login = async (credentials) => {
        const data = await repository.login(credentials);
        token.value = data.token;
        user.value = data.user;
        localStorage.setItem('token', data.token);
    };

    const register = async (payload) => {
        const data = await repository.register(payload);
        token.value = data.token;
        user.value = data.user;
        localStorage.setItem('token', data.token);
    };

    const logout = () => {
        token.value = null;
        user.value = null;
        localStorage.removeItem('token');
    }


    return { token, user, isAuthenticated, login, register, logout };
});