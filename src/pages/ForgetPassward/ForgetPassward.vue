<template>
          
<div v-if="authStore.loading" class="fixed inset-0 bg-gray-200 flex items-center justify-center z-50 ">
  <div class="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
</div>
    <div class="mt-20 pb-12 px-12 w-3/4 mx-auto text-gray-700 grid md:grid-cols-2 gap-6 items-center  transition-all duration-500 ease-in-out  dark:bg-gray-800 dark:text-gray-200 dark:w-full ">

<div class="hidden md:block">
   
    <img 
   
    src="../../assets/images/freshcart-logo.svg"       alt="resetpassward Image" 
      class="w-full h-auto object-cover rounded-lg"
    />
  </div>

      
 

<Form @submit="getValues" :validation-schema="userSchema" >
    <h2 class="text-3xl py-4 ">reset password Now :</h2>
   
<p v-if="authStore.apiErrors" class=" bg-red-200 text-center p-2 rounded-md mt-4 text-lg font-semibold text-red-600">


    {{authStore.fieldError}} <span v-if="authStore.fieldError">:</span> {{ authStore.apiErrors }}</p>


    <div v-for="item in fieldsData" :key="item.name">
    <label :for="item.name" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white ">
        {{item.label}} :</label>
        <Field :name="item.name"

        :type="item.type" :id="item.name" :placeholder="item.placeholder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        <ErrorMessage as="div" :name="item.name" class="text-red-500 text-center m-2 bg-red-200 p-2 mt-2" />
</div>

<button class=" mt-6 bg-green-500 border rounded-md p-2 block text-white cursor-pointer ms-auto hover:bg-green-400"> 
    
 <span v-if="authStore.loading" > loading...</span>
  <span v-else>reset</span>

</button>

</Form>    </div>

<Footer />

</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import { useAuthStore } from '@/stores/auth';
import { ErrorMessage, Field, Form } from 'vee-validate';


import { ref } from 'vue';
import { object, string } from 'yup';
const authStore = useAuthStore();

const userSchema = object({
  email: string().email().required("please enter a your email if you don't have an account please register"),
});

const fieldsData = ref([
  { name: 'email', type: 'email', placeholder: 'your email' ,label: 'email'},
 
]);
console.log(fieldsData.value);

  function getValues(values ) {
  authStore.forgetPassword(values);
  }    
  
 
</script>

<style  scoped>

</style>