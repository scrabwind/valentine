<script setup lang="ts">
  import InviteComponent from "./components/InviteComponent.vue";
  // import RefuseComponent from "./components/RefuseComponent.vue";
</script>

<template>
  <!-- <button
    class="absolute text-white z-20"
    @click="test = !test"
  >
    test
  </button> -->
  <InviteComponent />
  <!-- <RefuseComponent
    class="transition-opacity duration-1000"
    :class="{ ['opacity-0']: test }"
    :test="test"
  /> -->
</template>
