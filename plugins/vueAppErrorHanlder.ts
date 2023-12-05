export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, context) => {
        console.log('에러', error)
        console.log('콘텍스트', context)
    }
})