import { defineStore } from "pinia";
import TrackRepository from "@/infrastructure/api/track";
import ArtistRepository from "@/infrastructure/api/artist";
import { ref, watch } from "vue";

export const usePlayerStore = defineStore('playerStore', () => {

    const trackRep = new TrackRepository();
    const artistRep = new ArtistRepository();
    const currentTrack = ref({});
    const queue = ref([]);
    const volume = ref(0.5);
    const repeatMode = ref(false);
    const shuffle = ref(false);
    const muted = ref(false);
    const musicId = ref(null);

    const setCurrentTrack = async (id, trackData) => {

        const [track, lyrics, info, similar] = await Promise.all([
            trackRep.getTrack(id, trackData),
            trackRep.getLyrics(id, trackData).catch(() => null),
            artistRep.getInfo(trackData.artistId, trackData.artist, 'pt').catch(() => null),
            artistRep.getSimilar(id, trackData.name, 2).catch(() => null)
        ])
        currentTrack.value = {
            ...track,
            name: trackData.name,
            artist: trackData.artist,
            album: trackData.album,
            image: trackData.image,
            lyrics: lyrics?.plainLyrics ?? null,
            info: info ?? null,
            similar: similar ?? null
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
