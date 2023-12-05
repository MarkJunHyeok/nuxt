<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <NuxtLayout>
    <p>{{error}}</p>
    <button @click="clearError({ redirect: '/'})">Clear Error</button>
  </NuxtLayout>
</template>

<style scoped>

</style>