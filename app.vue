<script setup lang="ts">
const admin = false
const layout = admin ? 'custom' : 'default'
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>
