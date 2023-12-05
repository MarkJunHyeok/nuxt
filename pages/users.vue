<script setup lang="ts">
const resetError = (error) => {
  error.value = null
}

const someErrorLogger = (error) => {
  console.log('someErrorLogger', error)
}
</script>

<template>
  <div>
    <h1>Users</h1>
    <NuxtErrorBoundary @error="someErrorLogger">
      <NuxtPage/>
      <template #error="{ error }">
        <p>{{ error }}</p>
        <button @click="resetError(error)">Clear Error</button>
      </template>
    </NuxtErrorBoundary>
  </div>

</template>

<style scoped>

</style>