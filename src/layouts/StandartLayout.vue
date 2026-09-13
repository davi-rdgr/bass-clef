<script setup>

</script>

<template class="template">
    <header-component />
    <div class="template-content">
        <library-component />
        <slot></slot>
        <music-info-component />
    </div>
    <footer-component />
</template>

<style scoped>
.template {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}

.template-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: hidden;
}
</style>