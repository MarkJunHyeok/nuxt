<script setup lang="ts">
const { count, inc, dec} = useCounter(100)
const { $hello } = useNuxtApp()
</script>

<template>
  <div>
    <h1>Main Page</h1>
    <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>

  <div>
    {{$hello('World')}}
  </div>
</template>

<style>
@import '@/assets/css/style.css';
</style>