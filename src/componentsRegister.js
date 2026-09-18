import { defineAsyncComponent } from "vue";

export const registerComponent = (app) => {
    //layouts:
    app.component(
        "login-layout",
        defineAsyncComponent(() => import('./layouts/LoginLayout.vue'))
    )
    app.component(
        "standart-layout",
        defineAsyncComponent(() => import('./layouts/StandartLayout.vue'))
    )

    app.component(
        "fullscreen-player",
        defineAsyncComponent(() => import('./components/FullscreenComponent.vue'))
    )

    app.component(
        "header-menu-component",
        defineAsyncComponent(() => import('./components/HeaderMenuComponent.vue'))
    )

    app.component(
        "header-component",
        defineAsyncComponent(() => import("./components/Header.vue"))
    )
    app.component(
        "footer-component",
        defineAsyncComponent(() => import("./components/Footer.vue"))
    )
    app.component(
        "library-component",
        defineAsyncComponent(() => import("./components/Library.vue"))
    )
    app.component(
        "music-info-component",
        defineAsyncComponent(() => import("./components/MusicInfo.vue"))
    )
    app.component(
        "most-listened-component",
        defineAsyncComponent(() => import("./components/musicPresentationComponents/MostListenedMusics.vue"))
    )
    app.component(
        "suggested-musics-component",
        defineAsyncComponent(() => import("./components/musicPresentationComponents/SuggestedMusics.vue"))
    )
    app.component(
        "suggested-albums-component",
        defineAsyncComponent(() => import("./components/musicPresentationComponents/SuggestedAlbums.vue"))
    )

}