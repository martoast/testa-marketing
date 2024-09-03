<template>
    <div id="contact" class="relative bg-white">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div class="bg-gray-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class="mx-auto max-w-lg">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contáctanos</h2>
            <p class="mt-3 text-lg leading-6 text-gray-500">Envíanos tus datos y nosotros nos pondremos en contacto contigo.</p>
            <dl class="mt-8 text-base text-gray-500">
              <div>
                <dt class="sr-only">Dirección postal</dt>
                <dd>
                  <p>Calzada Mariano Escobedo 476, piso 12, int. 1200-B</p>
                  <p>Colonia Anzures, Alcaldía Miguel Hidalgo,</p>
                  <p>Ciudad de México</p>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">Número de teléfono</dt>
                <dd class="flex">
                  <PhoneIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">+52 (55) 1234-5678</span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Correo electrónico</dt>
                <dd class="flex">
                  <EnvelopeIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">info@testamarketing.com</span>
                </dd>
              </div>
            </dl>
            <p class="mt-6 text-base text-gray-500">
              ¿Buscas oportunidades laborales?
              {{ ' ' }}
              <a href="#" class="font-medium text-gray-700 underline">Ver todas las vacantes</a>.
            </p>
          </div>
        </div>
        <div class="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <div class="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
              <div>
                <label for="full-name" class="sr-only">Nombre completo</label>
                <input type="text" name="full-name" id="full-name" autocomplete="name" class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Nombre completo" />
              </div>
              <div>
                <label for="email" class="sr-only">Correo electrónico</label>
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Correo electrónico" />
              </div>
              <div>
                <label for="phone" class="sr-only">Teléfono</label>
                <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Teléfono" />
              </div>
              <div>
                <label for="message" class="sr-only">Mensaje</label>
                <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Mensaje" />
              </div>
              <div>
                <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
  </script>