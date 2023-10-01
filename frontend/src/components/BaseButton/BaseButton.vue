<template>
    <button class="base-button" type="button">
        <slot></slot>
    </button>
</template>

<script setup lang='ts'>


</script>

<style scoped lang='scss'>
.base-button {

    padding: 10px 15px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    border: none;
    outline: none;
    cursor: pointer;

    border-radius: 5px;
}
</style>