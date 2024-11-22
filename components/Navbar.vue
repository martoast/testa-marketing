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
      
      <!-- Language Selector -->
      <div class="hidden md:ml-6 md:flex md:items-center">
        <Menu as="div" class="relative ml-3">
          <div>
            <MenuButton class="relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-hover focus:ring-offset-2">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">Select language</span>
              <img 
                :src="store.currentLanguage === 'es' ? '/es-flag.svg' : '/en-flag.svg'"
                class="h-8 w-8 rounded-full"
                alt="Language"
              />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  @click.prevent="store.setLanguage('es')"
                  :class="[active ? 'bg-gray-100' : '', 'flex px-4 py-2 text-sm text-gray-700']"
                >
                  <img src="/es-flag.svg" class="h-5 w-5 mr-2" alt="Spanish" />
                  Español
                </a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  @click.prevent="store.setLanguage('en')"
                  :class="[active ? 'bg-gray-100' : '', 'flex px-4 py-2 text-sm text-gray-700']"
                >
                  <img src="/en-flag.svg" class="h-5 w-5 mr-2" alt="English" />
                  English
                </a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </nav>

    <!-- Mobile menu panel -->
    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
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
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              {{ item.name }}
            </a>
            <!-- Mobile language selector -->
            <div class="px-3 py-2">
              <div class="flex items-center space-x-3">
                <button
                  @click="store.setLanguage('es')"
                  class="flex items-center space-x-2 rounded-md px-2 py-1 hover:bg-gray-50"
                >
                  <img src="/es-flag.svg" class="h-5 w-5" alt="Spanish" />
                  <span>Español</span>
                </button>
                <button
                  @click="store.setLanguage('en')"
                  class="flex items-center space-x-2 rounded-md px-2 py-1 hover:bg-gray-50"
                >
                  <img src="/en-flag.svg" class="h-5 w-5" alt="English" />
                  <span>English</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useLanguageStore } from '~/store/language'

const store = useLanguageStore()

const navigation = [
  { name: 'Home', href: '/#hero' },
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Nosotros', href: '/#nosotros' },
  { name: 'Contacto', href: '/#contact' },
]
</script>