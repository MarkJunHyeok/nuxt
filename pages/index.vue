<script setup lang="ts">
import type {Ref} from "vue";

const { count, inc, dec} = useCounter(100)
const { $hello } = useNuxtApp()

export interface Post{
  id: number,
  title: string,
  body: string
}

const { data: posts, error, pending } = await useAsyncData<Post[]>('posts', () =>
    $fetch('https://jsonplaceholder.typicode.com/posts/')
);


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

  <p v-if="error">{{ error }}</p>
  <p v-if="pending">Loading....</p>
  <ul>
    <li v-for="post in posts!" :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>

<style>
@import '@/assets/css/style.css';
</style>