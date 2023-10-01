<template>
    <div class="timer">
        {{ Math.floor(time / 60) }}:{{ time % 60 < 10 ? "0" + time % 60 : time % 60 }} </div>
</template>

<script setup lang='ts'>

defineProps(['time'])

</script>

<style scoped lang='scss'>
.timer {
    font-size: 2em;
    height: 4em;
    width: 4em;
    border-radius: 50%;
    border: 1px dashed var(--tg-theme-button-color);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>