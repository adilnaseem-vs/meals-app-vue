<template>
  <Navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
