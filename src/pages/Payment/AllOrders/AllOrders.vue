<template>
 <div class="m-10">
  <h2 class="text-3xl font-bold mb-6 text-gray-800">🛒 All Orders</h2>

  <!-- حالة مفيش أوردر -->
  <div v-if="orders.length === 0" class="text-gray-500 text-lg">
    No orders found.
  </div>

  <!-- حالة وجود أوردر -->
  <ul v-else class="space-y-6">
    <h4 class="text-xl font-semibold mb-4 text-gray-700">
      Number of your orders:
      <span class="text-green-600">{{ orders.length }}</span>
    </h4>

    <li
      v-for="order in orders"
      :key="order.id"
      class="p-6 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-lg transition duration-300"
    >
      <p class="mb-2">
        <span class="font-semibold text-gray-700">Tax Price:</span>
        <span class="text-gray-600">{{ order.taxPrice }} EGP</span>
      </p>
      <p class="mb-2">
        <span class="font-semibold text-gray-700">Payment Method:</span>
        <span class="text-gray-600">{{ order.paymentMethodType }}</span>
      </p>
      <p class="mb-2">
        <span class="font-semibold text-gray-700">Total Price:</span>
        <span class="text-green-600 font-bold">{{ order.totalOrderPrice }} EGP</span>
      </p>
      <p>
        <span class="font-semibold text-gray-700">Paid:</span>
        <span
          :class="order.isPaid ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'"
        >
          {{ order.isPaid ? "Yes ✅" : "No ❌" }}
        </span>
      </p>
    </li>
  </ul>
</div>


</template>

<script setup>
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ref } from "vue";
import { onMounted } from "vue";
const orders = ref([]);
  const token = localStorage.getItem("token");
const decodedToken = jwtDecode(token);
    console.log("Decoded Token:", decodedToken);
    const userId = decodedToken.id;
function GetAllOrders() {
  axios
    .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("Orders:", res.data);
      orders.value = res.data;
    })
    .catch((err) => {
      console.error("Error fetching orders:", err);
    });
}

onMounted(() => {
  if (token) {
    
        GetAllOrders();
  } else {
    console.warn("No token found in localStorage");
  }
});
</script>

<style scoped></style>
