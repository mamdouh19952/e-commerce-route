<template>
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