<template>
  <div class="relative">
    <input
      v-model="model"
      class="w-full h-full pt-5 px-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-twitter-blue focus:ring-2 focus:ring-inset"
      type="text"
      @focus="onFocus"
      @blur="onBlur"
    />
    <span
      ref="span"
      class="transition-all duration-100 ease-in-out absolute text-gray-500 left-3 top-5.5 pointer-events-none"
      >{{ placeholder }}</span
    >
  </div>
</template>

<script setup="props">
import { ref } from "vue";

const { placeholder } = defineProps({
  placeholder: String,
});

const span = ref(null);
const model = ref("");

function onBlur() {
  span.value.classList.remove("text-twitter-blue");
  if (model.value !== "") {
    return;
  }
  span.value.classList.remove("text-sm");
  span.value.classList.remove("top-2");
  span.value.classList.add("top-5.5");
}

function onFocus() {
  span.value.classList.add("text-twitter-blue");
  span.value.classList.add("text-sm");
  span.value.classList.remove("top-5.5");
  span.value.classList.add("top-2");
}
</script>

<style>
</style>