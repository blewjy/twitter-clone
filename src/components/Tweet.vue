<template>
  <div class="flex border-b px-4 pt-3 pb-2 hover:bg-gray-100">
    <div>
      <img
        class="rounded-full object-cover h-12 w-12"
        src="../assets/euriece.png"
        alt=""
      />
    </div>
    <div class="flex-1 flex flex-col ml-3">
      <div class="flex items-start justify-between">
        <div>
          <span class="tracking-tight font-bold leading-snug text-sm"
            >Euriece</span
          >
          <span class="tracking-tight text-gray-500 leading-snug text-sm ml-1"
            >@realEuriece · 5h</span
          >
        </div>
        <div class="p-1 rounded-full hover:bg-twitter-blue hover:bg-opacity-10">
          <img class="w-5 h-5" src="../assets/logo_dots.svg" alt="" />
        </div>
      </div>
      <div class="text-sm">
        By the way, I had a blast play testing the 3v3 and the new Olympus map,
        It’s definitely going to be the most exciting season so far! Excited to
        solo masters that 3v3 rank when it does come
      </div>
      <div class="flex -ml-1 mt-2">
        <div class="flex items-center hover:text-twitter-blue">
          <div
            class="p-1 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-5 h-5" src="../assets/logo_comment.svg" alt="" />
          </div>
          <span class="text-xs ml-1"> 23 </span>
        </div>
        <div class="flex items-center hover:text-twitter-blue ml-8 xs:ml-16">
          <div
            class="p-1 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-5 h-5" src="../assets/logo_retweet.svg" alt="" />
          </div>
          <span class="text-xs ml-1"> 49 </span>
        </div>
        <div class="flex items-center hover:text-twitter-blue ml-8 xs:ml-16">
          <div
            class="p-1 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-5 h-5" src="../assets/logo_heart.svg" alt="" />
          </div>
          <span class="text-xs ml-1"> 1.3K </span>
        </div>
        <div class="flex items-center hover:text-twitter-blue ml-8 xs:ml-16">
          <div
            class="p-1 rounded-full hover:bg-twitter-blue hover:bg-opacity-10"
          >
            <img class="w-5 h-5" src="../assets/logo_share.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup="props">
const { testProp } = defineProps({
  testProp: String,
});
// console.log(testProp);
</script>

<style></style>
