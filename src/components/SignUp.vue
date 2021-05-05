<template>
  <div
    class="h-screen w-screen bg-black bg-opacity-40 flex items-center justify-center p-0 md:p-12 container-max-on-short"
  >
    <div
      class="bg-white w-full h-full px-10 pb-10 md:w-156 md:h-168 md:max-h-full md:rounded-2xl modal-max-on-short overflow-y-auto"
    >
      <div class="max-w-xl mx-auto">
        <div class="bg-white sticky top-0">
          <div class="w-full py-3 relative">
            <img
              class="mx-auto h-9 w-9"
              src="../assets/logo_twitter.svg"
              alt=""
            />
            <Button
              class="absolute -right-3 top-3 py-1 px-4"
              type="primary"
              label="Next"
            />
          </div>
        </div>
        <h1 class="mt-6 font-bold text-2xl">Create your account</h1>
        <InputBox class="mt-6 h-16" placeholder="Name" />
        <InputBox class="mt-4 h-16" placeholder="Phone" />
        <div class="mt-8">
          <a class="text-twitter-dark-blue hover:underline" href="#"
            >Use email instead</a
          >
        </div>
        <h4 class="mt-8 font-bold">Date of birth</h4>
        <p class="mt-1 text-gray-500 leading-tight">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
        <div class="w-full flex mt-6 justify-between">
          <div class="relative w-1/2 min-w-32">
            <select
              class="relative w-full pt-5 px-3 h-16 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-twitter-blue focus:ring-2 focus:ring-inset appearance-none"
              id="month-select"
              name="month"
            >
              <option value=""></option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <span
              class="transition-all duration-100 ease-in-out absolute text-gray-500 text-sm left-3 top-2 pointer-events-none"
              >Month</span
            >
            <img
              class="absolute h-7 w-7 right-3 top-5"
              src="../assets/logo_chevron_down.svg"
              alt=""
            />
          </div>
          <div class="relative w-2/12 min-w-16 ml-4">
            <select
              class="relative w-full pt-5 px-3 h-16 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-twitter-blue focus:ring-2 focus:ring-inset appearance-none"
              id="month-select"
              name="month"
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <span
              class="transition-all duration-100 ease-in-out absolute text-gray-500 text-sm left-3 top-2 pointer-events-none"
              >Day</span
            >
            <img
              class="absolute h-7 w-7 right-3 top-5"
              src="../assets/logo_chevron_down.svg"
              alt=""
            />
          </div>
          <div class="relative w-3/12 min-w-20 ml-4">
            <select
              class="relative w-full pt-5 px-3 h-16 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-twitter-blue focus:ring-2 focus:ring-inset appearance-none"
              id="month-select"
              name="month"
            >
              <option value=""></option>
              <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
            </select>
            <span
              class="transition-all duration-100 ease-in-out absolute text-gray-500 text-sm left-3 top-2 pointer-events-none"
              >Year</span
            >
            <img
              class="absolute h-7 w-7 right-3 top-5"
              src="../assets/logo_chevron_down.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import InputBox from "./InputBox.vue";

const years = ref(
  Array(Math.ceil(2022 - 1901))
    .fill(1901)
    .map((x, y) => x + y)
);
</script>

<style>
@media (max-height: 600px) {
  .container-max-on-short {
    padding: 0 !important;
  }
  .modal-max-on-short {
    width: 100% !important;
    height: 100% !important;
    border-radius: 0px !important;
  }
}
</style>