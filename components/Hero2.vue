<template>
  <div class="relative overflow-hidden bg-white">
    <div class="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
      <svg class="absolute left-1/2 top-0 -translate-y-8 translate-x-64 transform" width="640" height="784" fill="none" viewBox="0 0 640 784">
        <defs>
          <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
        <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
      </svg>
    </div>

    <div class="relative pb-16 sm:pb-24 lg:pb-32">
      <main class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 lg:mt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span class="block text-base font-semibold text-primary sm:text-lg lg:text-base xl:text-lg">Más de 20 años de experiencia</span>
              <span class="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span class="block text-gray-900">Investigación de</span>
                <span class="block text-primary">Mercados</span>
              </span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Transformamos datos en soluciones para tu negocio. Entendemos los mercados y creamos estrategias efectivas para tener éxito en ellos.</p>
            <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <p class="text-base font-medium text-gray-900 mb-4">¿Te interesa una cotización? Contáctanos ahora.</p>
              <a href="#contact">
                <button type="submit" class="mt-3 w-full rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">Solicitar Cotización</button>
              </a>

              <AlertComponent
                class="mt-3"
                v-model:show="showAlert"
                message="¡Enviado con éxito! Nos pondremos en contacto contigo."
              />
              <p class="mt-3 text-sm text-gray-500">
              ¿Interesado en unirte a nuestro equipo?
              <a href="mailto:info@testamarketing.com" class="font-medium text-primary hover:text-hover">Súmate al equipo</a>
              </p>
            </div>

            <div class="mt-5 w-full mx-auto">
              <p class="text-sm font-medium text-gray-500 mb-1">Miembro de:</p>
                  <div class="flex flex-wrap items-start justify-center lg:justify-between">
                    <div class="flex justify-center mx-auto md:mx-0">
                      <img class="p-1" src="/ESO.png" alt="emblem1" style="height:6.5rem" width="auto" />
                      <img class="p-1" src="/CDT.png" style="height:6.5rem" width="auto" alt="emblem2" />
                      <img class="p-1" src="/MERCA.png" style="height:6.5rem" width="auto" alt="emblem3" />
                    </div>
                  </div>
            </div>
          </div>
          <div class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <svg class="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
              <defs>
                <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
            </svg>
            <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button @click="openModal" type="button" class="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2">
                <span class="sr-only">Ver nuestro video informativo</span>
                <NuxtImg 
                  src="/main.webp" 
                  alt="Main image" 
                  width="450"
                  height="300"
                  preset="main-cover"
                />
                <span class="absolute inset-0 flex h-full w-full items-center justify-center" aria-hidden="true">
                  <svg class="h-20 w-20 text-hover" fill="currentColor" viewBox="0 0 84 84">
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    <VideoModal :is-open="isModalOpen" @close="closeModal" video-id="lBjR3AXWNhM" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './Navbar.vue'
import AlertComponent from './AlertComponent.vue'
import VideoModal from './VideoModal.vue'

const showAlert = ref(false)

const form = ref({
  email: '',
})

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const submitForm = async () => {
  if (form.value.email.trim() === '') {
    alert('Por favor, ingresa tu dirección de email.')
    return
  }

  try {
    const payload = {
      lead: {
        email: form.value.email,
        source: 'Hero Email Form'
      }
    };

    const headers = {
      'Content-Type': 'application/json'
    };

    const response = await fetch('/.netlify/functions/leadWebhook', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    showAlert.value = true
    form.value.email = ''
  } catch (error) {
    console.error('Error submitting email form:', error)
    alert('Hubo un error al enviar tu email. Por favor, inténtalo de nuevo.')
  }
}
</script>