// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    provider: 'netlify',
    format: ['webp', 'svg'],
    sizes: 'sm:100vw md:50vw lg:400px',
    presets: {
      'blog-cover': {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: '80',
        }
      }
    }
  },
})