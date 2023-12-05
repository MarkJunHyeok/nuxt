<template>
  <div>
    <h1>카운터</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="inc">+</button></div>
  </div>
</template>

<script setup lang="ts">
const counter = ref(0);
const inc = () => {
  throw createError('에러 발생');
  counter.value++;
};
</script>