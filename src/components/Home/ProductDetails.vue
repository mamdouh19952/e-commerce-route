
<template>
  <div class="container mx-auto mt-20 mb-10">
    <div class="flex items-start gap-20 mt-6">
      
      <div class="w-2/5">
        <img :src="currentProduct?.imageCover" class="w-full h-[250px] md:h-[400px] object-contain " alt="">
      </div>

      <div class="w-3/5 pt-6">
        <h2 class="text-2xl text-main font-semibold ">{{ currentProduct?.title }}</h2>
        <p class="text-gray-600 text-lg pt-3.5">{{ currentProduct?.description }}</p>
        <p class="font-extralight text-lg pt-3.5">{{ currentProduct?.category.name }}</p>
        <div class="flex justify-between items-center mt-6 mb-6">
          <span class="text-xl font-bold text-green-600">{{ currentProduct?.price }} EGP</span>
          <span class="flex items-center gap-1">
         {{ currentProduct?.ratingsAverage }}   <i class="fa-solid fa-star text-main"></i>
          </span>
        </div>
        <button 
        @click="CartStore.addToCart(currentProduct?.id)" 
        
        
        class=" w-full cursor-pointer  py-2 bg-blue-600 text-white  rounded hover:bg-green-700">
          Add to Cart
        </button>
      </div>

    </div>
  </div>
  <Footer />    
</template>
<script setup lang="ts">
import axios from 'axios';
import Footer from '../Footer.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { IProduct } from '@/types';
import { useCartStore } from '@/stores/cart';
const currentProduct = ref<IProduct | null>(null);
const route = useRoute();
const CartStore = useCartStore();
function getProductDetails(){

    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${route.params.id}`)
    .then((res)=>{
        console.log(res.data);
        currentProduct.value = res.data.data
    })
    .catch((err)=>{
        console.log(err);
    })
  console.log(route.params.id);
}
onMounted(() => {
    getProductDetails();
});
</script>
