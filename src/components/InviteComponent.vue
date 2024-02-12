<script setup lang="ts">
  import { ref } from "vue";
  import { useWindowSize, templateRef } from "@vueuse/core";

  const jumpingCat = new URL("../assets/love/jumping-cat.gif", import.meta.url)
    .href;
  const dancingCat = new URL("../assets/love/dancing-cat.gif", import.meta.url)
    .href;
  const mochiCat = new URL("../assets/love/mochi-cat.gif", import.meta.url)
    .href;

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const noButton = templateRef<HTMLButtonElement | null>("noButton");
  const hasAccepted = ref<boolean>(false);

  const { width, height } = useWindowSize();

  const handleHover = () => {
    if (!noButton.value) return;

    const buttonWidth = noButton.value.clientWidth;
    const buttonHeight = noButton.value.clientHeight;

    const randomWidth = getRandomInt(width.value - buttonWidth);
    const randomHeight = getRandomInt(height.value - buttonHeight);

    noButton.value.style.position = "absolute";
    noButton.value.style.left = `${randomWidth}px`;
    noButton.value.style.top = `${randomHeight}px`;
  };

  const loveImgs = [
    { src: jumpingCat, class: "absolute left-0 top-1/2", width: 320 },
    {
      src: dancingCat,
      class: "absolute right-1/4 bottom-3/4 rotate-[-12deg]"
    },
    {
      src: mochiCat,
      class: "absolute right-[20%] bottom-1/4",
      width: 320
    }
  ];
</script>

<template>
  <main
    class="relative max-w-[100vw] h-screen m-auto flex flex-col py-16 overflowy-y-hidden"
  >
    <template v-if="hasAccepted">
      <TransitionGroup
        v-for="(img, i) in loveImgs"
        :key="i"
        name="imgs"
      >
        <img
          :key="i"
          v-bind="img"
        />
      </TransitionGroup>
    </template>
    <h1 class="text-center text-5xl">Czy będziesz moją walentynką?</h1>
    <div class="flex justify-center">
      <video
        v-if="!hasAccepted"
        src="../assets/love/mochi-cat.mp4"
        width="320"
        class="aspect-square"
        loop
        autoplay
        muted
      />
      <img
        v-else
        width="320"
        class="pt-[87px]"
        src="../assets/love/love-cat.gif"
      />
    </div>
    <div class="flex justify-center py-14 gap-16">
      <button
        class="text-2xl text-white bg-green-500 px-8 py-4 rounded"
        @click="hasAccepted = true"
      >
        Tak
      </button>
      <button
        ref="noButton"
        class="text-2xl text-white bg-red-500 px-8 py-4 rounded transition-all"
        @mouseover="handleHover"
      >
        Nie
      </button>
    </div>
  </main>
</template>

<style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: opacity 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
