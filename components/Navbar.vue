<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink><br>
    <NuxtLink to="/about">About</NuxtLink><br>
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink><br>
    <NuxtLink :to="{name : 'users-list' }" >User List</NuxtLink><br>
    <NuxtLink to="/posts">Post List</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt 3 basic` : 'Nuxt 3 basic';
  },
});
</script>