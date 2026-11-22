<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import AlbumRepository from '@/infrastructure/api/albums';
import { usePlayer } from '@/composables/usePlayer';

/*
    item: { name, imagePath, itemType: 'ARTIST' | 'ALBUM' | 'FAVORITES', spotifyId, count }
*/
const props = defineProps({
    item: { type: Object, required: true },
});

const emits = defineEmits([
    "close"
]);

const {
    player,
    isPlaying,
    currentTime,
    currentTimeRaw,
    duration,
    durationRaw,
    enableRepeat,
    enableShuffle,
    setCurrentTrack,
    togglePlay,
    setMusicTime,
    setMutedVolume,
    setMusicVolume
} = usePlayer();

const playTrack = (track) => {
    if (!track) return;
    setCurrentTrack(
        track.id,
        {
            'name': track.name,
            'artist': track.artists[0].name,
            'artistId': track.artists[0].id,
            'album': props.item.name,
            'image': props.item.imagePath,
            'durationMs': track.duration_ms
        }
    )
}

const TYPES = {
    ARTIST: { label: 'Artista', listTitle: 'Populares' },
    ALBUM: { label: 'Álbum', listTitle: 'Faixas' },
    FAVORITES: { label: 'Playlist', listTitle: 'Músicas curtidas' },
};
const type = computed(() => TYPES[props.item.itemType] ?? TYPES.ALBUM);
const isArtist = computed(() => props.item.itemType === 'ARTIST');
const isFavorites = computed(() => props.item.itemType === 'FAVORITES');
const showAlbumColumn = computed(() => props.item.itemType !== 'ALBUM');
const image = computed(() => props.item.imagePath ?? '/images/example-1.png');

const list = ref([]);

