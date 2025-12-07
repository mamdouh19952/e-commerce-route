<template>
  <div
 
<<<<<<< HEAD
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
=======
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-30 px-12 mb-12"
>>>>>>> ad185da (Initial commit for new Vue project)
  >
    <div
          v-for="brand in apiData"

      :key="brand._id"
      class="p-2 border border-green-100 rounded shadow-lg cursor-pointer overflow-hidden group flex flex-col justify-between items-center"
    >
<<<<<<< HEAD
      <div class="overflow-hidden w-full h-48 rounded">
        <img
             @click="goBrandDetails(brand._id)"
=======
      <div class="overflow-hidden w-full h-48 rounded relative group">
        <img
>>>>>>> ad185da (Initial commit for new Vue project)

          class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          :src="brand.image"
          :alt="brand.name"
        />
<<<<<<< HEAD
=======
        <div
    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center 
           opacity-0 group-hover:opacity-60 transition-opacity duration-500"
  >
    <button 
    @click="goBrandDetails(brand._id)"
      class="text-white bg-blue-600 px-4 py-2 rounded-lg shadow-lg 
             hover:bg-green-900 transition-colors duration-300 cursor-pointer"
    >
      Get more data
    </button>
  </div>
  
>>>>>>> ad185da (Initial commit for new Vue project)
      </div>

      <div class="py-4">
        <h3 class="text-center text-lg font-semibold">
          {{ brand.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/composables/useApi";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { apiData,  apiError } = useApi(
  "https://ecommerce.routemisr.com/api/v1/brands"
);

function goBrandDetails(id) {
  router.push(`/brands/${id}`);
}


</script>

<style lang="scss" scoped></style>
