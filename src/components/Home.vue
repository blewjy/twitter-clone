<template>
  <div class="flex justify-center h-screen overflow-y-auto">
    <div class="flex-1 flex-shrink"></div>
    <div
      class="hidden sm:flex xl:w-72 p-2 md:ml-10 flex-col sticky top-0 bg-white overflow-y-auto justify-between"
    >
      <div class="flex flex-col items-center px-2 xl:items-start xl:px-4">
        <div
          class="p-3 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 w-content"
        >
          <img class="w-7 h-7" src="../assets/logo_twitter.svg" alt="" />
        </div>

        <div v-for="(navLink, i) in navLinks" :key="i" class="w-content mt-2">
          <div
            class="flex items-center p-2 xl:px-3 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 hover:text-twitter-blue"
            @click="click_handler(i)"
            @mouseenter="mouseenter_handler(i)"
            @mouseleave="mouseleave_handler(i)"
          >
            <img
              class="w-7 h-7"
              :src="
                navLink.isActive
                  ? navLink.activeIcon
                  : navLink.isHover
                  ? navLink.hoverIcon
                  : navLink.inactiveIcon
              "
              alt=""
            />
            <a
              href="#"
              class="ml-4 font-bold text-lg tracking-wide hidden xl:block"
              :class="navLink.isActive ? 'text-twitter-blue' : ''"
              >{{ navLink.label }}</a
            >
          </div>
        </div>
        <button class="bg-twitter-blue xl:hidden p-3 mt-4 rounded-full mx-auto">
          <img class="h-7 w-7" src="../assets/logo_create.svg" alt="" />
        </button>
        <button
          class="mt-4 bg-twitter-blue text-white font-bold px-20 py-2 rounded-full hover:bg-twitter-dark-blue hidden xl:block"
        >
          Tweet
        </button>
      </div>
      <div
        class="flex items-center mx-auto w-content xl:w-full xl:px-3 justify-between hover:bg-twitter-blue hover:bg-opacity-10 p-2 mt-16 mb-4 rounded-full"
      >
        <div class="xl:flex xl:items-center">
          <div>
            <img
              class="w-8 h-8 xl:w-12 xl:h-12"
              src="../assets/logo_user.svg"
              alt=""
            />
          </div>
          <div class="flex flex-col ml-3 hidden xl:flex">
            <span class="tracking-tight font-bold leading-snug text-sm"
              >blewjy@gmail.com</span
            >
            <span class="tracking-tight text-gray-500 leading-snug text-sm"
              >@blewjy</span
            >
          </div>
        </div>
        <div class="hidden xl:block">
          <img class="w-5 h-5" src="../assets/logo_dots.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="w-full sm:w-144 h-content border-l border-r">
      <div
        class="sticky top-0 bg-white flex justify-between items-center border-b px-4 py-2"
      >
        <h1 class="text-xl font-extrabold">Home</h1>
        <div class="p-2 rounded-full hover:bg-twitter-blue hover:bg-opacity-10">
          <img class="w-7 h-7" src="../assets/logo_sparkles.svg" alt="" />
        </div>
      </div>
      <div>
        <ComposeTweet />
        <div class="h-3 border-b bg-gray-100"></div>
        <Tweet v-for="i in 25" :key="i" testProp="helloworld" />
      </div>
    </div>
    <div
      class="w-96 px-8 pt-3 pb-4 sticky top-0 bg-white overflow-y-auto hidden lg:block"
    >
      <SearchBar />
      <TrendsForYou />
      <WhoToFollow />
    </div>
    <div class="flex-1 flex-shrink"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tweet from "./Tweet.vue";
import ComposeTweet from "./ComposeTweet.vue";
import SearchBar from "./SearchBar.vue";
import TrendsForYou from "./TrendsForYou.vue";
import WhoToFollow from "./WhoToFollow.vue";

function click_handler(index) {
  for (var i = 0; i < navLinks.value.length; i++) {
    navLinks.value[i].isActive = false;
  }
  navLinks.value[index].isActive = true;
}

function mouseenter_handler(index) {
  navLinks.value[index].isHover = true;
}

function mouseleave_handler(index) {
  navLinks.value[index].isHover = false;
}

const navLinks = ref([
  {
    label: "Home",
    isActive: true,
    isHover: false,
    activeIcon: "/src/assets/logo_home_filled.svg",
    inactiveIcon: "/src/assets/logo_home_outline.svg",
    hoverIcon: "/src/assets/logo_home_outline_hover.svg",
  },
  {
    label: "Explore",
    isActive: false,
    isHover: false,
    activeIcon: "/src/assets/logo_explore_filled.svg",
    inactiveIcon: "/src/assets/logo_explore_outline.svg",
    hoverIcon: "/src/assets/logo_explore_outline_hover.svg",
  },
  {
    label: "Notifications",
    isActive: false,
    isHover: false,
    activeIcon: "/src/assets/logo_notifications_filled.svg",
    inactiveIcon: "/src/assets/logo_notifications_outline.svg",
    hoverIcon: "/src/assets/logo_notifications_outline_hover.svg",
  },
  {
    label: "Messages",
    isActive: false,
    isHover: false,
    activeIcon: "/src/assets/logo_messages_filled.svg",
    inactiveIcon: "/src/assets/logo_messages_outline.svg",
    hoverIcon: "/src/assets/logo_messages_outline_hover.svg",
  },
  {
    label: "Bookmarks",
    isActive: false,
    isHover: false,
    activeIcon: "/src/assets/logo_bookmarks_filled.svg",
    inactiveIcon: "/src/assets/logo_bookmarks_outline.svg",
    hoverIcon: "/src/assets/logo_bookmarks_outline_hover.svg",
  },
  {
    label: "Lists",
    isActive: false,
    isHover: false,
    activeIcon: "/src/assets/logo_lists_filled.svg",
    inactiveIcon: "/src/assets/logo_lists_outline.svg",
    hoverIcon: "/src/assets/logo_lists_outline_hover.svg",
  },
  {
    label: "Profile",
    isActive: false,
    isHover: false,
    activeIcon: "/src/assets/logo_profile_filled.svg",
    inactiveIcon: "/src/assets/logo_profile_outline.svg",
    hoverIcon: "/src/assets/logo_profile_outline_hover.svg",
  },
  {
    label: "More",
    isActive: false,
    isHover: false,
    activeIcon: "/src/assets/logo_more_filled.svg",
    inactiveIcon: "/src/assets/logo_more_outline.svg",
    hoverIcon: "/src/assets/logo_more_outline_hover.svg",
  },
]);
</script>

<style></style>
