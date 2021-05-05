<template>
  <button
    :class="
      type == 'accent'
        ? 'border-twitter-blue text-twitter-blue hover:bg-twitter-blue hover:bg-opacity-10'
        : 'text-white bg-twitter-blue hover:bg-twitter-dark-blue'
    "
    class="h-content rounded-full border border-solid font-bold"
  >
    {{ label }}
  </button>
</template>

<script setup="props">
const { label, type } = defineProps({
  label: String,
  type: String,
});
</script>

<style>
</style>