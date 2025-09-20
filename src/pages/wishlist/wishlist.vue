<template>
  <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
      <h2
        class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-main"
      >
        your wishlist <span 
        v-if="getData.length === 0"
        class="text-red-500"> is empty</span>
      </h2>

      <div
        v-for="item in getData"
        :key="item.id"
        class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6 relative"
      >
        <div
          class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
        >
          <div class="img-box">
            <img
              :src="item.imageCover"
              alt="perfume bottle image"
              class="xl:w-[140px] rounded-xl object-cover"
            />
          </div>
          <div class="pro-data w-full max-w-sm">
            <h5
              class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
            >
              {{ item.title }}
            </h5>
            <p
              class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center"
            >
              {{ item.category.name }}
            </p>
            <h6
              class="font-medium text-lg leading-8 text-red-600 max-[550px]:text-center"
            >
              <button
                @click="removeFromWishlist(item.id)"
                class="rounded-full group flex items-center gap-1.5 justify-center focus-within:outline-red-500 cursor-pointer"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                    cx="17"
                    cy="17"
                    r="17"
                    fill=""
                  />
                  <path
                    class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                    d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                    stroke="#EF4444"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
                <p>remove</p>
              </button>
            </h6>
          </div>
        </div>
        <div
          class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
        >
          <h6
            class="font-manrope font-bold text-2xl leading-9 text-main w-full max-w-[176px] text-center"
          >
          $  {{ item.price }}
          </h6>

          <h6
            class="text-indigo-600 font-manrope font-bold mx-auto text-xl  w-full max-w-[176px] text-center"
          >
           <button 
  @click="cartStore.addToCart(item.id)"
  :disabled="cartStore.addingToCartId===item.id"
  class="mt-3 text-white px-4 py-2 rounded cursor-pointer hover:bg-main transition-colors duration-300 bg-blue-600 flex items-center justify-center gap-2"
>
  <template v-if="cartStore.addingToCartId===item.id">
    <i class="fa-solid fa-spinner fa-spin"></i>
    Loading...
  </template>
  <template v-else>
    <i class="fa-solid fa-cart-plus"></i>
    Add to cart
  </template>
</button>
          </h6>
        </div>
      </div>

 

    </div>
  </section>
</template>

<script setup lang="ts">
import { useFetchApi } from "@/composables/FetchApi";
import { useCartStore } from "@/stores/cart";
import { onMounted } from "vue";
const cartStore = useCartStore();
const { getApi, getData,deleteApi } = useFetchApi();
onMounted(() => {
  
  getApi("https://ecommerce.routemisr.com/api/v1/wishlist");
});
function removeFromWishlist(id) {
  deleteApi(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, id);
}

</script>
<style lang="scss" scoped></style>
