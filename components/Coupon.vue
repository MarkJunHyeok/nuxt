<script setup lang="ts">
  const show = ref(false)
  const handleClick = () => {
    show.value = true
  }
</script>

<template>
  <div>
    Coupon 번호: 1234
    <button @click="handleClick">Coupon Get</button>
    <Coupon v-if="show" />
  </div>
</template>

<style scoped>

</style>