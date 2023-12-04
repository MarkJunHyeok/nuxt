<script setup lang="ts">
const route = useRoute()

console.log(route.params.id)

</script>

<template>
  <p>ID: {{ route.params.id }}</p>
</template>

<style scoped>

</style>