<template>
  <div>
    <Navbar />
    <div class="m-20">     <router-view/>
</div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style lang="scss" scoped></style>
