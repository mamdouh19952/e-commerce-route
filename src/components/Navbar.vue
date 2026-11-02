<template>
    <nav class="bg-gray-200 h-16 fixed top-0 z-50 left-0 right-0 ">

<div class="flex justify-between items-center container mx-auto h-full text-gray-400 ">
   
    <div class="flex gap-4 items-center">
         <router-link  exact-active-class=" " to= "/" >
    <img  src="../assets/images/freshcart-logo.svg" alt="">
</router-link>
    <router-link exact-active-class="bg-[#33a43d] p-2 text-2xl text-white rounded-md " v-if="authStore.IsLoggedIn" :to="{ name: 'home' }">home</router-link>
    <router-link exact-active-class="bg-[#33a43d] p-2 text-2xl text-white rounded-md " v-if="authStore.IsLoggedIn" :to="{ name: 'cart' }">Cart</router-link>
    <router-link exact-active-class="bg-[#33a43d] p-2 text-2xl text-white rounded-md " v-if="authStore.IsLoggedIn" :to="{ name: 'wishlist' }">wishlist</router-link>
    <router-link exact-active-class="bg-[#33a43d] p-2 text-2xl text-white rounded-md " v-if="authStore.IsLoggedIn" :to="{ name: 'product' }"> product</router-link>
    <router-link exact-active-class="bg-[#33a43d] p-2 text-2xl text-white rounded-md " v-if="authStore.IsLoggedIn" :to="{ name: 'catagory' }">catagory</router-link>
    <router-link exact-active-class="bg-[#33a43d] p-2 text-2xl text-white rounded-md " v-if="authStore.IsLoggedIn" :to="{ name: 'brands' }">barnds</router-link>
</div>
<div class="flex gap-4 items-center">
    <ul class="flex gap-2 items-center text-gray-900">

       <li class="cursor-pointer"><i class="fa-brands fa-youtube"></i></li>
       <li class="cursor-pointer"><i class="fa-brands fa-linkedin"></i></li>
       <li class="cursor-pointer"><i class="fa-brands fa-facebook"></i></li>
       <li class="cursor-pointer"><i class="fa-brands fa-instagram"></i></li>
       <li class="cursor-pointer"><i class="fa-brands fa-twitter"></i></li>
              <li
              @click="router.push({ path: '/cart' })"
              class="cursor-pointer text-2xl relative">
                 <span 
                 v-if="cartStore.totalCartNumber > 0"
                 class="absolute -top-3 -right-2 text-white text-sm bg-green-600 rounded-full w-6 h-6 flex items-center justify-center">
                     {{ cartStore.totalCartNumber }}
                 </span>
                
                <i class="fa-solid fa-cart-shopping"></i></li>
            
    </ul>

            <span   v-if="authStore.IsLoggedIn" @click="authStore.logout()"  class="cursor-pointer">Logout</span>
       <template v-else>
           <router-link  :to="{ name: 'signin' }"       >Login</router-link>
           <router-link  :to="{ name: 'register' }">Register</router-link>
       </template>
        </div>
</div>    
    </nav>
</template>

<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';

const authStore = useAuthStore();
const cartStore = useCartStore();

</script>

<style  scoped>
/* 
.router-link-active {
    color: #ff6f61;
    font-weight: bold;
  }
 */
/* .router-link-exact-active {
   background-color: #33a43d; 
   color: #fff;
    font-weight: bold;
    border-radius: 5px;
  } */


</style>