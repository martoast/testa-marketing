// plugins/timezone-language.client.ts
import { useLanguageStore } from '~/store/language'

export default defineNuxtPlugin(async () => {
  const languageStore = useLanguageStore()

  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const [continent, location] = timezone.split('/')
    
    const mexicanLocations = [
      'Mexico_City', 'Monterrey', 'Chihuahua', 'Tijuana', 'Merida', 'Cancun', 
      'Mazatlan', 'Hermosillo', 'Matamoros', 'Bahia_Banderas', 'Ojinaga', 'General',
      'BajaSur', 'BajaNorte', 'Ensenada', 'Ciudad_Juarez', 'Mexicali', 'Nogales',
      'Reynosa', 'Nuevo_Laredo', 'Acapulco', 'Guadalajara', 'Puebla', 'Toluca',
      'Queretaro', 'Culiacan', 'Saltillo', 'Torreon', 'Tampico', 'Veracruz'
    ]
                             
    const usLocations = [
      'New_York', 'Los_Angeles', 'Chicago', 'Phoenix', 'Denver', 'Detroit', 'Boise',
      'Anchorage', 'Atlanta', 'Boston', 'Miami', 'Houston', 'Dallas', 'Seattle',
      'Portland', 'Las_Vegas', 'San_Francisco', 'San_Diego', 'Orlando', 'Philadelphia',
      'Washington', 'Indianapolis', 'Columbus', 'Charlotte', 'Nashville', 'Louisville',
      'Memphis', 'St_Louis', 'Minneapolis', 'Milwaukee', 'Kansas_City', 'Oklahoma_City',
      'Austin', 'San_Antonio', 'El_Paso', 'Tucson', 'Albuquerque', 'Salt_Lake_City',
      'Sacramento', 'San_Jose', 'Jacksonville', 'Fort_Worth', 'San_Juan', 'Honolulu',
      'Menominee', 'Juneau', 'Sitka', 'Metlakatla', 'Nome', 'Yakutat', 'Indiana',
      'Kentucky', 'North_Dakota', 'Pacific', 'Mountain', 'Central', 'Eastern', 'Alaska'
    ]
    
    if (mexicanLocations.some(city => location.includes(city))) {
      await languageStore.setLanguage('es')
    } else if (usLocations.some(city => location.includes(city))) {
      await languageStore.setLanguage('en') 
    } else {
      await languageStore.setLanguage('es')
    }
  } catch (error) {
    console.error('Error detecting location:', error)
    await languageStore.setLanguage('es')
  }
})