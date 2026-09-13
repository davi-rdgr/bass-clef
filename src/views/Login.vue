<script setup>
</script>
<template>
    <main>
        <aside>
            <div class="logo">
                <img src="/public/images/bass-clef-image.png" alt="Bass Clef Logo">
                <h3>
                    CLAVE
                </h3>
            </div>
            <div class="titles">
                <h1>
                    Sua biblioteca, do jeito que você ouve.
                </h1>
                <h2>
                    Playlists, álbuns e artistas favoritos em um só lugar. Entre para continuar de onde parou.
                </h2>
            </div>
            <ul>
                <li>
                    Sugestões Fy
                </li>
                <li>
                    Playlists
                </li>
                <li>
                    Recomendações
                </li>
                <li>
                    Recentemente
                </li>
            </ul>
        </aside>
    </main>
</template>

<style scoped>
main {
    background: #0A0A0C;
    min-height: 100dvh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

aside {
    border-radius: 14px;
    max-width: 510px;
    width: 100%;
    background: linear-gradient(170deg, #f2555e 0%, #c0414c 34%, #5d2730 64%, #17151a 100%);
    padding: 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo img {
    width: 36px;
}

.logo h3 {
    font-size: 15px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
}

.titles {
    padding: 150px 0;
}

.titles h1 {
    font-size: 40px;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
}

.titles h2 {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFFDB;
}

ul {
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

ul li {
    padding: 7px 14px;
    background-color: #00000073;
    border-radius: 900px;
    width: fit-content;
}
</style>