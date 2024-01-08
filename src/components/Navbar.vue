<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <RouterLink
      class="inline-flex px-5 h-ful items-center"
      :to="{ name: 'home' }"
      >Home</RouterLink
    >
    <div class="flex items-center gap-1">
      <RouterLink
        class="inline-flex px-5 h-full hover:bg-orange-500 text-orange-500 font-bold transition-colors hover:text-white items-center"
        :to="{ name: 'byName' }"
        >Search Meal</RouterLink
      >
      <RouterLink
        class="inline-flex px-5 h-full hover:bg-orange-500 text-orange-500 font-bold transition-colors hover:text-white items-center"
        :to="{ name: 'byLetter' }"
        >Meals by Letters</RouterLink
      >
      <RouterLink
        class="inline-flex px-5 h-full hover:bg-orange-500 text-orange-500 font-bold transition-colors hover:text-white items-center"
        :to="{ name: 'Ingredient' }"
        >Meals by Ingredients</RouterLink
      >
    </div>
  </header>
</template>
