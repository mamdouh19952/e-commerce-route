<template>
  <Navbar />

<<<<<<< HEAD
  <div class="m-20 w-3/4 mx-auto text-gray-700">
=======
  <div class="mt-20 w-3/4 mx-auto text-gray-700">
>>>>>>> ad185da (Initial commit for new Vue project)
    <Form @submit="getValues" :validation-schema="paymentSchema">
      <h2 class="text-3xl py-4">Pay Now :</h2>
      

      <div v-for="item in fieldsData" :key="item.name">
        <label
          :for="item.name"
          class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
        >
          {{ item.label }} :</label
        >
        <Field
          :name="item.name"
          :type="item.type"
          :id="item.name"
          :placeholder="item.placeholder"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <ErrorMessage
          as="div"
          :name="item.name"
          class="text-red-500 text-center m-2 bg-red-200 p-2 mt-2"
        />
      </div>

      <button
        class="mt-6 bg-green-500 border rounded-md p-2 block text-white cursor-pointer ms-auto hover:bg-green-400"
      >
        Pay Now
      </button>
    </Form>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";
import axios from "axios";
import { ErrorMessage, Field, Form } from "vee-validate";

import { ref } from "vue";
import { object, string } from "yup";
const authStore = useAuthStore();

const paymentSchema = object({
  details: string()
    .required("you must enter your details ")
    .min(3, "details must be at least 3 characters"),
  phone: string()
    .required()
    .matches(
      /^(010|011|012|015)[0-9]{8}$/,
      "please enter a valid phone number starting with 010, 011, 012, or 015"
    ),
city: string()
    .required("you must enter your city ")
    .min(3, "city must be at least 3 characters"),
});

const fieldsData = ref([
  {
    name: "details",
    type: "text",
    placeholder: "your details",
    label: "details",
  },
  { name: "phone", type: "tel", placeholder: "your phone", label: "phone" },
  { name: "city", type: "text", placeholder: "your city", label: "city" },
]);
console.log(fieldsData.value);
const cartStore = useCartStore();
const url =window.location.origin;
function getValues(values) {
    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartStore.cartId}?url=${url}`,
    
    {
        details: values.details,
        phone: values.phone,
        city: values.city,
    },
    {
        headers: {
            token: authStore.token,
        },
    }
)


    
    .then((res)=>{
        console.log(res.data);
        window.location.href = res.data.session.url

    })
  .catch((err)=>{
      console.log(err);
  })
}
</script>

<style scoped></style>
