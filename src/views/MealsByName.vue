<template>
  <div class="p-8">
    <input
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full bg-white"
      placeholder="search for meals"
      @change="searchMeal"
    />
  </div>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
// import YoutubeButton from "../components/YoutubeButton.vue";
import MealItem from "../components/MealItem.vue";
const keyword = ref("");

const route = useRoute();

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeal();
  }
});

function searchMeal() {
  store.dispatch("searchMeals", keyword.value);
}
let meals = computed(() => store.state.searchedMeals);
</script>
