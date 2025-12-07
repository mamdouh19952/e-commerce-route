<template>
  <div class="w-full text-center my-10">
  <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block pb-2">
    Shop Popular catagories   
    <span class="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded"></span>
  </h2>
</div>
      
    <Carousel class="one" dir="rtl" v-bind="carouselConfig">
    <Slide v-for="category in AllCategories" 
    :key="category._id" 
      class="flex flex-col items-center bg-white  overflow-hidden ">

      <div class="carousel__item w-full h-28" >

        <img :src="category.image" :alt="category.name" 
class="w-full h-full object-cover object-top"
 />
      </div>
      
    </Slide>

    <template #addons>
     
    </template>
  </Carousel>
    <Carousel  v-bind="carouselConfig">
    <Slide v-for="category in AllCategories" 
    :key="category._id" 
      class="flex flex-col items-center bg-white  overflow-hidden ">

      <div class="carousel__item w-full h-28" >

        <img :src="category.image" :alt="category.name" 
class="w-full h-full object-cover object-bottom"
 />
      </div>
       <div class="py-4">
    <h3 class="text-center text-lg font-semibold">{{ category.name }}</h3>
  </div>
    </Slide>

    <template #addons>
      <Pagination />
        <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ICategory } from '@/types/catagory';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, ref } from 'vue';
const carouselConfig = {
  itemsToShow: 3.5,
  wrapAround: true,
    autoplay: 2000,

};
const AllCategories =ref<ICategory[]>([]);




function getAllCategories() {

    axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    .then((res)=>{
        console.log(res.data);
        AllCategories.value = res.data.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}
onMounted(() => {
    getAllCategories();
});

</script>

<style  scoped>




/* :deep(.carousel__item){
  height: 150px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
}
:deep(.carousel__pagination){
  margin-top: -0px;
} */




 :deep( .carousel__prev)
   {
display: none;
}

 :deep( .carousel__next)
   {
display: none;
}

 :deep(.carousel__pagination-button--active)
   {
    background-color: #4CAF50;
}

 :deep(.carousel__pagination-button:hover)
   {
    background-color: #4CAF50;
}

</style>