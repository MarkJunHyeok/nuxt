<script setup lang="ts">
import type {Post} from "~/pages/index.vue";
import type {Ref} from "vue";

const route = useRoute()

console.log(route.params.id)

const { data: post } : { data: Ref<Post> } = await useAsyncData('posts', () =>
    $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
);


</script>

<template>
  <p>ID: {{ route.params.id }}</p>
  <p>Title: {{post.title}}</p>
  <p>Content: {{post.body}}</p>
</template>

<style scoped>

</style>