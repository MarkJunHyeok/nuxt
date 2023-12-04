// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
    }
  ],
  css: ['/assets/css/style.css'],
  app: {
    head: {
      title: 'Nuxt 3 Basic',
      meta: [{name: 'description', content: 'Nuxt 3 fore beginners'}],
      link: [{rel: 'icon', href: '/icon.png'}],
    },
    pageTransition: {name: 'page', mode: 'out-in'}
  }
})
