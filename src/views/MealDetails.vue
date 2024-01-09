<template>
  <div class="max-w-[800px] mx-auto py-8">
    <Loader v-if="isLoading" />
    <div class="pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">
        {{ meal.strMeal }}
      </h1>
    </div>
    <div class="h-[350px]">
      <img :src="meal.strMealThumb" alt="" class="h-full" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div><strong>Category:</strong> {{ meal.strCategory }}</div>
      <div><strong>Area:</strong> {{ meal.strArea }}</div>
      <div>
        <strong>Tags:</strong>
        <!-- {{ meal.strTags.split(",")[0] }} -->
      </div>
    </div>
    <h1 class="text-2xl mb-3 font-semibold">Instructions</h1>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl mb-3 font-semibold">Ingredients</h2>
        <ul>
          <template v-for="(i, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}- {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl mb-3 font-semibold">Measures</h2>
        <ul>
          <template v-for="(i, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4 space-x-2">
        <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
        <a
          :href="href"
          class="px-3 inline-block py-2 rounded border border-indigo-600 transition-colors cursor-pointer hover:bg-indigo-300"
          target="_blank"
          >View Original Source</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";
import Loader from "../components/Loader.vue";
import store from "../store";

const route = useRoute();

onMounted(() => {
  store.commit("setIsLoading", true);
  axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
    store.commit("setIsLoading", false);
  });
});

const isLoading = computed(() => store.state.isLoading);
const meal = ref({});
</script>
