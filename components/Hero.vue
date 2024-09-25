<template>
    <div id="hero" class="relative overflow-hidden bg-secondary">
      <div class="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
        <svg class="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-500 lg:top-0 lg:mb-0 lg:mt-28 xl:translate-x-0 xl:transform-none" width="364" height="384" viewBox="0 0 364 384" fill="none">
          <defs>
            <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
      <div class="relative pb-16 pt-6 sm:pb-24">
        <Popover>
          <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
            <div class="flex flex-1 items-center">
              <div class="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span class="sr-only">Your Company</span>
                  <img src="/TESTA_SELLO CIRCULAR_COLOR NEG.svg" style="height: 100px; width: 100px;" alt="testa-logo">
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-secondary p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-10 md:ml-10 md:flex">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-white hover:text-gray-300">{{ item.name }}</a>
              </div>
            </div>
          </nav>
  
          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img class="h-8 w-auto" src="/testa-logo.svg" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                      <span class="absolute -inset-0.5" />
                      <span class="sr-only">Close menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="space-y-1 px-2 pb-3 pt-2">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
  
        <main class="mt-16 sm:mt-24">
          <div class="mx-auto max-w-7xl">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8">
              <div class="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div>
                  <div class="hidden sm:mb-4 sm:flex sm:justify-center lg:justify-start">
                    <a href="/#contact" class="flex items-center rounded-full bg-gray-500 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                      <span class="rounded-full bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white">Súmate al equipo</span>
                      <span class="ml-4 text-sm">Contactanos</span>
                      <ChevronRightIcon class="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </a>
                  </div>
                  <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Investigación de Mercados</h1>
                  <p class="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Más de 20 años de experiencia en entender mercados y crear estrategias efectivas. Transformamos datos en soluciones para tu negocio.</p>                  <p class="mt-8 text-base font-semibold text-white sm:mt-10">Usado por</p>
                <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div class="flex flex-wrap items-start justify-between">
                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="/ford.svg" alt="Tuple" />
                    </div>

                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="/Coca-Cola_logo.svg" alt="StaticKit" />
                    </div>

                    <div class="flex justify-center px-1">
                      <img class="h-9 sm:h-10" src="/caliente.svg" alt="Workcation" />
                    </div>
                    
                    
                  </div>
                </div>
                </div>
              </div>
              <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                <div class="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                    <div class="px-6 py-8 sm:px-10">
                        <h2 class="text-2xl font-bold text-gray-900">¿Te interesa una cotización?</h2>
                        <form @submit.prevent="submitForm" class="mt-6 space-y-6">
                        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                            <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Nombre</label>
                            <div class="mt-1">
                                <input v-model="form.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                            </div>
                            </div>
                            <div>
                            <label for="last-name" class="block text-sm font-medium text-gray-700">Apellido</label>
                            <div class="mt-1">
                                <input v-model="form.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                            </div>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
                            <div class="mt-1">
                            <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label for="phone-number" class="block text-sm font-medium text-gray-700">Teléfono</label>
                            <div class="mt-1">
                            <input v-model="form.phone" id="phone-number" name="phone-number" type="tel" autocomplete="tel" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700">Detalles del proyecto</label>
                            <div class="mt-1">
                            <textarea v-model="form.message" id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"></textarea>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <input v-model="form.privacyPolicy" id="privacy-policy" name="privacy-policy" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <label for="privacy-policy" class="ml-2 block text-sm text-gray-900">Acepto la política de privacidad</label>
                        </div>
                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Solicitar Cotización Gratuita</button>
                        </div>
                        </form>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { ChevronRightIcon } from '@heroicons/vue/20/solid'
  
  const navigation = [
    { name: 'Home', href: '/#hero' },
    { name: 'Servicios', href: '#features' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Contacto', href: '/#contact' }
  ]
  
  const social = [
        {
          name: 'Facebook',
          href: '#',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
        {
          name: 'Instagram',
          href: '#',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
        
      ]
  
  const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    privacyPolicy: false
  })
  
  
  
  const validateForm = () => {
    return (
      form.value.firstName.trim() !== '' &&
      form.value.lastName.trim() !== '' &&
      form.value.email.trim() !== '' &&
      form.value.phone.trim() !== '' &&
      form.value.message.trim() !== '' &&
      form.value.privacyPolicy
    )
  }
  
  const submitForm = async () => {
    if (validateForm()) {
      try {
        const payload = {
          lead: {
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            email: form.value.email,
            phone: form.value.phone,
            message: form.value.message
          }
        };
  
        console.log('Payload:', payload);
  
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
  
        alert('Submitted!!! We will be in touch.')
        // Reset form
        form.value = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          privacyPolicy: false
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('An error occurred while submitting your data. Please try again.')
      }
    } else {
      alert('Please fill in all required fields and accept the privacy policy before submitting.')
    }
  }
  </script>