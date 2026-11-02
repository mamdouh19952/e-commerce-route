<template>
            <Navbar />

    <div class="m-20 w-3/4 mx-auto text-gray-700">
<Form @submit="getValues" :validation-schema="userSchema" >
    <h2 class="text-3xl py-4">Register Now :</h2>
<p v-if="authStore.apiErrors" class=" bg-red-200 text-center p-2 rounded-md mt-4 text-lg font-semibold text-red-600">


    {{authStore.fieldError}} <span v-if="authStore.fieldError">:</span> {{ authStore.apiErrors }}</p>
<!-- <div class="mt-4">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">email :</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email" 
        v-model="user.email"
        name="email" />
</div> -->


    <!-- <div>
    <label for="name" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">name :</label>
        <Field name="name"
        :rules="requiredName"

        type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" />
        <ErrorMessage as="div" name="name" class="text-red-500 text-center m-2 bg-red-200 p-2 mt-2" />
</div> -->

    <div v-for="item in fieldsData" :key="item.name">
    <label :for="item.name" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
        {{item.label}} :</label>
        <Field :name="item.name"

        :type="item.type" :id="item.name" :placeholder="item.placeholder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        <ErrorMessage as="div" :name="item.name" class="text-red-500 text-center m-2 bg-red-200 p-2 mt-2" />
</div>

<button class=" mt-6 bg-green-500 border rounded-md p-2 block text-white cursor-pointer ms-auto hover:bg-green-400"> Register</button>

</Form>    </div>

<Footer />

</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { useAuthStore } from '@/stores/auth';
import { ErrorMessage, Field, Form } from 'vee-validate';


import { ref } from 'vue';
import { object, string , ref as  refYup} from 'yup';
const authStore = useAuthStore();



// const requiredName = (value) => {
//   if (value) {
//     return true;
//   } else {
//     return 'please enter your name';
//   }
// };




//  const user = ref({
//     name: '',
//     email: '',
//     password: '',
//     repassword: '',
//     phone: ''
//   });
const userSchema = object({
  name: string().required("you must enter your name ").min(3, "name must be at least 3 characters"),
  email: string().email().required("please enter a valid email contains @ and .com"),
  password: string().required().matches(/^(?=.*[A-Za-z]).{6,14}$/, "password must be between 6 and 14 characters"),
  rePassword: string().required("it should matches the password").oneOf([refYup('password')]),
  phone: string().required().matches(/^(010|011|012|015)[0-9]{8}$/, "please enter a valid phone number starting with 010, 011, 012, or 015")
});

const fieldsData = ref([
  { name: 'name', type: 'text', placeholder: 'your name' ,label: 'name'},
  { name: 'email', type: 'email', placeholder: 'your email' ,label: 'email'},
  { name: 'password', type: 'password', placeholder: 'your password' ,label: 'password'},
  { name: 'rePassword', type: 'password', placeholder: 're-enter your password' ,label: 'rePassword'},
  { name: 'phone', type: 'text', placeholder: 'your phone' ,label: 'phone'}
]);
console.log(fieldsData.value);

  function getValues(values ) {
    console.log("Form Values:", values);
    authStore.register(values);
  }     

</script>

<style  scoped>

</style>