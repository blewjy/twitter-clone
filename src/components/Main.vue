<template>
  <div class="h-screen lg:flex lg:flex-col overflow-y-auto">
    <div class="flex flex-col lg:flex-row-reverse lg:flex-1">
      <div
        class="relative flex justify-center flex-1 lg:justify-start lg:items-center"
      >
        <div
          class="absolute inset-0 w-full h-content hidden lg:flex p-4 items-center"
        >
          <div class="relative">
            <input
              class="w-52 h-16 border border-gray-300 rounded-md text-lg ml-4 focus:outline-none focus:ring-twitter-blue focus:ring-2 focus:ring-inset"
              type="text"
            />
            <span
              class="absolute text-lg text-gray-500 left-7 top-4.5 pointer-events-none"
              >Phone, email or usern...</span
            >
          </div>
          <div class="relative">
            <input
              class="w-52 h-16 border border-gray-300 rounded-md text-lg ml-4 focus:outline-none focus:ring-twitter-blue focus:ring-2 focus:ring-inset"
              type="password"
              @focus="passwordOnFocus"
              @blur="passwordOnBlur"
            />
            <span
              id="password-span"
              style="font-size: 1.125rem; line-height: 1.75rem"
              class="transition-all duration-100 ease-in-out absolute text-gray-500 left-7 top-4.5 pointer-events-none"
              >Password</span
            >

            <a
              class="absolute left-7 -bottom-6 text-sm text-twitter-dark-blue text-sm hover:underline"
              href="#"
              >Forgot password?</a
            >
          </div>
          <button
            class="h-content py-3 px-8 ml-4 rounded-full border border-solid border-twitter-blue font-bold text-twitter-blue hover:bg-twitter-blue hover:bg-opacity-10"
          >
            Log in
          </button>
        </div>
        <div class="flex-1 flex flex-col px-10 py-10 sm:max-w-2xl">
          <img class="h-10 w-10" src="../assets/logo_twitter.svg" alt="" />
          <h1
            class="mt-10 text-4xl sm:text-7xl sm:w-1/2 lg:whitespace-nowrap font-bold"
          >
            Happening now
          </h1>
          <h2 class="mt-10 text-2xl lg:text-4xl font-bold">
            Join Twitter today.
          </h2>
          <div class="mt-2 xs:flex lg:flex-col">
            <button
              class="w-full xs:mr-4 lg:w-2/3 mt-4 py-3 bg-twitter-blue text-white font-bold rounded-full hover:bg-twitter-dark-blue"
            >
              Sign up
            </button>
            <button
              class="w-full lg:w-2/3 mt-4 py-3 rounded-full border border-solid border-twitter-blue font-bold text-twitter-blue hover:bg-twitter-blue hover:bg-opacity-10"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
      <div class="relative xl:max-w-1/2">
        <img
          class="w-full h-132 lg:w-auto lg:h-full object-cover"
          src="../assets/splashscreen.png"
          alt=""
        />
        <div class="absolute inset-0 w-full h-full p-12">
          <img
            class="m-auto w-full h-full max-w-md max-h-md"
            src="../assets/logo_twitter_main.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="my-4 flex flex-wrap items-center justify-center">
      <a
        v-for="(link, i) in bottomLinks"
        :key="i"
        href="#"
        class="px-4 py-1 text-gray-500 text-sm hover:underline"
        >{{ link }}</a
      >
    </div>
  </div>
</template>

<script setup>
const bottomLinks = [
  "About",
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Ads info",
  "Blog",
  "Status",
  "Careers",
  "Brand Resources",
  "Advertising",
  "Marketing",
  "Twitter for Business",
  "Developers",
  "Directory",
  "Settings",
  "© 2021 Twitter, Inc.",
];

function passwordOnBlur() {
  const passwordSpan = document.getElementById("password-span");
  passwordSpan.classList.remove("text-twitter-blue");
  passwordSpan.style.fontSize = "1.125rem";
  passwordSpan.style.lineHeight = "1.75rem";
}

function passwordOnFocus() {
  const passwordSpan = document.getElementById("password-span");
  passwordSpan.classList.add("text-twitter-blue");
  passwordSpan.style.fontSize = "0.875rem";
  passwordSpan.style.lineHeight = "1.25rem";
  passwordSpan.classList.add("left-0");
  passwordSpan.classList.add("top-0");
}
</script>

<style>
</style>