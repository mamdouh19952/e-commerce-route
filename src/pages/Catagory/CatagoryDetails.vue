<template>
    <div class=" flex justify-between items-center" >

<div class="w-1/2 flex flex-col items-center ">
            <h2 class="text-3xl font-bold mb-6 text-green-600">Catagory :{{ apiData.name }}</h2>

</div>  

<div class="w-1/2">

    <img class="w-full object-fill h-96 " :src="apiData.image" alt="">
</div>
</div>
</template>

<script setup>
import { useApi } from '@/composables/useApi';
import { useRoute } from 'vue-router';



const route=useRoute();
const{apiData,loading,apiError}=useApi(`https://ecommerce.routemisr.com/api/v1/categories/${route.params.id}`)
</script>

<style lang="scss" scoped>

</style>