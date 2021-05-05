<template>
  <div class="bg-gray-100 rounded-2xl mt-4">
    <div class="py-3 px-5">
      <span class="text-xl leading-10 font-extrabold">Who to follow </span>
    </div>
    <div
      v-for="(person, i) in whoToFollow"
      :key="i"
      class="flex items-center justify-between border-t py-3 px-5 hover:bg-gray-200"
    >
      <div class="flex items-center">
        <div>
          <img
            class="rounded-full object-cover h-12 w-12"
            :src="person.profile_pic"
            alt=""
          />
        </div>
        <div class="flex flex-col ml-3">
          <div class="flex items-center">
            <span class="tracking-tight font-bold leading-snug">{{
              person.name
            }}</span>
            <img
              class="w-6 h-6 ml-1"
              src="../assets/logo_verified.svg"
              alt=""
            />
          </div>
          <span class="tracking-tight text-gray-500 leading-snug">{{
            person.handle
          }}</span>
        </div>
      </div>
      <div>
        <button
          class="rounded-full border border-solid border-twitter-blue px-4 py-1 font-bold text-twitter-blue hover:bg-twitter-blue hover:bg-opacity-10"
        >
          Follow
        </button>
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
const whoToFollow = ref([
  {
    name: "Timmy",
    handle: "@iiTzTimmy",
    profile_pic: "/src/assets/timmy.png",
    is_verified: true,
  },
  {
    name: "NiceWigg",
    handle: "@NiceWigg",
    profile_pic: "/src/assets/nicewigg.png",
    is_verified: true,
  },
]);
</script>

<style></style>
