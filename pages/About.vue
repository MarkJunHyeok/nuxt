<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: 'auth'
})

const title = ref('About Page');
const description = ref('About description');

useHead({
  title: title,
  meta: [
    {
      name: description,
      content: 'About Page'
    }
  ]
})
</script>

<template>
    <h1>About Page</h1>
  <input v-model="title">
  <input v-model="description">
</template>

<style scoped>

</style>