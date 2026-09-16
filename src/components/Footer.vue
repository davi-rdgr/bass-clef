<script setup>
/* botar um svg ou lottie de um disco girando em cima da capa do álbum */
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <footer>
        <div class="player-footer">
            <div class="player-footer-top">
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
                <div class="volume-footer">
                    <i class="speaker-btn fa-solid fa-volume-high"></i>
                    <v-slider class="v-slider-volume" hide-details></v-slider>
                </div>
            </div>
            <div class="player-footer-bottom">
                <span>0:00</span>
                <v-slider class="v-slider-duration" hide-details></v-slider>
                <span>3:45</span>
            </div>
        </div>
        <div class="visualizer-footer">
            <div class="visualizer-info">
                <div class="visualizer-info-text">
                    <span class="visualizer-album">The Dark Side of the Moon</span>
                    <span class="visualizer-song">The Great Gig in The Sky</span>
                    <span class="visualizer-artist">Pink Floyd</span>
                </div>
                <div class="visualizer-options">
                        <i class="deslike-btn fa-solid fa-ban"></i>
                        <i class="add-btn fa-solid fa-circle-plus"></i>
                        <i class="full-btn fa-solid fa-expand"></i>
                </div>
            </div>
            <div class="visualizer-image">
                <img src="/images/example-image.png" alt="Music Image">
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #0F0F0F;
    padding:20px;
    border-top: 1px solid #1E1E1E;
}

footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

footer a {
    display: inline-flex;
}

footer .player-footer {
    max-width: 517px;
    width: 100%;

}

footer .player-footer-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 59px;
}

footer .player-tools {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
}

footer .volume-footer .speaker-btn,
footer .player-tools .repeat-btn,
footer .player-tools .random-btn,
footer .player-tools .previous-btn,
footer .player-tools .next-btn {
    color: #D9D9D9;
    font-size: 16px;
}

footer .play-content {
    background-color: #D9D9D9;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer .play-content .play-btn {
    color: #0F0F0F;
    font-size: 16px;
    display: block;
}


footer .player-tools>div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

footer .volume-footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}

footer .player-footer-bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
}

footer .player-footer-bottom span {
    font-size: 10px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
}

footer .v-slider-volume:deep(.v-slider-track__fill),
footer .v-slider-volume:deep(.v-slider-thumb__surface),
footer .v-slider-duration:deep(.v-slider-track__fill),
footer .v-slider-duration:deep(.v-slider-thumb__surface) {
    background-color: #EB5160 !important;
}

footer .v-slider-volume:deep(.v-slider-track__background),
footer .v-slider-volume:deep(.v-slider.v-input--horizontal .v-slider-track),
footer .v-slider-duration:deep(.v-slider-track__background),
footer .v-slider-duration:deep(.v-slider.v-input--horizontal .v-slider-track) {
    background-color: #B7999C !important;
    opacity: 1 !important;
}

footer .v-slider-volume:deep(.v-slider-thumb),
footer .v-slider-duration:deep(.v-slider-thumb) {
    --v-slider-thumb-position: 46.34146341463415%;
    --v-slider-thumb-size: 12px !important;
}

footer .v-slider-volume:deep(.v-slider.v-input--horizontal),
footer .v-slider-duration:deep(.v-slider.v-input--horizontal) {
    margin: 0px;
    margin-inline: 0px;
}

footer .visualizer-footer {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

footer .visualizer-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

footer .visualizer-info-text {
    line-height: 100%;
}

footer .visualizer-info-text span {
    display: block;
    text-align: right;
}

footer .visualizer-album {
    font-size: 12px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
}

footer .visualizer-song {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
}

footer .visualizer-artist {
    font-size: 14px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    margin-top: 6px;
}

footer .visualizer-options {
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 2px;
}

footer .visualizer-options .deslike-btn,
footer .visualizer-options .add-btn {
    color: #D9D9D9;
    font-size: 15px;
}

footer .visualizer-options .full-btn {
    color: #D9D9D9;
    font-size: 20px;
}

footer .visualizer-options a:nth-child(3) {
    margin-left: 6px;
}

footer .visualizer-options a:nth-child(2) {
    margin-left: 3px;
}

footer .visualizer-image img {
    height: 80px;
    width: 80px;
    object-fit: cover;
}
</style>