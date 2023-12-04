<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink><br>
    <NuxtLink to="/about">About</NuxtLink><br>
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink><br>
    <NuxtLink :to="{name : 'users-list' }" >User List</NuxtLink>
  </nav>
</template>