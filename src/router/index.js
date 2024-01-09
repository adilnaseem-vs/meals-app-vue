import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredient from "../views/Ingredients.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },

      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },

      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },

      {
        path: "/ingredient",
        name: "Ingredient",
        component: Ingredient,
      },

      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },

      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/*
// Nested Routes

const routes = [
  {
    path: '/user',
    component: User,
    children: [
      {
        // when /user/:id/profile is matched
        path: ':id/profile',
        component: UserProfile
      },
      {
        // when /user/:id/posts is matched
        path: ':id/posts',
        component: UserPosts
      }
    ]
  }
];


// User.vue
<template>
  <div>
    <h1>User Component</h1>
    <router-view></router-view> <!-- Nested outlet -->
  </div>
</template>

// UserProfile.vue
<template>
  <div>
    <h2>User Profile Component</h2>
    <!-- User profile details here -->
  </div>
</template>

// UserPosts.vue
<template>
  <div>
    <h2>User Posts Component</h2>
    <!-- User posts list here -->
  </div>
</template>
*/