const formatMsToSec = (ms) => {
    const date = new Date(ms);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const onKeydown = (event) => {
    if (event.key === 'Escape') emits('close');
};

onMounted(async () => {
    window.addEventListener('keydown', onKeydown);
    const albumRepository = new AlbumRepository();
    list.value = await albumRepository.getAlbumTracks(props.item.spotifyId);
});
onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
    <div class="view" :class="{ favorites: isFavorites }">
        <header class="topbar">
            <div class="btn-content" @click="emits('close')">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <span class="esc-text">
                Pressione Esc para voltar
            </span>
        </header>

        <section class="hero">
            <div v-if="!isFavorites" class="hero-bg" :style="{ backgroundImage: `url(${image})` }"></div>
            <div class="hero-shade"></div>

            <div class="hero-content">
                <div v-if="isFavorites" class="cover cover-favorites">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <img v-else class="cover" :class="{ round: isArtist }" :src="image" :alt="item.name">

                <div class="hero-info">
                    <span class="type-label">
                        <i v-if="isArtist" class="verified fa-solid fa-circle-check"></i>
                        {{ type.label }}
                    </span>
                    <h1>
                        {{ item.name ?? 'Nome' }}
                    </h1>
                    <span class="meta">
                        {{ list.length }} {{ list.length === 1 ? 'música' : 'músicas' }}
                    </span>
                </div>
            </div>
        </section>

        <section class="actions">
            <div class="play-content">
                <i class="play-btn fa-solid fa-play"></i>
            </div>
            <i class="action-btn fa-solid fa-shuffle"></i>
            <button v-if="isArtist" class="follow-btn">Seguir</button>
            <i v-else-if="!isFavorites" class="action-btn fa-regular fa-heart"></i>
            <i class="action-btn fa-solid fa-ellipsis"></i>
        </section>

        <section class="content">
            <h2>{{ type.listTitle }}</h2>

            <div class="tracklist" :class="{ 'with-album': showAlbumColumn }">
                <div class="row row-head">
                    <span class="col-index">
                        #
                    </span>
                    <span>
                        Título
                    </span>
                    <span v-if="showAlbumColumn">
                        Álbum
                    </span>
                    <span class="col-duration">
                        <i class="fa-regular fa-clock"></i>
                    </span>
                </div>

                <div @click="playTrack(item)" v-for="item in list" :key="item.id" class="row">
                    <span class="col-index">
                        <span class="number">
                            {{ item.track_number }}
                        </span>
                        <i class="row-play fa-solid fa-play"></i>
                    </span>
                    <div class="track-main">
                        <img v-if="showAlbumColumn" :src="`/images/example-${((n - 1) % 7) + 1}.png`" alt="">
                        <span class="track-name">
                            {{ item.name }}
                        </span>
                    </div>
                    <span v-if="showAlbumColumn" class="track-album">
                        Nome do álbum
                    </span>
                    <span class="col-duration">
                        {{ formatMsToSec(item.duration_ms) }}
                    </span>
                </div>
            </div>

            <!-- estado vazio, para quando vier da API
            <div class="empty">
                <i class="fa-solid fa-music"></i>
                <span>Nenhuma música por aqui ainda.</span>
            </div>
            -->

            <template v-if="isArtist">
                <h2 class="discography-title">Discografia</h2>
                <div class="discography">
                    <article v-for="img in ['replay-scalene', 'replay-soad', 'replay-royal', 'replay-tim']" :key="img">
                        <div class="img-content">
                            <img :src="`/images/${img}.png`" alt="Álbum">
                            <div class="play-content small">
                                <i class="play-btn fa-solid fa-play"></i>
                            </div>
                        </div>
                        <span class="album-name">Nome do álbum</span>
                        <span class="album-year">2020 · Álbum</span>
                    </article>
                </div>
            </template>
        </section>
    </div>
</template>

<style scoped>
.view {
    position: fixed;
    inset: 0;
    z-index: 3;
    background-color: #0F0F0F;
    overflow-y: auto;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
}

.view::-webkit-scrollbar {
    width: 6px;
}

.view::-webkit-scrollbar-thumb {
    background: #FFFFFF26;
    border-radius: 10px;
}

/* topo */
.topbar {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 40px;
}

.topbar .btn-content {
    height: 40px;
    width: 40px;
    border-radius: 900px;
    background-color: #000000B3;
    border: 1px solid #FFFFFF47;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 14px;
    transition: transform ease 0.2s, background-color ease 0.2s;
}

.topbar .btn-content:hover {
    transform: scale(1.06);
    background-color: #000000;
}

.topbar .esc-text {
    font-size: 11px;
    color: #FFFFFF8C;
}

/* hero */
.hero {
    position: relative;
    margin-top: -70px;
    padding: 110px 40px 32px;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    inset: -40px;
    background-size: cover;
    background-position: center;
    filter: blur(60px) saturate(1.4);
    opacity: 0.6;
    transform: scale(1.2);
}

.hero-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(15, 15, 15, 0.1) 0%, rgba(15, 15, 15, 0.55) 60%, #0F0F0F 100%);
}

