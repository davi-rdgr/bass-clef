<script setup>

</script>

<template>
    <aside>
        <div class="library-header">
            <span>
                Biblioteca
            </span>
            <a class="">
                <i class="plus-btn fa-solid fa-plus"></i>
            </a>
        </div>
        <div class="library-content">
            <nav>
                <ul>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-1.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">Favoritas</span>
                            <span class="library-subtitle">Playlist | 34 músicas</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-7.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">Supercombo</span>
                            <span class="library-subtitle">Artista</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-4.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">Toxicity</span>
                            <span class="library-subtitle">Álbum | System of a Down</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-2.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">The Grey Chapter</span>
                            <span class="library-subtitle">Álbum | Slipknot</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-5.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">The Dark Side of the Moon</span>
                            <span class="library-subtitle">Álbum | Pink Floyd</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-3.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">Selvagens à Procura de Lei</span>
                            <span class="library-subtitle">Artista</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-6.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">Guns And Roses</span>
                            <span class="library-subtitle">Artista</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-2.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">The Grey Chapter</span>
                            <span class="library-subtitle">Álbum | Slipknot</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-5.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">The Dark Side of the Moon</span>
                            <span class="library-subtitle">Álbum | Pink Floyd</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-3.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">Selvagens à Procura de Lei</span>
                            <span class="library-subtitle">Artista</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                    <li>
                        <div class="library-artist-image">
                            <img src="/images/example-6.png" alt="Álbum">
                        </div>
                        <div class="library-artist-info">
                            <span class="library-title">Guns And Roses</span>
                            <span class="library-subtitle">Artista</span>
                        </div>
                        <div class="play-content">
                            <i class="play-btn fa-solid fa-play"></i>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>

</template>

<style scoped>
aside {
    /* max-width: 339px; */
    height: 100%;
    width: 35%;
    background-color: #0F0F0F;
    padding: 15px;
    overflow-x: hidden;
}

aside .library-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

aside .library-header span {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
}

aside .library-header a {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    background-color: #2F2F2F;
    padding: 8px 20px;
    text-decoration: none;
    border-radius: 20px;
}

aside .library-header .plus-btn {
    font-size: 12px;
    color: #D9D9D9;
    display: block;
}

aside .library-artist-image {
    display: flex;
}

aside .library-content nav {
    margin-top: 13px;
}

aside .library-content ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

aside .library-content li {
    display: flex;
    flex-direction: row;
    gap: 10px;
    position: relative;
    overflow: hidden;
}

aside .library-content .library-title {
    font-size: 16px;
    font-weight: 800;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .library-content .library-subtitle {
    font-size: 10px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #B7999C;
    display: block;
}

aside .play-content {
    position: absolute;
    top: 50%;
    left: 110%;
    transform: translate(-50%, -50%);
    transition: all ease 0.3s;
    display: flex;
    align-items: center;
    background-color: #EB5160;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

aside .play-content .play-btn {
    color: #ffffff;
    font-size: 16px;
    display: block;
}


aside .library-content li:hover .play-content {
    left: 90%;
}

aside .library-artist-info {
    line-height: 100%;
}

::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

/* ::-webkit-scrollbar-track {
    background: #1e1e1e;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #888;
} */
</style>