<script setup lang="ts">
  import TulipSvg from "../assets/flowers/tulip.svg?component";
</script>

<template>
  <main>
    <div class="relative">
      <!-- <TulipSvg class="absolute left-1/2 transform -translate-x-1/2" />
      <TulipSvg class="absolute left-1/2 transform -translate-x-1/2" />
      <TulipSvg class="absolute left-1/2 transform -translate-x-1/2" /> -->
      <TulipSvg
        v-for="i in 3"
        :key="i"
        class="absolute"
        :class="`flower flower-${i}`"
        height="400"
        width="400"
      />
      <p class="text absolute">Kwiatki dla pięknej pani na dzień kobiet</p>
    </div>
  </main>
</template>

<style>
  .flower {
    left: 50%;
    top: 100px;
    translate: -50%;
  }
  .flower-1 {
    rotate: -22.5deg;
    translate: calc(-50% - 70px) 20px;
  }

  .flower-3 {
    rotate: 22.5deg;
    translate: calc(-50% + 70px) 20px;
  }

  .text {
    left: 50%;
    translate: -50%;
    top: 600px;
    font-size: 2.5rem;
    width: 100%;
    text-align: center;
  }

  .flower-2 .main-part {
    fill: #ff6666 !important;
  }

  .flower-2 .red-part {
    fill: #ffcc66 !important;
  }
</style>
