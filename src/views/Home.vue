<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Current Special</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal of randomMeals" :key="meal.idMeal" :meal="meal[0]" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import MealItem from "../components/MealItem.vue";

const randomMeals = computed(() => store.state.randomMeals);

onMounted(async () => {
  store.dispatch("randomMeal");
});
</script>
