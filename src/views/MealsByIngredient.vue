<template>
  <Loader v-if="isLoading" />
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals for {{ ingredient }}
    </h1>
  </div>
  <EmptyState v-if="!meals?.length" class="text-center" />
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import EmptyState from "../components/EmptyState.vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import Loader from "../components/Loader.vue";

const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();

const ingredient = route.params.ingredient;

onMounted(() => {
  store.dispatch("searchMealsByIngredient", ingredient);
});

const isLoading = computed(() => store.state.isLoading);
</script>
