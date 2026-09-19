<script setup>
import { ref } from 'vue';
/* botar um svg ou lottie de um disco girando em cima da capa do álbum */

const fullscreen = ref(false);
const undoFullscreen = () => {
    fullscreen.value = false;
}

</script>

<template>
    <footer>
        <div class="player-tools">
            <i class="repeat-btn fa-solid fa-repeat"></i>
            <i class="previous-btn fa-solid fa-play fa-flip-horizontal"></i>
            <div class="play-content">
                <i class="play-btn fa-solid fa-pause"></i>
            </div>
            <i class="next-btn fa-solid fa-play"></i>
            <i class="random-btn fa-solid fa-shuffle"></i>
        </div>

        <div class="volume-footer">
            <i class="speaker-btn fa-solid fa-volume-low"></i>
            <v-slider class="v-slider-volume" hide-details></v-slider>
        </div>

        <div class="track-options">
            <div class="quality-badge">PF</div>
            <div class="option-badge">
                <i @click="fullscreen = true" class="full-btn fa-solid fa-expand"></i>
            </div>
        </div>

        <div class="duration-footer">
            <span>2:28</span>
            <v-slider class="v-slider-duration" hide-details></v-slider>
            <span>4:44</span>
        </div>

        <div class="track-info">
            <span class="track-album">The Dark Side of the Moon</span>
            <span class="track-title">The Great Gig in the Sky</span>
            <span class="track-artist">Pink Floyd</span>
        </div>

        <div class="track-image">
            <img src="/images/example-image.png" alt="Music Image">
        </div>
    </footer>
    <fullscreen-player v-if="fullscreen" @undoFullscreen="undoFullscreen" />

</template>

<style scoped>
footer {
    background-color: #0F0F0F;
    padding: 14px 20px;
    border-top: 1px solid #1E1E1E;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

footer .player-tools {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
}

footer .player-tools .repeat-btn,
footer .player-tools .random-btn,
footer .player-tools .previous-btn,
footer .player-tools .next-btn {
    color: #D9D9D9;
    font-size: 14px;
    cursor: pointer;
}

footer .play-content {
    background-color: #EB5160;
    width: 36px;
    height: 36px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px 4px rgba(235, 81, 96, 0.65);
    cursor: pointer;
}

footer .play-content .play-btn {
    color: #ffffff;
    font-size: 14px;
    display: block;
}

footer .volume-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    width: 110px;
}

footer .volume-footer .speaker-btn {
    color: #D9D9D9;
    font-size: 14px;
}

footer .track-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    line-height: 130%;
    flex-shrink: 0;
}

footer .track-info span {
    text-align: right;
}

footer .track-album {
    font-size: 11px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #A0A0A5;
}

footer .track-title {
    font-size: 14px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
}

footer .track-artist {
    font-size: 12px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #A0A0A5;
}

footer .track-image {
    flex-shrink: 0;
}

footer .track-image img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    object-fit: cover;
}

footer .track-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
}

footer .quality-badge,
footer .option-badge {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background-color: #1E1E25;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer .quality-badge {
    font-size: 10px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
}

footer .option-badge .full-btn {
    color: #D9D9D9;
    font-size: 12px;
    cursor: pointer;
}

footer .duration-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
    min-width: 0;
}

footer .duration-footer span {
    font-size: 11px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: #A0A0A5;
    flex-shrink: 0;
}

footer .v-slider-volume {
    width: 80px;
    flex-grow: 0;
}

footer .v-slider-duration {
    flex-grow: 1;
}

footer .v-slider-volume:deep(.v-slider-track__fill),
footer .v-slider-volume:deep(.v-slider-thumb__surface),
footer .v-slider-duration:deep(.v-slider-track__fill),
footer .v-slider-duration:deep(.v-slider-thumb__surface) {
    background-color: #EB5160 !important;
    box-shadow: 0px 0px 4px 1px rgba(235, 81, 96, 0.65);
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
</style>