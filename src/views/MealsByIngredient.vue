<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ingredient}}</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
      No meals Available
    </div>
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();

const ingredient = route.params.ingredient;

onMounted(() => {
  store.dispatch("searchMealsByIngredient", ingredient);
});
</script>
