<template>
  <div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-30 mb-12 px-12"

  >
    <div
      v-for="category in apiData"
      :key="category._id"
      class="p-2 border border-green-100 rounded shadow-lg cursor-pointer overflow-hidden group flex flex-col justify-between items-center"
    >
      <div class="overflow-hidden w-full h-48 rounded">
        <img
        @click="getCatagoryDetails(category._id)"
          class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          :src="category.image"
          :alt="category.name"
        />
      </div>

      <div class="py-4">
        <h3 class="text-center text-lg font-semibold">
          {{ category.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/composables/useApi";
import router from "@/router";
import { onMounted } from "vue";

const { apiData,  apiError } = useApi(
  "https://ecommerce.routemisr.com/api/v1/categories"
);

function getCatagoryDetails(id) {
    router.push(`/catagory/${id}`)
}
</script>

<style lang="scss" scoped></style>
