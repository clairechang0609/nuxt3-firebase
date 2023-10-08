// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2
    }
  }
})
