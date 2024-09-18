<template>
    <Popover>
      <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
        <div class="flex flex-1 items-center">
          <div class="flex w-full items-center justify-between md:w-auto">
            <a href="#">
              <span class="sr-only">Testa Market Research</span>
              <img 
                src="/testa-main-logo.svg"
                alt="testa-logo"
                class="h-16 w-auto sm:h-20"
                height="64"
              />
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
                <img 
                  src="/testa-main-logo.svg"
                  alt="testa-logo"
                  class="h-8 w-auto"
                  height="32"
                />
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
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', href: '/#hero' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Contacto', href: '/#contact' },
  ]
  </script>