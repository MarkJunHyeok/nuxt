<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <NuxtLayout>
    <p>{{error}}</p>
  </NuxtLayout>
</template>

<style scoped>

</style>