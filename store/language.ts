// stores/language.ts
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'es',
    content: null
  }),
  
  getters: {
    text: (state) => state.content
  },
  
  actions: {
    async setLanguage(lang: 'es' | 'en') {
      this.currentLanguage = lang
      const response = await fetch(`/content/${lang}.json`)
      this.content = await response.json()
    }
  }
})