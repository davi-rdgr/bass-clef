<script setup>

</script>

<template>
    <aside>
        <div class="info-content">
            <div class="presentation-content">
                <img class="artist-image" src="/images/example-big-image.png" alt="Artist Image">
                <div class="presentation-artist-content">
                    <div class="">
                        <span class="info-title-presentation">
                            The Great Gig in The Sky
                        </span>
                        <span class="info-subtitle-presentation">
                            Pink Floyd
                        </span>
                    </div>
                    <a href="">
                        <img src="/svg/add-icon-white.svg" alt="Add Music">
                    </a>
                </div>
            </div>
            <div class="maybe-you-know-content">
                <span class="info-title-span-maybe">
                    Talvez você conheça
                </span>
                <div class="info-title-content-maybe">
                    <div class="info-title-card-maybe">
                        <img src="/images/example-5.png" alt="Music Suggestion">
                        <div class="">
                            <span class="info-title-maybe">
                                Comfortably Numb
                            </span>
                            <span class="info-subtitle-maybe">
                                Pink Floyd
                            </span>
                        </div>
                    </div>
                    <div class="info-title-card-maybe">
                        <img src="/images/example-5.png" alt="Music Suggestion">
                        <div class="">
                            <span class="info-title-maybe">
                                Speak to Me
                            </span>
                            <span class="info-subtitle-maybe">
                                Pink Floyd
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-artist-content">
                <span class="info-title-span-about">
                    Sobre o artista
                </span>
                <div class="">
                    <img class="info-image-about" src="/images/example-band-image.png" alt="Band images">
                    <div class="info-about-content">
                        <div class="info-about-card-content">
                            <span class="info-title-about">
                                Pink Floyd
                            </span>
                            <span class="info-subtitle-about">
                                123.423.241 ouvintes mensais
                            </span>
                        </div>
                        <a href="">
                            Seguir
                        </a>
                    </div>
                    <div class="info-about-text">
                        <span>
                            Pink Floyd foi uma banda britânica de rock formada em Londres em 1965. Ganhando seguidores
                            como um grupo de rock psicodélico, eles se destacaram por suas composições longas, pela
                            experimentação sonora, pelas …
                        </span>
                    </div>
                </div>
            </div>
            <div class="next-artist-content">
                <span class="next-title-span">
                    A seguir
                </span>
                <div class="">
                    <div class="next-image-card">
                        <img src="/images/example-5.png" alt="Music Suggestion">
                        <div class="">
                            <span class="info-title-next">
                                Time
                            </span>
                            <span class="info-subtitle-next">
                                Pink Floyd
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>

</template>

<style scoped>
aside {
    max-width: 339px;
    height: 100%;
    width: 100%;
    background-color: #0F0F0F;
    padding: 0px 15px 15px 15px;
    overflow-x: hidden;
}

aside .info-content {
    display: flex;
    flex-direction: column;
}

aside .presentation-content {
    display: flex;
    flex-direction: column;
    width: 100%;
}

aside .artist-image {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
}

aside .presentation-artist-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
    line-height: 100%;
}

aside .info-title-presentation {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .info-subtitle-presentation {
    font-size: 12px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .maybe-you-know-content {
    margin-top: 20px;
}

aside .info-title-span-maybe {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .info-title-content-maybe {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    gap: 5px;
}

aside .info-title-card-maybe {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

aside .info-title-card-maybe img {
    width: 60px;
    height: 60px;
    object-fit: cover;
}

aside .info-title-maybe {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .info-subtitle-maybe {
    font-size: 10px;
    font-weight: 200;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .about-artist-content {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

aside .info-title-span-about {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
}

aside .info-image-about {
    width: 100%;
}

aside .info-about-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

aside .info-about-card-content {
    line-height: 100%;
}

aside .info-title-about {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .info-subtitle-about {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .info-about-content a {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    background-color: #2F2F2F;
    border-radius: 20px;
    padding: 0px 6px;
    text-decoration: none;
    display: flex;
    align-items: center;
}

aside .info-about-text {
    margin-top: 10px;
    line-height: 100%;
    width: 100%;
}

aside .info-about-text span {
    font-size: 13px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    color: #BABABA;
    width: 100%;
}

aside .next-artist-content {
    margin-top: 20px;
}

aside .next-title-span {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
}

aside .next-image-card {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-top: 5px;
}

aside .next-image-card img {
    width: 60px;
    height: 60px;
    object-fit: cover;
}

aside .info-title-next {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

aside .info-subtitle-next {
    font-size: 10px;
    font-weight: 200;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
    display: block;
}

::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

/* ::-webkit-scrollbar-track {
    background: #1e1e1e;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #888;
} */
</style>