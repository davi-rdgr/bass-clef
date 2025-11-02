<script setup>
</script>

<template>
    <section>
        <h2>Dê replay nas mais ouvidas</h2>
        <div class="replay-content">
            <article>
                <div class="img-wrap">
                    <img src="/images/replay-gorillaz.png" alt="">
                </div>
                <p>New Gold</p>
            </article>
            <article>
                <div class="img-wrap">
                    <img src="/images/replay-deep.png" alt="">
                </div>
                <p>Perfect Strangers</p>
            </article>
            <article>
                <div class="img-wrap">
                    <img src="/images/replay-sc.png" alt="">
                </div>
                <p>Vê se não morre</p>
            </article>
            <article>
                <div class="img-wrap">
                    <img src="/images/replay-lei.png" alt="">
                </div>
                <p>Gostar só dela</p>
            </article>
            <article>
                <div class="img-wrap">
                    <img src="/images/replay-slash.png" alt="">
                </div>
                <p>By the Sword</p>
            </article>
            <article>
                <div class="img-wrap">
                    <img src="/images/replay-orappa.png" alt="">
                </div>
                <p>Anjos pra quem tem fé</p>
            </article>
            <article>
                <div class="img-wrap">
                    <img src="/images/replay-a7x.png" alt="">
                </div>
                <p>Save me</p>
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
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    margin: 30px 0 0 0;
    gap: 11px;
}

section article {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: transparent;
    width: 100%;
    position: relative;
}

section article img {
    width: 100%;
    height: auto;
    display: block;
}

section article .img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
}

section article .img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
}

section article .img-wrap::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    pointer-events: none;
    z-index: 1;
    border-radius: 5px;
}

section article p {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    margin: 8px 0 0 0;
    position: absolute;
    bottom: 20px;
    left: 10px;
    right: 10px;
    z-index: 2;
    white-space: nowrap;
    overflow: hidden;
}
</style>