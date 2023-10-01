<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import BaseButton from './components/BaseButton/BaseButton.vue'
import Timer from './components/Timer/Timer.vue'

import { useIntervalFn } from '@vueuse/core'

const timeLeft = ref(15 * 60)

const { pause, resume, isActive } = useIntervalFn(() => {
  timeLeft.value = timeLeft.value - 1
}, 1000)

onMounted(() => {
  pause()
})

const completed = ref(false)

watch(timeLeft, (value) => {
  //@ts-ignore
  window.Telegram.WebApp.HapticFeedback.impactOccurred('light')
  if (value < 1) {
    value = 15 * 60
    completed.value = true
    pause()
    //@ts-ignore
    window.Telegram.WebApp.showAlert('You have completed the timer!')
  }
})

</script>

<template>
  <div class="app">

    <div v-if="completed">How's it going?</div>
    <Timer :time="timeLeft" />
    <BaseButton v-if="!isActive" @click="resume()" class="app__run-button">
      Run timer
    </BaseButton>
    <BaseButton v-if="isActive" @click="pause()" class="app__run-button">
      Pause timer
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__run-button {
    margin-top: 15px;
  }
}
</style>
