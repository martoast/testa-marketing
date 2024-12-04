// plugins/timezone-language.client.ts
import { useLanguageStore } from '~/store/language'

export default defineNuxtPlugin(async () => {
  const languageStore = useLanguageStore()
  
  const timeZoneLanguageMap: Record<string, 'es' | 'en'> = {
    // Mexico timezones
    'America/Tijuana': 'es',
    'America/Mexicali': 'es',
    'America/Hermosillo': 'es',
    'America/Mazatlan': 'es',
    'America/Chihuahua': 'es',
    'America/Monterrey': 'es',
    'America/Mexico_City': 'es',
    'America/Cancun': 'es',
    'America/Merida': 'es',
    'America/Matamoros': 'es',
    'America/Ojinaga': 'es',
    
    // US timezones
    'America/Los_Angeles': 'en',
    'America/Phoenix': 'en',
    'America/Denver': 'en',
    'America/Chicago': 'en',
    'America/New_York': 'en',
    'America/Detroit': 'en',
    'America/Indiana/Indianapolis': 'en',
    'America/Indiana/Marengo': 'en',
    'America/Indiana/Knox': 'en',
    'America/Indiana/Tell_City': 'en',
    'America/Indiana/Petersburg': 'en',
    'America/Indiana/Vincennes': 'en',
    'America/Indiana/Winamac': 'en',
    'America/Boise': 'en',
    'America/Anchorage': 'en',
    'America/Juneau': 'en',
    'America/Sitka': 'en',
    'America/Nome': 'en',
    'America/Adak': 'en',
    'America/Kentucky/Louisville': 'en',
    'America/Kentucky/Monticello': 'en',
    'America/North_Dakota/Center': 'en',
    'America/North_Dakota/New_Salem': 'en',
    'America/North_Dakota/Beulah': 'en',
    'Pacific/Honolulu': 'en'
  } as const

  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const language = timeZoneLanguageMap[timezone] || 'es'
    await languageStore.setLanguage(language)
  } catch (error) {
    console.error('Error in language detection:', error)
    await languageStore.setLanguage('es')
  }
})