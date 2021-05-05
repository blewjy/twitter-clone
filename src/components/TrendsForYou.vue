<template>
  <div class="bg-gray-100 rounded-2xl mt-4">
    <div class="flex items-center justify-between py-3 px-5">
      <span class="text-xl font-extrabold">Trends for you </span>
      <div class="p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10">
        <img class="w-6 h-6" src="../assets/logo_settings.svg" alt="" />
      </div>
    </div>
    <div
      v-for="(trend, i) in trendsForYou"
      :key="i"
      class="flex justify-between border-t py-3 pl-5 pr-3 hover:bg-gray-200"
    >
      <div>
        <div class="text-sm text-gray-500">{{ trend.top }}</div>
        <div class="text-md font-bold">{{ trend.middle }}</div>
        <div class="text-sm text-gray-500">{{ trend.bottom }}</div>
      </div>
      <div
        class="p-1 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 self-start"
      >
        <img class="w-5 h-5" src="../assets/logo_dots.svg" alt="" />
      </div>
    </div>
    <div
      class="px-5 py-4 border-t text-twitter-blue hover:bg-gray-200 rounded-b-2xl"
    >
      <a href="#" class="text-md text-twitter-blue"> Show more </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const trendsForYou = ref([
  {
    top: "Trending in Singapore",
    middle: "#Ethereum",
    bottom: "69.3K Tweets",
  },
  {
    top: "Entertainment · Trending",
    middle: "Thala",
    bottom: "500K Tweets",
  },
  {
    top: "Politics · Trending",
    middle: "Modi",
    bottom: "248K Tweets",
  },
  {
    top: "Trending in Singapore",
    middle: "#Bitcoin",
    bottom: "155K Tweets",
  },
  {
    top: "Trending in Singapore",
    middle: "#Zilliqa",
    bottom: "5,610 Tweets",
  },
]);
</script>
