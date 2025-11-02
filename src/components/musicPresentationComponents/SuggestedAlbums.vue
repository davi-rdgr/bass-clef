<script setup>
</script>

<template>
    <section>
        <h2>Álbuns que talvez você goste</h2>
        <div class="replay-content">
            <article>
                <div class="img-content">
                    <img src="/images/replay-scalene.png" alt="">
                </div>
                <div class="meta">
                    <p class="artist-name">Éter</p>
                    <p class="artist-album">Scalene</p>
                </div>
            </article>
            <article>
                <div class="img-content">
                    <img src="/images/replay-soad.png" alt="">
                </div>
                <div class="meta">
                    <p class="artist-name">Mezmerize</p>
                    <p class="artist-album">System of a Down</p>
                </div>
            </article>
            <article>
                <div class="img-content">
                    <img src="/images/replay-tim.png" alt="">
                </div>
                <div class="meta">
                    <p class="artist-name">Tim Maia</p>
                    <p class="artist-album">Tim Maia</p>
                </div>
            </article>
            <article>
                <div class="img-content">
                    <img src="/images/replay-royal.png" alt="">
                </div>
                <div class="meta">
                    <p class="artist-name">Royal Blood</p>
                    <p class="artist-album">How Did We Get So Dark?</p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
section {
    margin: 40px 0px 0px 0px;
}

section h2 {
    font-size: 22px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
}

section .replay-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin: 30px 0 0 0;
    gap: 5px;
}

section article {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: transparent;
    width: 100%;
}

section article .img-content {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    position: relative;
}

section article .img-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
}

section article .meta {
    padding: 10px 0 0 0;
    display: flex;
    flex-direction: column;
    line-height: 110%;
}

section article .artist-name {
    font-size: 20px;
    font-weight: 800;
    font-family: 'Roboto', sans-serif;
    color: #B7999C;
    width: 100%;
}

section article .artist-album {
    font-size: 13px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #D9D9D9;
}
</style>