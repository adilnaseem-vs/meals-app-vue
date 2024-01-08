<template>
  <a
    :href="href"
    class="px-3 inline-block py-2 rounded border border-red-600  transition-colors cursor-pointer hover:bg-red-300"
    target="_blank"
  >
    <slot></slot
  ></a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
