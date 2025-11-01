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
                    <a href="#">
                        <img src="/svg/repeat-icon.svg" alt="Repeat">
                    </a>
                    <div class="">
                        <a href="">
                            <img src="/svg/previous-icon.svg" alt="Previous">
                        </a>
                        <a href="">
                            <img src="/svg/play-icon.svg" alt="Play">
                        </a>
                        <a href="">
                            <img src="/svg/next-icon.svg" alt="Next">
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="/svg/random-icon.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="volume-footer">
                    <a href="">
                        <img src="/svg/speaker-icon.svg" alt="Speaker">
                    </a>
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
                    <a href="">
                        <img src="/svg/block-icon.svg" alt="Deslike Music">
                    </a>
                    <a href="">
                        <img src="/svg/add-icon.svg" alt="Add Music">
                    </a>
                    <a href="">
                        <img src="/svg/fullscreen-icon.svg" alt="Fullscreen">
                    </a>
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
    padding: 30px 20px 30px 20px;
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