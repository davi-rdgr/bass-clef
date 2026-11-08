import { ref } from 'vue'
import { defineStore } from "pinia";

export const useLibraryStore = defineStore('libraryStore', () => {
    const library = ref(JSON.parse(localStorage.getItem('library') ?? 'null'));

    const setLibrary = (value) => {
        library.value = value ?? null;
        localStorage.setItem('library', JSON.stringify(library.value));
    };

    const getLibrary = () => {
        return library.value;
    };

    const cleanLibrary = () => {
        library.value = null;
        localStorage.removeItem('library');
    }

    return { library, getLibrary, setLibrary, cleanLibrary }
});