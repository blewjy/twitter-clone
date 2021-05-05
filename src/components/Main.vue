<template>
  <div class="h-screen lg:flex lg:flex-col overflow-y-auto">
    <div class="flex flex-col lg:flex-row-reverse lg:flex-1">
      <div
        class="relative flex justify-center flex-1 lg:justify-start lg:items-center"
      >
        <div
          class="absolute inset-0 w-full h-content hidden lg:flex p-4 items-center hide-on-short"
        >
          <InputBox class="w-52 h-16 ml-4" placeholder="Phone, email or userna..." />
          <div class="relative">
            <InputBox class="w-52 h-16 ml-4" placeholder="Password" />
            <a
              class="absolute left-7 -bottom-6 text-sm text-twitter-dark-blue text-sm hover:underline"
              href="#"
              >Forgot password?</a
            >
          </div>
          <Button class="py-3 px-6 ml-4" type="accent" label="Log in" />
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
            <Button
              class="w-full mt-4 py-3 xs:mr-4 lg:w-2/3"
              type="primary"
              label="Sign up"
            />
            <Button
              class="w-full mt-4 py-3 xs:mr-4 lg:w-2/3"
              type="accent"
              label="Log in"
            />
          </div>
        </div>
      </div>
      <div class="relative xl:max-w-1/2">
        <img
          class="w-full h-132 lg:h-full object-cover"
          src="../assets/splashscreen.png"
          alt=""
        />
        <div class="absolute inset-0 w-full h-full p-16">
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
import InputBox from "./InputBox.vue";
import Button from "./Button.vue";

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
</script>

<style>
@media (max-height: 768px) {
  .hide-on-short {
    display: none !important;
    background-color: red;
  }
}
</style>