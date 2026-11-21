import { defineStore } from "pinia";
import PlayerRepository from "@/infrastructure/api/player";
import { ref, watch } from "vue";

export const usePlayerStore = defineStore('playerStore', () => {

    const repository = new PlayerRepository();
    const currentTrack = ref({});
    const queue = ref([]);
    const volume = ref(0.5);
    const repeatMode = ref(false);
    const shuffle = ref(false);
    const muted = ref(false);
    const musicId = ref(null);

    const setCurrentTrack = async (id, trackData) => {
        const track = await repository.getTrack(id, trackData);
        currentTrack.value = {
            ...track,
            name: trackData.name,
            artist: trackData.artist,
            album: trackData.album,
            image: trackData.image
        };
    }

    return {
        currentTrack,
        queue,
        volume,
        repeatMode,
        shuffle,
        setCurrentTrack,
        muted,
        musicId
    };

}, { persist: true });
