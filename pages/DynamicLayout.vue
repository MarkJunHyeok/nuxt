<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const enableCustomLayout = () => {
  route.meta.layout = 'default';
};
definePageMeta({
  layout: false,
});
</script>