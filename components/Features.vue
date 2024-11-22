<template>
  <div id="servicios" class="overflow-hidden bg-gray-50 py-16 lg:py-24">
    <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
      <!-- SVG decorative elements remain unchanged -->
      <svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>
      
      <div class="relative">
        <div>
          <h2 class="text-center md:text-3xl font-bold leading-8 tracking-tight text-gray-900 text-2xl">
            {{ store.text?.services?.mainTitle }}
          </h2>
          <p class="mx-auto mt-4 max-w-4xl text-center text-xl text-gray-500">
            {{ store.text?.services?.mainDescription }}
          </p>
        </div>
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div class="relative">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            {{ store.text?.services?.servicesTitle }}
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            {{ store.text?.services?.servicesDescription }}
          </p>

          <dl class="mt-10 space-y-10">
            <div v-for="service in services.slice(0, 3)" :key="service.id" class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <component :is="service.icon" class="h-8 w-8" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                  {{ store.text?.services?.items[service.id]?.name }}
                </p>
              </dt>
              <dd class="ml-16 mt-2 text-base text-gray-500">
                {{ store.text?.services?.items[service.id]?.description }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Images remain unchanged -->
        <div class="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
          <NuxtImg 
            src="/testa-equipo.webp" 
            alt="Investigación de mercados" 
            class="relative mx-auto"
            width="490"
            height="414"
          />
        </div>
      </div>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
          <div class="lg:col-start-2">
            <dl class="mt-10 space-y-10">
              <div v-for="service in services.slice(3)" :key="service.id" class="relative">
                <dt>
                  <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <component :is="service.icon" class="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {{ store.text?.services?.items[service.id]?.name }}
                  </p>
                </dt>
                <dd class="ml-16 mt-2 text-base text-gray-500">
                  {{ store.text?.services?.items[service.id]?.description }}
                </dd>
              </div>
            </dl>
          </div>

          <div class="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
            <NuxtImg 
              src="/feature2.webp" 
              alt="Servicios especializados" 
              class="relative mx-auto"
              width="490"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguageStore } from '~/store/language'
import {
  UserGroupIcon,
  PhoneIcon,
  GlobeAltIcon,
  UserIcon,
  UserCircleIcon,
  UsersIcon,
  BookOpenIcon,
  ChartBarIcon,
  ShoppingBagIcon
} from '@heroicons/vue/24/outline'

const store = useLanguageStore()

const services = [
  { id: 1, icon: UserGroupIcon },
  { id: 2, icon: PhoneIcon },
  { id: 3, icon: GlobeAltIcon },
  { id: 4, icon: ShoppingBagIcon },
  { id: 5, icon: UserCircleIcon },
  { id: 6, icon: UsersIcon },
  { id: 7, icon: BookOpenIcon },
  { id: 8, icon: ChartBarIcon },
]
</script>