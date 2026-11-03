<template>
    <div class="mt-20 flex flex-col  justify-center items-center lg:flex-row lg:justify-between  ">

        <div class="w-full md:w-1/2 flex flex-col items-center justify-center ">
            <h2 class="xs:text-sm sm:text-2xl md:text-3xl font-bold  mb-6 text-green-600 text-center">Catagory : {{ apiData.name }}</h2>

</div>  

<div class=" w-full md:w-1/2 px-6">

    <img class="w-full lg:w-1/2 object-fill  rounded-xl border-2 border-green-600 " :src="apiData.image" alt="">
</div>
</div>
</template>

<script setup>
import { useApi } from '@/composables/useApi';
import { useRoute } from 'vue-router';



const route=useRoute();
const{apiData,apiError}=useApi(`https://ecommerce.routemisr.com/api/v1/categories/${route.params.id}`)
</script>

<style lang="scss" scoped>

</style>