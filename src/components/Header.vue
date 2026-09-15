<script setup>
import { ref, watch } from 'vue';

const searchBar = ref('');

watch(() => searchBar.value, (newValue) => {
    console.log(newValue);
});

</script>
<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <header>
        <img class="logo-image" src="/images/bass-clef-image.png" alt="Logotipo">
        <div class="navigation-search-container">
            <i class="back-btn fa-solid fa-angle-left"></i>
            <div href="" class="navigation-home-container">
                <i class="home-btn fa-solid fa-house"></i>
            </div>
            <div class="navigation-input-search-container">
                <v-text-field class="v-text-field" label="Busque suas músicas" v-model="searchBar" single-line
                    hide-details persistent-hint variant="outlined" density="compact" />
                <i class="search-btn fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <img src="/images/user-image-example.png" alt="User Image">
    </header>
</template>

<style scoped>
header {
    background-color: #0F0F0F;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
}

header .logo-image {
    height: 40px;
    width: 40px;
    object-fit: cover;
}

header .navigation-search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}


header .navigation-home-container {
    background-color: #2F2F2F;
    height: 38px;
    width: 38px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0 0;
}

header .navigation-back-container {
    border-radius: 20px;
    height: fit-content;
    display: flex;
}

header .back-btn {
    font-size: 22px;
    color: #D9D9D9;
}

header .home-btn {
    font-size: 18px;
    color: #D9D9D9;
}

header .v-text-field {
    width: 400px;
    border: 1px solid #363636;
    color: #D9D9D9;
    background-color: #1E1E1E;
    border-radius: 20px;
}

header .v-text-field:deep(.v-field-label) {
    font-size: 13px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    margin-left: 40px;
}

header .v-text-field:deep(*) {
    border: none;
}

header .v-text-field:deep(.v-field__input) {
    margin-left: 25px;
}

header .navigation-input-search-container {
    position: relative;
}

header .navigation-input-search-container .search-btn {
    font-size: 16px;
    color: #D9D9D9;
    position: absolute;
    top: 50%;
    left: 11px;
    transform: translateY(-50%);
}
</style>