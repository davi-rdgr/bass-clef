import { ref } from "vue"
import { usePlayerStore } from "@/stores/player";

const formatMsToSec = (ms) => {
    const date = new Date(ms);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${String(minutes).padStart(1, '0')}:${String(seconds).padStart(2, '0')}`;
}

const formatToSec = (sec) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = Math.floor(sec % 60);
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

const isPlaying = ref(false);
const currentTime = ref(formatMsToSec(34228) ?? 0);
const currentTimeRaw = ref(0);
const duration = ref(formatMsToSec(349028) ?? 0);
const durationRaw = ref(0);
const music = new Audio();
const previewUrl = ref(null);

music.addEventListener('loadedmetadata', () => {
    duration.value = formatToSec(music.duration);
    durationRaw.value = music.duration;
});

music.addEventListener('timeupdate', () => {
    currentTime.value = formatToSec(music.currentTime);
    currentTimeRaw.value = music.currentTime;
});

music.addEventListener('play', () => { isPlaying.value = true; });
music.addEventListener('pause', () => { isPlaying.value = false; });
music.addEventListener('ended', () => { isPlaying.value = false; });

export function usePlayer() {
    const player = usePlayerStore();

    const enableRepeat = () => {
        player.repeatMode = !player.repeatMode;
    }

    const enableShuffle = () => {
        player.shuffle = !player.shuffle;
    }

    const setMusicTime = (currentTimeData) => {
        music.currentTime = currentTimeData;
    }

    const setMutedVolume = () => {
        if (player.muted == false) {
            player.muted = true;
            music.muted = true;
            return;
        }
        player.muted = false;
        music.muted = false;
    }

    const setMusicVolume = (musicVolumeData) => {
        const volume = Math.min(Math.max(Number(musicVolumeData) || 0, 0), 100);
        player.volume = volume;
        music.volume = volume / 100;
        music.muted = false;
        player.muted = false;
    }

    music.volume = Math.min(Math.max(Number(player.volume) || 0, 0), 100) / 100;
    music.muted = player.muted === true;

    const setCurrentTrack = async (id, trackData) => {
        if (player.musicId === id && music.src) {
            togglePlay();
            return;
        }

        music.pause();

        await player.setCurrentTrack(id, trackData);
        previewUrl.value = player.currentTrack?.previewUrl;
        if (!previewUrl.value) return;

        player.musicId = id;
        currentTime.value = formatToSec(0);
        music.src = previewUrl.value;
        music.play().catch((error) => console.error(error));
    }


    const togglePlay = () => {
        if (!music.src) {
            previewUrl.value = player.currentTrack.previewUrl;
            music.src = previewUrl.value;
        };

        if (music.paused) {
            music.play().catch((error) => console.error(error));
            return;
        }

        music.pause();
    }

    return {
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
    }
}