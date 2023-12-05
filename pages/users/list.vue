<template>
  <div>
    <h1>에러 핸들링</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="inc">+</button></div>
  </div>
</template>
<script setup>
const counter = ref(0);
const inc = () => {
  throw showError({
    statusCode: 400,
    statusMessage: 'Bad Request',
    message: '에러 발생'
  });
  counter.value++;
};
</script>