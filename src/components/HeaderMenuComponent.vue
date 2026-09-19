<script setup>
import { ref } from 'vue'

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
                    <v-list-item prepend-avatar="/images/user-image-example.png"
                        subtitle="Menu" title="Davi Rodeghiero">
                    </v-list-item>
                </v-list>

                <v-divider color="warning"></v-divider>

                <v-list class="bg">
                    <v-list-item>
                        Perfil
                    </v-list-item>
                    <v-list-item>
                        Conta
                    </v-list-item>
                    <v-list-item>
                        Configurações
                    </v-list-item>

                    <v-list-item>
                        <v-switch v-model="hints" color="#EB5160 " label="Manter conectado" hide-details></v-switch>
                    </v-list-item>
                </v-list>

                <v-card-actions class="bg">
                    <v-btn color="#EB5160" variant="text" @click="menu = false">
                        Sair da conta
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>
<style scoped>
    .bg {
        background-color: #0F0F0F;
        color: white;
    }
    .btn {
        width: fit-content;
        height: fit-content;
        min-width: 0;
        min-height: 0;
        padding: 0;
        margin: 0;
        border-radius: 900px;
        background-color: #000000;
    }

    .btn img {
        display: block;
    }

    .line {
            border-top: 1px solid #1E1E1E;
            color: #1E1E1E;
    }
</style>