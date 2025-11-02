<script setup>
</script>
<template>
    <main>
        <section class="max-width-content">
            <section>
                <nav>
                    <ul>
                        <li>Sugestões fy</li>
                        <li>Playlists</li>
                        <li>Recomendações</li>
                        <li>Recentemente</li>
                        <li>Todas</li>
                    </ul>
                </nav>
            </section>
            <section class="components-content">
                <most-listened-component />
                <suggested-musics-component />
                <suggested-albums-component />
            </section>
        </section>
    </main>
</template>

<style scoped>
main {
    background: linear-gradient(#EB5160 20%, #0F0F0F 80%);
    width: 100%;
    overflow-x: hidden;
}

main .library-artist-info {
    line-height: 100%;
}

::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

.max-width-content {
    width: 100%;
    max-width: 989px;
    margin: 0 auto;
}

main nav {
    margin: 15px 0px 30px 0px;
}

main ul {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 5px;
    list-style: none;
}

main li {
    font-size: 10px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    background-color: #2F2F2F;
    border-radius: 20px;
    padding: 7px 5px;
}

main .components-content {
    margin: 25px 0px;
}
</style>