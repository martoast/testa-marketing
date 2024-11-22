// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
  image: {
    provider: 'netlify',
    format: ['webp', 'svg'],
    sizes: 'sm:100vw md:50vw lg:400px',
    presets: {
      'main-cover': {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: '80',
        }
      },
      'avatar': {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          width: 40,
          height: 40,
        }
      }
    }
  },
})