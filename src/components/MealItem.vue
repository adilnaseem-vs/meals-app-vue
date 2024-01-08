<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl h-48 object-cover w-full"
    />
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
        doloribus veritatis odio aspernatur cum nobis! Assumenda odit officiis
        dignissimos ut facere facilis inventore sunt, exercitationem, aperiam
        animi tenetur, repellat ab.
      </p>
      <div class="mt-3 space-x-2">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <RouterLink
          class="px-3 py-2 inline-block rounded border border-purple-600"
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          >View</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const props = defineProps({
  meal: { required: true, type: Object },
});
</script>
