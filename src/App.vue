<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import { useCartStore } from './stores/cart';
    import { useWishlistStore } from "@/stores/wishlist";

const wishlistStore = useWishlistStore();

const authStore = useAuthStore();
const cartStore = useCartStore();
onMounted(() => {
  authStore.GetTokens();
cartStore.getUserCartData();
  wishlistStore.fetchWishlist();

  
});


</script>

<template>
 
  <router-view/>
</template>

<style scoped></style>
