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
  
      <div class="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
        <Popover>
          <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
            <div class="flex flex-1 items-center">
              <div class="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span class="sr-only">Testa Market Research</span>
                  <img class="h-16 w-auto sm:h-20" src="/TESTA_LOGO CENTRAL COMPLETO_COLOR.svg" alt="testa-logo" />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hover">
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden md:ml-10 md:block md:space-x-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
              </div>
            </div>
            <div class="hidden text-right md:block">
              <span class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <a href="#contact" class="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white hover:bg-hover">Contacto</a>
              </span>
            </div>
          </nav>
  
          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img class="h-8 w-auto" src="/TESTA_LOGO CENTRAL COMPLETO_COLOR.svg" alt="testa-logo" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-hover">
                      <span class="absolute -inset-0.5" />
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="space-y-1 px-2 pb-3 pt-2">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
                </div>
                <a href="#contact" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-primary hover:bg-gray-100">Contacto</a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
  
        <main class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 lg:mt-32">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span class="block text-base font-semibold text-primary sm:text-lg lg:text-base xl:text-lg">Más de 20 años de excelencia</span>
                <span class="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span class="block text-gray-900">Investigación de</span>
                  <span class="block text-primary">Mercados</span>
                </span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Transformamos datos en soluciones para tu negocio. Entendemos mercados y creamos estrategias efectivas para impulsar tu éxito.</p>
              <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <p class="text-base font-medium text-gray-900">¿Te interesa una cotización? Contáctanos ahora.</p>
                <form action="#" method="POST" class="mt-3 sm:flex">
                  <label for="email" class="sr-only">Email</label>
                  <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-hover focus:ring-hover sm:flex-1" placeholder="Ingresa tu email" />
                  <button type="submit" class="mt-3 w-full rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">Solicitar Cotización</button>
                </form>
                <p class="mt-3 text-sm text-gray-500">
                ¿Interesado en unirte a nuestro equipo?
                <a href="#careers" class="font-medium text-primary hover:text-hover">Súmate al equipo</a>
                </p>
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
                  <img class="w-full" src="/main.jpg" alt="" />
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
      <VideoModal :is-open="isModalOpen" @close="closeModal" video-id="dQw4w9WgXcQ" />
    </div>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'Servicios', href: '#features' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' },
    ]

    const isModalOpen = ref(false)

    const openModal = () => {
    isModalOpen.value = true
    }

    const closeModal = () => {
    isModalOpen.value = false
    }
  </script>