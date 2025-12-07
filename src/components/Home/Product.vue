<template>

    <div  class=" p-2 border border-green-100 rounded shadow-lg cursor-pointer overflow-hidden">

<div class="overflow-hidden w-full h-48 rounded relative group">     
   <img
    class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
    :src="productData.imageCover"
    :alt="productData.title"
  />

  <div
    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center 
           opacity-0 group-hover:opacity-60 transition-opacity duration-500"
  >
    <button 
    @click.stop="goToProductDetails(productData.id)"
      class="text-white bg-blue-600 px-4 py-2 rounded-lg shadow-lg 
             hover:bg-green-900 transition-colors duration-300 cursor-pointer"
    >
      Get more data
    </button>
  </div>
  
</div>
<div class="flex-1 flex flex-col mt-3">
  <h3 class="text-main text-sm font-medium">{{ productData?.category.name }}</h3>
  <h3 class="text-base font-semibold line-clamp-2">
    {{ productData?.title.split(" ").slice(0, 2).join(" ") }}
  </h3>
</div>  
<div class="flex justify-between items-center mt-2 text-sm">

  <!-- <span class="font-bold">{{ productData.price }} EGP</span>   -->

  <span :class="{'line-through text-gray-400' : productData?.priceAfterDiscount}">{{ productData?.price }} EGP</span>  
  <span v-if="productData?.priceAfterDiscount" class=" text-main">{{ productData?.priceAfterDiscount }} EGP</span>

  <span class="flex items-center gap-1">
    <i class="fa-solid fa-star text-main"></i>
    {{ productData?.ratingsAverage }}
  </span>
</div>
<<<<<<< HEAD
<div class="flex items-center gap-2 mt-2">
=======
<div class="flex items-center justify-around gap-2 mt-2">
>>>>>>> ad185da (Initial commit for new Vue project)

<button 
  @click.stop="cartStore.addToCart(productData.id)"
  :disabled="cartStore.addingToCartId===productData.id"
  class="mt-3 text-white px-4 py-2 rounded cursor-pointer hover:bg-main transition-colors duration-300 bg-blue-600 flex items-center justify-center gap-2"
>
  <template v-if="cartStore.addingToCartId===productData.id">
    <i class="fa-solid fa-spinner fa-spin"></i>
    Loading...
  </template>
  <template v-else>
    <i class="fa-solid fa-cart-plus"></i>
    Add to cart
  </template>
</button>
 <button @click="wishlist.toggleWishlist(productData.id)">
    <span
      :class="wishlist.isInWishlist(productData.id) ? 'text-red-700' : 'text-main'"
      class="text-xl cursor-pointer"
    >
      <i class="fa-solid fa-heart"></i>
    </span>
  </button>

</div>


</div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useCartStore } from '@/stores/cart';
import { IProduct } from '@/types/index';
import { onMounted } from 'vue';
import { useWishlistStore } from "@/stores/wishlist";

defineProps<{
  productData: IProduct;
}>();
const cartStore = useCartStore();
function goToProductDetails(id:string){
// router.push({name:'ProductDetails', params:{id}})
    router.push(`/product/${id}`)
}

const wishlist = useWishlistStore();

// أول ما الصفحة تفتح، هات الـ wishlist من الـ API
onMounted(() => {
  wishlist.fetchWishlist();
});

</script>

<style  scoped>

</style>