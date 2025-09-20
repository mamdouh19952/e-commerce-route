

<template>
<div class="w-full text-center my-10">
  <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block pb-2">
    Shop Popular brands   
    <span class="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded"></span>
  </h2>
</div>
      
  <Carousel  v-bind="carouselConfig">
    <Slide v-for="brand in apiData" :key="brand._id">
      <div class="carousel__item px-10">
<div class="mx-8">
<img
  class="w-[200px] h-[150px] object-contain mx-auto"
  :src="brand.image"
  :alt="brand.name"
/>      </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useApi } from '@/composables/useApi'

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
    autoplay: 2000 

}

const {
  apiData,
  loading,
  apiError
} = useApi('https://ecommerce.routemisr.com/api/v1/brands')


</script>
<style scoped>

 :deep(.carousel__pagination-button--active)
   {
    background-color: #4CAF50;
}

 :deep(.carousel__pagination-button:hover)
   {
    background-color: #4CAF50;
}
</style>