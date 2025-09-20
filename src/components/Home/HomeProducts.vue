<template>
  <div>
    <!-- العنوان -->
    <div v-if="route.path == '/'"  >
<div class="w-full text-center my-10">
  <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block pb-2">
    Shop Popular Products
    <span class="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded"></span>
  </h2>
</div>
    </div>

    <!-- مربع البحث -->
    <div class="w-full max-w-2xl px-4 mx-auto py-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search product..."
        class="border px-3 py-2 rounded-lg shadow-sm w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
      />
    </div>

    <!-- المنتجات -->
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-6">
      <Product
        v-for="item in filteredProducts"
        :key="item._id"
        :productData="item"
      />
    </div>

    <!-- لو مفيش نتائج -->
    <div v-if="filteredProducts.length === 0" class="text-center py-10 text-gray-500">
      No products found for "<span class="font-semibold">{{ searchQuery }}</span>"
    </div>
  </div>
</template>

<script setup lang="ts">
import Product from '@/components/Home/Product.vue';
import { IProduct } from '@/types/index';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useLoading } from 'vue-loading-overlay';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = useLoading({});
const products = ref<IProduct[]>([]);
const searchQuery = ref("");

// 🟢 هات المنتجات
async function getAllProducts() {
  const loader = loading.show({ color: "#4CAF50" });
  try {
    const res = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
    products.value = res.data.data;
  } catch (err) {
    console.error("Error fetching products:", err);
  } finally {
    loader.hide();
  }
}

// 🟢 فلترة محلية
const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  return products.value.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(() => {
  getAllProducts();
});
</script>
