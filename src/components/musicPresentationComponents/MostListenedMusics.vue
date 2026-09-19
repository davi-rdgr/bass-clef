<script setup>
</script>

<template>
    <section>
        <article>
            <div class="artist-image">
                <img src="/images/example-1.png" alt="Artist Image">
            </div>
            <div class="artist-name">
                <span>Favoritas</span>
            </div>
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
        </article>
        <article>
            <div class="artist-image">
                <img src="/images/example-7.png" alt="Artist Image">
            </div>
            <div class="artist-name">
                <span>Supercombo</span>
            </div>
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
        </article>
        <article>
            <div class="artist-image">
                <img src="/images/example-5.png" alt="Artist Image">
            </div>
            <div class="artist-name">
                <span>The Dark Side of The Moon</span>
            </div>
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
        </article>
        <article>
            <div class="artist-image">
                <img src="/images/example-6.png" alt="Artist Image">
            </div>
            <div class="artist-name">
                <span>Guns and Roses</span>
            </div>
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
        </article>
        <article>
            <div class="artist-image">
                <img src="/images/example-10.png" alt="Artist Image">
            </div>
            <div class="artist-name">
                <span>Cracker Island</span>
            </div>
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
        </article>
        <article>
            <div class="artist-image">
                <img src="/images/example-8.png" alt="Artist Image">
            </div>
            <div class="artist-name">
                <span>Machine Head</span>
            </div>
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
        </article>
        <article>
            <div class="artist-image">
                <img src="/images/example-3.png" alt="Artist Image">
            </div>
            <div class="artist-name">
                <span>Selvanges à Procura de Lei</span>
            </div>
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
        </article>
        <article>
            <div class="artist-image">
                <img src="/images/example-9.png" alt="Artist Image">
            </div>
            <div class="artist-name">
                <span>Black Sabbath</span>
            </div>
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
        </article>
    </section>
</template>

<style scoped>
section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 15px;
}

section article {
    display: flex;
    flex-direction: row;
    height: 50px;
    background-color: rgba(15, 15, 15, 0.7);
    border-radius: 10px 5px 5px 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

section .artist-image img {
    height: 50px;
    width: 50px;
    object-fit: cover;
}

section .artist-name {
    font-size: 13px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    line-height: 100%;
    padding: 5px;
}

section .play-content {
    position: absolute;
    top: 50%;
    left: 110%;
    transform: translate(-50%, -50%);
    transition: all ease 0.3s;
    display: flex;
    align-items: center;
    background-color: #EB5160;
    width: 35px;
    height: 35px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

section .play-content .play-btn {
    color: #ffffff;
    font-size: 16px;
    display: block;
}

section article:hover .play-content {
    left: 90%;
}
</style>