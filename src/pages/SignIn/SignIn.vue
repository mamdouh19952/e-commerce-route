<template>
            <Navbar />
<div v-if="authStore.loading" class="fixed inset-0 bg-gray-200 flex items-center justify-center z-50 ">
  <div class="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
</div>
<<<<<<< HEAD
    <div class="mt-20 pb-12 px-12 w-3/4 mx-auto text-gray-700 grid md:grid-cols-2 gap-6 items-center  transition-all duration-500 ease-in-out  dark:bg-gray-800 dark:text-gray-200 dark:w-full ">

<div class="hidden md:block">
     <button 
      type="button"

    @click="toggleDarkMode"
    class="px-4 cursor-pointer py-2 bg-green-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
    Toggle Dark Mode
  </button>
    <img 
   
    src="../../assets/images/freshcart-logo.svg"       alt="Login Image" 
      class="w-full h-auto object-cover rounded-lg"
=======
    <div class="mt-20 pb-12 px-2 l:w-[100%] xl:w-[90%] mx-auto text-gray-700 grid md:grid-cols-2 gap-6 items-center  transition-all duration-500 ease-in-out  dark:bg-gray-800 dark:text-gray-200 dark:w-full ">

<div class="hidden md:block">

    <img 
   
    src="../../assets/images/freshcart-logo.svg"       alt="Login Image" 
      class="w-full md:mr-20 h-auto object-cover rounded-lg"
>>>>>>> ad185da (Initial commit for new Vue project)
    />
  </div>

      
 

<<<<<<< HEAD
<Form @submit="getValues" :validation-schema="userSchema"  >
=======
<Form class=" m:w-[100%]" @submit="getValues" :validation-schema="userSchema"   >
>>>>>>> ad185da (Initial commit for new Vue project)
    <h2 class="text-3xl py-4 ">Login Now :</h2>
   
<p v-if="authStore.apiErrors" class=" bg-red-200 text-center p-2 rounded-md mt-4 text-lg font-semibold text-red-600">


    {{authStore.fieldError}} <span v-if="authStore.fieldError">:</span> {{ authStore.apiErrors }}</p>


<<<<<<< HEAD
    <div v-for="item in fieldsData" :key="item.name">
=======
    <div v-for="item in fieldsData" :key="item.name" class="w-[100%]">
>>>>>>> ad185da (Initial commit for new Vue project)
    <label :for="item.name" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white ">
        {{item.label}} :</label>
        <Field :name="item.name"

<<<<<<< HEAD
        :type="item.type" :id="item.name" :placeholder="item.placeholder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
=======
        :type="item.type" :id="item.name" :placeholder="item.placeholder" class=" xl:w-[100%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
>>>>>>> ad185da (Initial commit for new Vue project)
        <ErrorMessage as="div" :name="item.name" class="text-red-500 text-center m-2 bg-red-200 p-2 mt-2" />
</div>

<div class=" mt-5">
<<<<<<< HEAD
<button class=" ms-auto bg-green-500 border rounded-md p-2 block text-white cursor-pointer hover:bg-green-400"> 
=======
<button class="  mx-auto  md:mx-0  xl:m-auto w-80 py-2
flex items-center justify-center
border rounded-md   text-white cursor-pointer bg-green-600  hover:bg-green-500  "> 
>>>>>>> ad185da (Initial commit for new Vue project)
    
 <span v-if="authStore.loading" > loading...</span>
  <span v-else>Login</span>

</button>
<p role="button"

@click="router.push('/reset-password')"

<<<<<<< HEAD
class="   mx-auto  w-fit   p-2  text-gray-400 cursor-pointer hover:text-gray-700  "> 
=======
class="   mx-auto  md:mx-0  xl:m-auto w-80 p-2
   flex items-center justify-center
    cursor-pointer  text-gray-400  hover:text-gray-700  "> 
>>>>>>> ad185da (Initial commit for new Vue project)
    
 <span v-if="authStore.loading" > loading...</span>
  <span v-else>forgetPassward</span>

</p >
<p role="button"

@click="router.push('/register')"

<<<<<<< HEAD
class="   me-auto  w-fit border rounded-md bg-blue-500    p-2  text-white cursor-pointer hover:bg-green-300  "> 
    
 <span v-if="authStore.loading" > loading...</span>
  <span v-else>register now </span>
=======
class="mx-auto  md:mx-0  xl:m-auto
flex items-center justify-center py-2 w-80 border rounded-md bg-blue-700 
   p-2  text-white cursor-pointer hover:bg-blue-500  "> 
    
 <span v-if="authStore.loading" > loading...</span>
  <span v-else>Create new account </span>
>>>>>>> ad185da (Initial commit for new Vue project)

</p >


</div>

</Form>  

</div>

<Footer />

</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { ErrorMessage, Field, Form } from 'vee-validate';


import { ref } from 'vue';
import { object, string } from 'yup';
const authStore = useAuthStore();

const userSchema = object({
  email: string().email().required("please enter a your email if you don't have an account please register"),
  password: string().required().matches(/^(?=.*[A-Za-z]).{6,14}$/, "please enter your password")
});

const fieldsData = ref([
  { name: 'email', type: 'email', placeholder: 'your email' ,label: 'email'},
  { name: 'password', type: 'password', placeholder: 'your password' ,label: 'password'},
 
]);
console.log(fieldsData.value);

  function getValues(values ) {
  authStore.login(values);
  }    
  
<<<<<<< HEAD
  function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}
=======
  
>>>>>>> ad185da (Initial commit for new Vue project)

</script>

<style  scoped>

</style>