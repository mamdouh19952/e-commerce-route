<template>
    <footer class=" md:px-3 px-12 w-full text-center   dark:bg-gray-800 dark:text-gray-200 ">
  <div class="container mx-auto py-4 ">
    <div class="text-gray-700 text-lg font-semibold mb-2 text-left">
      <p class="text-gray-600 mb-2 text-2xl">Get The FreshCart App</p>
      <p class="text-gray-500">
        We will send you a link, open your phone to download the app
      </p>
    </div>

    <!-- email form -->
    <div class="email mt-4 flex flex-col md:flex-row items-center gap-16">
      <input
        type="email"
        placeholder=" Email .."
        class="border border-gray-300 outline-green-400 rounded-md p-2 bg-white w-full md:w-3/4"
      />
      <button
        class="bg-green-600 hover:bg-green-400 text-white px-2 py-2 rounded w-full md:w-1/6 cursor-pointer transition-colors duration-300"
      >
        Share App Link
      </button>
    </div>
  </div>

  <hr class="my-4 border-gray-300  w-[100%] shadow-xl shadow-gray-500 mx-auto " />
  <div class="payment flex flex-col md:flex-row  justify-between items-center  gap-4 mx-auto   container py-4">
    <div class="partner flex  items-center gap-4">
      <p>Payment Partners</p>
      <span class="cursor-pointer"><i class="fa-brands fa-amazon-pay"></i></span>
      <span class="cursor-pointer"><i class="fa-brands fa-cc-visa"></i></span>
      <span class="cursor-pointer"><i class="fa-brands fa-cc-mastercard"></i></span>
      <span class="cursor-pointer"><i class="fa-brands fa-cc-paypal"></i></span>
    </div>
    <div class="delivery flex  items-center gap-4">
      <p>Get deliveries with FreshCart</p>
      <span class="text-3xl cursor-pointer text-green-600"><i class="fa-brands fa-app-store-ios"></i></span>
      <span class="text-3xl cursor-pointer text-green-600"><i class="fa-brands fa-google-play"></i></span>
    </div>
  </div>
</footer>
</template>

<script setup>

</script>

<style  scoped>

</style>