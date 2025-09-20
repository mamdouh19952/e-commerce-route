<template>
  <div
 
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <div
          v-for="brand in apiData"

      :key="brand._id"
      class="p-2 border border-green-100 rounded shadow-lg cursor-pointer overflow-hidden group flex flex-col justify-between items-center"
    >
      <div class="overflow-hidden w-full h-48 rounded">
        <img
             @click="goBrandDetails(brand._id)"

          class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          :src="brand.image"
          :alt="brand.name"
        />
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
const { apiData, loading, apiError } = useApi(
  "https://ecommerce.routemisr.com/api/v1/brands"
);

function goBrandDetails(id) {
  router.push(`/brands/${id}`);
}


</script>

<style lang="scss" scoped></style>
