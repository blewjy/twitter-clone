<template>
  <div class="flex border-b">
    <div class="pl-3 pr-1 xs:pl-5 xs:pr-3 py-3">
      <img class="w-12 h-12" src="../assets/logo_user.svg" alt="" />
    </div>
    <div class="flex-1 flex flex-col pt-3">
      <div class="flex flex-col border-b mr-6 py-2">
        <textarea
          v-model="tweet_content"
          placeholder="What's happening?"
          class="ml-2 resize-none outline-none text-lg"
        ></textarea>
        <span
          class="flex items-center mr-auto p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
        >
          <img class="w-5 h-5" src="../assets/logo_globe.svg" alt="" />
          <span class="ml-1 text-sm text-twitter-blue font-bold tracking-tight"
            >Everyone can reply</span
          >
        </span>
      </div>
      <div class="flex items-center justify-between py-2 mr-6">
        <div class="flex items-center">
          <div
            class="p-1 xs:p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-6 h-6" src="../assets/logo_photograph.svg" alt="" />
          </div>
          <div
            class="p-1 xs:p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-6 h-6" src="../assets/logo_gif.svg" alt="" />
          </div>
          <div
            class="p-1 xs:p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-6 h-6" src="../assets/logo_poll.svg" alt="" />
          </div>
          <div
            class="p-1 xs:p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-6 h-6" src="../assets/logo_smiley.svg" alt="" />
          </div>
          <div
            class="p-1 xs:p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-6 h-6" src="../assets/logo_calendar.svg" alt="" />
          </div>
        </div>
        <div class="flex items-center">
          <svg class="progress-ring" height="28" width="28">
            <circle
              class="progress-ring__circle"
              stroke="#EBEEF0"
              stroke-width="2"
              fill="transparent"
              stroke-dasharray="62.83 62.83"
              r="10"
              cx="14"
              cy="14"
            />
            <circle
              class="progress-ring__circle"
              stroke="#1DA1F2"
              stroke-width="2"
              fill="transparent"
              stroke-dasharray="62.83 62.83"
              stroke-linecap="round"
              :stroke-dashoffset="62.83 - 6.283 * (tweet_content.length / 28)"
              style="transform: rotate(-90deg); transform-origin: 50% 50%"
              r="10"
              cx="14"
              cy="14"
            />
          </svg>
          <div class="border-l pl-3 ml-3">
            <div
              class="p-1 mr-3 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 border border-twitter-blue"
            >
              <img
                class="h-4 h-4 xs:w-6 xs:h-6"
                src="../assets/logo_plus.svg"
                alt=""
              />
            </div>
          </div>
          <button
            class="bg-twitter-blue text-white font-bold p-2 xs:px-4 rounded-full hover:bg-twitter-dark-blue"
          >
            <img
              class="h-4 w-4 xs:hidden"
              src="../assets/logo_create.svg"
              alt=""
            />
            <span class="hidden xs:block"> Tweet </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

var tweet_content = ref("");
</script>

<style></style>
