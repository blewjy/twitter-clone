<template>
  <div class="w-84 mx-auto py-6">
    <img class="h-10 w-10" src="../assets/logo_twitter.svg" alt="" />
    <h3 class="mt-8 text-4xl font-bold">Log in to Twitter</h3>
    <InputBox class="mt-6 h-16" placeholder="Phone, email or username" />
    <InputBox class="mt-4 h-16" placeholder="Password" />
    <Button class="mt-6 w-full py-3" type="primary" label="Log in" />
    <div class="mt-8 w-content mx-auto">

    <a class="text-twitter-dark-blue hover:underline" href="#">Forgot password?</a>
    ·
    <a class="text-twitter-dark-blue hover:underline" href="#">Sign up for Twitter</a>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import InputBox from "./InputBox.vue";
</script>

<style>
</style>