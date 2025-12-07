<template>
<<<<<<< HEAD
    <div class="m-20 flex justify-between items-center">
        
        <div class="w-1/2">
            <h2 class="text-7xl font-bold mb-6 text-green-600">  brand :{{ apiData.name }}</h2>
        </div>
<div class="w-1/2 bg-green-400">
    <img class="w-full object-fill" :src="apiData.image" alt="">
=======
    <div class="mt-20 flex flex-col lg:flex-row lg:justify-between justify-center items-center  ">
        
     <div class="w-1/2">
            <h2 class="xs:text-sm sm:text-2xl md:text-3xl font-bold mb-6 text-green-600">  brand :{{ apiData.name }}</h2>
        </div>
<div class="w-1/2 ">
    <img class="w-full object-fill h-96 rounded-xl border-2 border-green-600" :src="apiData.image" alt="">
>>>>>>> ad185da (Initial commit for new Vue project)
</div>
    </div>
</template>

<script setup>
import { useApi } from '@/composables/useApi';
import { useRoute } from 'vue-router';

const route = useRoute();

const { apiData,  apiError } = useApi(
  `https://ecommerce.routemisr.com/api/v1/brands/${route.params.id}`
);
</script>

<style lang="scss" scoped>

</style>