.favorites .hero {
    background: linear-gradient(160deg, #EB5160 0%, #7A2A35 55%, #0F0F0F 100%);
}

.hero-content {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 28px;
}

.cover {
    width: 220px;
    height: 220px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
}

.cover.round {
    border-radius: 50%;
}

.cover-favorites {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(145deg, #F27D88 0%, #EB5160 45%, #8E2C38 100%);
    color: #FFFFFF;
    font-size: 80px;
}

.hero-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.type-label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #FFFFFFD1;
    display: flex;
    align-items: center;
    gap: 6px;
}

.type-label .verified {
    color: #EB5160;
    font-size: 14px;
}

.hero-info h1 {
    font-size: clamp(36px, 6vw, 84px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -1.5px;
    color: #FFFFFF;
    margin: 8px 0 14px;
    overflow-wrap: anywhere;
}

.meta {
    font-size: 14px;
    color: #FFFFFFB3;
}

/* ações */
.actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 28px;
    padding: 8px 40px 24px;
}

.play-content {
    background-color: #EB5160;
    width: 56px;
    height: 56px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px 4px rgba(235, 81, 96, 0.55);
    cursor: pointer;
    transition: transform ease 0.2s;
}

.play-content:hover {
    transform: scale(1.06);
}

.play-content .play-btn {
    color: #FFFFFF;
    font-size: 20px;
    margin-left: 3px;
}

.action-btn {
    color: #D9D9D9;
    font-size: 22px;
    cursor: pointer;
    transition: color ease 0.2s;
}

.action-btn:hover {
    color: #FFFFFF;
}

.follow-btn {
    font-size: 13px;
    font-weight: 700;
    color: #FFFFFF;
    background: transparent;
    border: 1px solid #FFFFFF73;
    border-radius: 20px;
    padding: 7px 18px;
    cursor: pointer;
    transition: border-color ease 0.2s, transform ease 0.2s;
}

.follow-btn:hover {
    border-color: #FFFFFF;
    transform: scale(1.04);
}

/* lista */
.content {
    padding: 0 40px 60px;
}

.content h2 {
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 16px;
}

.tracklist .row {
    display: grid;
    grid-template-columns: 40px 1fr 70px;
    align-items: center;
    gap: 16px;
    padding: 8px 12px;
    border-radius: 6px;
}

.tracklist.with-album .row {
    grid-template-columns: 40px 2fr 1.5fr 70px;
}

.tracklist .row:not(.row-head):hover {
    background-color: #FFFFFF0F;
    cursor: pointer;
}

.tracklist .row-head {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #B7999C;
    border-bottom: 1px solid #FFFFFF1A;
    border-radius: 0;
    margin-bottom: 8px;
}

.col-index {
    text-align: center;
    font-size: 14px;
    color: #A0A0A5;
}

.col-index .row-play {
    display: none;
    color: #FFFFFF;
    font-size: 12px;
}

.row:hover .col-index .number {
    display: none;
}

.row:hover .col-index .row-play {
    display: inline;
}

.col-duration {
    text-align: right;
    font-size: 13px;
    color: #A0A0A5;
}

.track-main {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    min-width: 0;
}

.track-main img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    object-fit: cover;
    flex-shrink: 0;
}

.track-name {
    font-size: 15px;
    font-weight: 500;
    color: #FFFFFF;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.track-album {
    font-size: 13px;
    color: #A0A0A5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 50px 0;
    color: #FFFFFF73;
    font-size: 14px;
}

.empty i {
    font-size: 32px;
    color: #B7999C;
}

/* discografia */
.discography-title {
    margin-top: 40px !important;
}

.discography {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 20px;
}

.discography article {
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color ease 0.2s;
}

.discography article:hover {
    background-color: #FFFFFF0F;
}

.discography .img-content {
    position: relative;
    aspect-ratio: 1 / 1;
    margin-bottom: 10px;
}

.discography .img-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}

.discography .play-content.small {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 42px;
    height: 42px;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity ease 0.2s, transform ease 0.2s;
}

.discography .play-content.small .play-btn {
    font-size: 15px;
}

.discography article:hover .play-content.small {
    opacity: 1;
    transform: translateY(0);
}

.album-name {
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.album-year {
    font-size: 12px;
    color: #A0A0A5;
}

/* responsivo */
@media (max-width: 768px) {

    .topbar,
    .actions,
    .content {
        padding-left: 16px;
        padding-right: 16px;
    }

    .hero {
        padding: 100px 16px 24px;
    }

    .hero-content {
        flex-direction: column;
        align-items: flex-start;
    }

    .cover {
        width: 160px;
        height: 160px;
    }

    .tracklist.with-album .row {
        grid-template-columns: 32px 1fr 60px;
    }

    .tracklist.with-album .track-album,
    .tracklist.with-album .row-head span:nth-child(3) {
        display: none;
    }
}
</style>
