<template>
  <div class="flex gap-1 justify-center mt-2">
    <RouterLink
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
    >
      {{ letter }}</RouterLink
    >
  </div>
  <Loader v-if="isLoading" />

  <div class="p-8 pb-0">
    <EmptyState v-if="route.params.letter && !meals?.length" />
    <h2
      v-if="!route.params.letter"
      class="text-2xl mb-3 font-semibold text-center"
    >
      Please Select a Letter
    </h2>
    <h1
      v-if="route.params.letter && meals?.length"
      class="text-4xl font-bold mb-4 text-orange-500"
    >
      Meals starting from '{{ route.params.letter }}'
    </h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import Loader from "../components/Loader.vue";
import EmptyState from "../components/EmptyState.vue";
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
const isLoading = computed(() => store.state.isLoading);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

// onMounted(() => {
//   if (route.params.letter)
//     store.dispatch("searchMealsByLetter", route.params.letter);
// });

if (!route.params.letter) store.commit("setMealsByLetter", []);
</script>
