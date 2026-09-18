<script setup>
const emits = defineEmits([
    "undoFullscreen"
])
</script>

<template>
    <div class="view">
        <header>
            <h4>
                TOCANDO THE DARK SIDE OF THE MOON
            </h4>
            <div class="btn-content" @click="emits('undoFullscreen')">
                <i class="close-icon fa-solid fa-close"></i>
            </div>
        </header>
        <div class="contents">
            <section class="player">
                <div></div>
                <div>
                    <div class="disco">
                        PF
                    </div>
                    <h2>
                        The Great Gig in the Sky
                    </h2>
                    <h3>
                        Pink Floyd
                    </h3>
                    <div class="player-footer-top">
                        <div class="">
                            <div class="player-tools">
                                <i class="repeat-btn fa-solid fa-repeat"></i>
                                <div class="">
                                    <i class="previous-btn fa-solid fa-backward-step"></i>
                                    <div class="play-content">
                                        <i class="play-btn fa-solid fa-play"></i>
                                    </div>
                                    <i class="next-btn fa-solid fa-forward-step"></i>
                                </div>
                                <div>
                                    <i class="random-btn fa-solid fa-shuffle"></i>
                                </div>
                            </div>
                            <div class="player-footer-bottom">
                                <span>0:00</span>
                                <v-slider class="v-slider-duration" hide-details></v-slider>
                                <span>3:45</span>
                            </div>
                        </div>
                        <div class="volume-footer">
                            <i class="speaker-btn fa-solid fa-volume-high"></i>
                            <v-slider class="v-slider-volume" hide-details></v-slider>
                        </div>
                    </div>
                </div>
                <span class="esc-text">
                    Pressione Esc para voltar
                </span>
            </section>
            <section class="list">
                <span class="title">
                    LETRA
                </span>
                <span class="subtitle">
                    Letra não disponível para esta faixa.
                </span>
                <div class="line"></div>
                <span class="soon">
                    A SEGUIR
                </span>
                <ul class="list-musics">
                    <li>
                        <div class="image">
                            PF
                        </div>
                        <div class="titles">
                            <span class="name">
                                Speak to Me
                            </span>
                            <span class="artist">
                                Pink Floyd
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="image">
                            PF
                        </div>
                        <div class="titles">
                            <span class="name">
                                Speak to Me
                            </span>
                            <span class="artist">
                                Pink Floyd
                            </span>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<style scoped>
.view {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background: linear-gradient(160deg, #201F26 0%, #131218 100%);
    display: flex;
    flex-direction: column;
    z-index: 3;
    padding: 15px 40px;
}

.view header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.view header h4 {
    font-size: 11px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    opacity: 80%;
}

.view header .btn-content {
    height: 40px;
    width: 40px;
    border-radius: 900px;
    background-color: #000000;
    border: 1px solid #FFFFFF47;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.view header .close-icon {
    font-size: 16px;
    color: #ffffff;
}

.view .contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.view .player {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.view .player .disco {
    width: 430px; /* 380px */
    height: 380px;
    border-radius: 14px;
    font-size: 88px;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: #E9E9F2;
    background: linear-gradient(145deg, #2A2930 0%, #141318 100%);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
    opacity: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.view .player h2 {
    font-size: 30px;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    margin: 25px 0 0 0;
}

.view .player h3 {
    font-size: 17px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFFD1;
    margin: 0;
}

.player .player-footer-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 59px;
    margin: 20px 0 0 0;
}

.player .player-tools {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
}

.volume-footer .speaker-btn,
.player-tools .repeat-btn,
.player-tools .random-btn,
.player-tools .previous-btn,
.player-tools .next-btn {
    color: #D9D9D9;
    font-size: 16px;
}

.player .play-content {
    background-color: #D9D9D9;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.player .play-content .play-btn {
    color: #0F0F0F;
    font-size: 16px;
    display: block;
}


.player .player-tools>div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.player .volume-footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}


.player .player-footer-bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.player .player-footer-bottom span {
    font-size: 10px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
}

.v-slider-volume:deep(.v-slider-track__fill),
.v-slider-volume:deep(.v-slider-thumb__surface),
.v-slider-duration:deep(.v-slider-track__fill),
.v-slider-duration:deep(.v-slider-thumb__surface) {
    background-color: #EB5160 !important;
}

.v-slider-volume:deep(.v-slider-track__background),
.v-slider-volume:deep(.v-slider.v-input--horizontal .v-slider-track),
.v-slider-duration:deep(.v-slider-track__background),
.v-slider-duration:deep(.v-slider.v-input--horizontal .v-slider-track) {
    background-color: #B7999C !important;
    opacity: 1 !important;
}

.v-slider-volume:deep(.v-slider-thumb),
.v-slider-duration:deep(.v-slider-thumb) {
    --v-slider-thumb-position: 46.34146341463415%;
    --v-slider-thumb-size: 12px !important;
}

.v-slider-volume:deep(.v-slider.v-input--horizontal),
.v-slider-duration:deep(.v-slider.v-input--horizontal) {
    margin: 0px;
    margin-inline: 0px;
}

.player .esc-text {
    font-size: 11px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF8C;
}

.list {
    background-color: rgba(0, 0, 0, 0.42);
    height: calc(100% - 50px);
    width: 40%;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.55);
}

.list .title {
    font-size: 13px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFFB3;
    display: block;
}

.list .subtitle {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFFB8;
}

.list .line {
    background-color: #FFFFFF;
    opacity: 14%;
    height: 1px;
    width: 100%;
    margin: 10px 0;
}

.list .soon {
    font-size: 14px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFFB8;
}

.list .list-musics {
    margin: 20px 0 0 0;
    list-style: none;
}

.list .list-musics li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    margin: 0 0 15px 0;
}

.list .image {
    width: 42px;
    height: 42px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    color: #E9E9F2;
    background: linear-gradient(145deg, #2A2930 0%, #141318 100%);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
    opacity: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list .list-musics .titles {
    display: flex;
    flex-direction: column;
}

.list .list-musics .titles .name {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
}

.list .list-musics .titles .artist {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFFB3;
}
</style>