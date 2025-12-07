<template>
<<<<<<< HEAD
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
=======
    <nav class="bg-gray-200 fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto flex items-center justify-between h-16 px-4">
    
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img src="../assets/images/freshcart-logo.svg" class="h-8" />
        </router-link>
    
        <!-- Mobile Toggle -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden absolute right-4  text-3xl text-gray-700 "
        >
          <i class="fa-solid fa-bars "></i>
        </button>
    
        <!-- Links -->
        <div 
          class="flex-col md:flex-row md:flex  max-h-0 md:max-h-full  md:items-center gap-2 md:gap-4 overflow-hidden transition-all duration-300"
          :class="{ 'max-h-96  open' : isOpen }"
        >
          <!-- Main Links -->
          <div class="flex flex-col md:flex-row gap-3 items-start md:items-center mx-auto md:mx-8">
            <router-link exact-active-class="activeLink" v-if="authStore.IsLoggedIn" :to="{ name: 'home' }" @click="closeMenu">Home</router-link>
            <router-link exact-active-class="activeLink" v-if="authStore.IsLoggedIn" :to="{ name: 'cart' }" @click="closeMenu">Cart</router-link>
            <router-link exact-active-class="activeLink" v-if="authStore.IsLoggedIn" :to="{ name: 'wishlist' }" @click="closeMenu">Wishlist</router-link>
            <router-link exact-active-class="activeLink" v-if="authStore.IsLoggedIn" :to="{ name: 'product' }" @click="closeMenu">Products</router-link>
            <router-link exact-active-class="activeLink" v-if="authStore.IsLoggedIn" :to="{ name: 'catagory' }" @click="closeMenu">Catagory</router-link>
            <router-link exact-active-class="activeLink" v-if="authStore.IsLoggedIn" :to="{ name: 'brands' }" @click="closeMenu">Brands</router-link>
          </div>
    
          <!-- Social + Cart -->
          <div class="   flex-col md:flex-row   md:mt-0 md:flex gap-3 items-center justify-center pr-4    ">
          <div class=" hidden lg:flex gap-3 items-center">
            <i @click="closeMenu" class="fa-brands fa-youtube cursor-pointer hidden lg:inline-block"></i>
            <i @click="closeMenu" class="fa-brands fa-linkedin cursor-pointer"></i>
            <i @click="closeMenu" class="fa-brands fa-facebook cursor-pointer"></i>
            <i @click="closeMenu" class="fa-brands fa-instagram cursor-pointer"></i>
            <i @click="closeMenu" class="fa-brands fa-twitter cursor-pointer"></i>
    </div>
            <!-- Cart Icon -->
          
            <i  v-if="authStore.IsLoggedIn"
              @click="router.push('/cart'); closeMenu();" 
              class="cursor-pointer text-xl relative"
            >
              <span 
                v-if="cartStore.totalCartNumber > 0"

                class="absolute -top-1 -right-2 text-white text-xs bg-green-600 rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ cartStore.totalCartNumber }}
              </span>
              <i class="fa-solid fa-cart-shopping"></i>
            </i>
    
            <!-- Auth -->
                
            <span 
  v-if="authStore.IsLoggedIn"
  @click="authStore.logout(); closeMenu();" 
  :class="isOpen ? 'block w-full mt-2 text-center cursor-pointer' : 'inline cursor-pointer'"
>
  Logout
</span>
    
            <template v-else >
             <div 
  class="md:flex md:flex-row md:items-center md:gap-4 transition-all duration-300 "
  :class="isOpen ? 'flex flex-col gap-4 max-h-20 ' : 'max-h-0 overflow-hidden'"
>
  <router-link :to="{ name: 'signin' }" @click="closeMenu" class="block w-full text-center hover:text-green-600 md:inline md:w-auto">
    Login
  </router-link>
  <router-link :to="{ name: 'register' }" @click="closeMenu" class="block w-full text-center hover:text-green-600 md:inline md:w-auto">
    Register
  </router-link>
</div>
            </template>
          </div>
        </div>
      </div>
    </nav>
    </template>
    
    <script setup>
    import { ref } from "vue"
    import { useRouter } from "vue-router"
    import { useAuthStore } from "@/stores/auth"
    import { useCartStore } from "@/stores/cart"
    
    const router = useRouter()
    const authStore = useAuthStore()
    const cartStore = useCartStore()
    
    const isOpen = ref(false)
    function closeMenu() {
        isOpen.value = false;
    }
    </script>
    
    
    <style scoped>
    .activeLink {
      background: #33a43d;
      padding: 6px 12px;
      border-radius: 6px;
      color: #fff !important;
    }
    .open {
        color: #fff !important;
        position: absolute;
        top: calc(100% );
        right: 0;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0,.7 );
        border-radius: 10px;
        z-index: 100;
    }   
    @media (min-width: 768px) {
     .open {
     } 
    }
    </style>
>>>>>>> ad185da (Initial commit for new Vue project)
