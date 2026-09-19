<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const menu = ref(false)
const hints = ref(true)
</script>
<template>
    <div>
        <v-menu v-model="menu" :close-on-content-click="false" location="end">
            <template v-slot:activator="{ props }">
                <v-btn class="btn" v-bind="props">
                    <img src="/images/user-image-example.png" alt="User Image">
                </v-btn>
            </template>

            <v-card class="vcard" min-width="300">
                <v-list class="bg">
                    <v-list-item>
                        <div class="user-info">
                            <img src="/images/user-image-example.png" alt="User Image" class="avatar">
                            <div>
                                <p class="title-text">Davi Rodeghiero</p>
                                <p class="subtitle-text">Menu</p>
                            </div>
                        </div>
                    </v-list-item>
                </v-list>

                <v-divider color="warning"></v-divider>

                <v-list class="bg">
                    <v-list-item class="item">
                        Perfil
                    </v-list-item>
                    <v-list-item class="item">
                        Conta
                    </v-list-item>
                    <v-list-item class="item">
                        Configurações
                    </v-list-item>

                    <v-list-item>
                        <div class="switch-row">
                            <span>Manter conectado</span>
                            <v-switch v-model="hints" color="#EB5160" hide-details></v-switch>
                        </div>
                    </v-list-item>
                </v-list>

                <v-card-actions class="card bg">
                    <router-link to="/login">
                        <v-btn class="btn" color="#EB5160" variant="text" @click="menu = false">
                            Sair da conta
                        </v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>
<style scoped>
.bg {
    background-color: #16161A;
    box-shadow: 0px 22px 48px 0px rgba(0, 0, 0, 0.6);
    border: 1px solid #2A2A31;
}

.btn {
    width: fit-content;
    height: fit-content;
    min-width: 0;
    min-height: 0;
    padding: 0;
    margin: 0;
    border-radius: 900px;
}

.line {
    border-top: 1px solid #1E1E1E;
    color: #1E1E1E;
}

.item {
    font-size: 13px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    padding: 10px 0;
    cursor: pointer;
    margin: 0 5px;
    border-radius: 9px !important;
    min-height: inherit;
}

.item:hover {
    color: #F2555E;
    background-color: #1E1E25;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.title-text {
    font-size: 15px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    margin: 0;
}

.subtitle-text {
    font-size: 13px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #A0A0A5;
    margin: 0;
}

.card .btn {
    font-size: 13px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #F2555E;
    text-transform: none;
}

.switch-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    width: 100%;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    min-height: inherit;
}
</style>