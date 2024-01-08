<template>
  <div class="p-8">
    <div class="pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    </div>
    <input
      v-model="keyword"
      class="rounded border-2 mb-3 border-gray-200 w-full bg-white"
      placeholder="search for Ingredients"
    />
    <div class=" flex flex-wrap gap-4">
      <RouterLink
      :to="{
        name: `byIngredient`,
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="bg-white rounded p-3 mb-3 shadow block border border-orange-500"
    >
      <h3 class=" font-semibold">{{ ingredient.strIngredient }}</h3>
    </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);
const keyword = ref("");

const computedIngredients = computed(() => {
  return ingredients.value.filter((ing) =>
    ing.strIngredient
      .toLocaleLowerCase()
      .includes(keyword.value.toLocaleLowerCase())
  );
});

onMounted(() => {
  axiosClient
    .get("/list.php?i=list")
    .then((data) => {
      ingredients.value = data.data.meals;
    })
    .catch((err) => {});
});
</script>
