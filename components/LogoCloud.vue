<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2 mb-6"
      >
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            {{ store.text?.logoCloud?.title }}
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ store.text?.logoCloud?.description }}
          </p>
          <div class="mt-8 flex items-center gap-x-6">
            <a
              href="/#contact"
              class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >{{ store.text?.logoCloud?.cta?.primary }}</a
            >
            <a href="/#contact" class="text-sm font-semibold text-gray-900"
              > {{ store.text?.logoCloud?.cta?.secondary }} <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
        <div
          class="mx-auto grid w-full max-w-3xl grid-cols-2 gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:ml-6"
        >
          <div class="flex items-center justify-center">
            <img
              class="max-h-12 w-auto object-contain"
              src="/calimax.svg"
              alt="Calimax-logo"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              class="max-h-12 w-3/4 lg:w-auto object-contain"
              src="/Coca-Cola_logo.svg"
              alt="Cocacola-logo"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              class="max-h-12 w-auto object-contain"
              src="/ford.svg"
              alt="Ford-logo"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              class="max-h-14 w-auto object-contain"
              src="/caliente.svg"
              alt="Caliente-logo"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              class="max-h-10 w-auto object-contain"
              src="/oxxo-logo.svg"
              alt="oxxo-logo"
            />
          </div>
          <div class="flex items-center justify-center">
            <img
              class="max-h-10 w-auto object-contain"
              src="/walmart.svg"
              alt="walmart-logo"
            />
          </div>
        </div>
      </div>
      <div
        class="grid pt-4 mx-auto w-full max-w-xl grid-cols-2 md:grid-cols-4 gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none"
      >
        <div class="flex items-center justify-center">
          <img
            class="max-h-24 w-auto object-contain"
            src="/Toros.svg"
            alt="Calimax-logo"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-h-28 w-auto object-contain"
            src="/Harley.svg"
            alt="Cocacola-logo"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-h-16 w-auto object-contain"
            src="/McGraw.svg"
            alt="Ford-logo"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-h-24 w-auto object-contain"
            src="/cetys_universidad.svg"
            alt="Caliente-logo"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-h-9 w-auto object-contain"
            src="/Wilson.svg"
            alt="bachoco-logo"
          />
        </div>

        <div class="flex items-center justify-center">
            <img
              class="max-h-5 w-auto object-contain"
              src="/mirage.svg"
              alt="mirage-logo"
            />
          </div>

        <div class="flex items-center justify-center">
          <img
            class="max-h-10 w-auto object-contain"
            src="/truper.svg"
            alt="bachoco-logo"
          />
        </div>

        <div class="flex items-center justify-center">
          <img
            class="max-h-16 w-auto object-contain"
            src="/UAG.svg"
            alt="Caliente-logo"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-h-10 w-auto object-contain"
            src="/kuroda.svg"
            alt="kuroda-logo"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            class="max-h-16 w-auto object-contain"
            src="/politica.svg"
            alt="politica-logo"
          />
        </div>

        <div class="flex items-center justify-center">
          <img
            class="max-h-14 w-auto lg:w-1/2 object-contain"
            src="/BostonPizza.svg"
            alt="bostonpizza-logo"
          />
        </div>

        <div class="flex items-center justify-center">
          <img
            class="max-h-10 w-auto lg:w-1/2 object-contain"
            src="/gen.svg"
            alt="gen-logo"
          />
        </div>

        <div class="flex items-center justify-center">
          <img
            class="max-h-16 w-auto lg:w-1/2 object-contain"
            src="/florido.svg"
            alt="florido-logo"
          />
        </div>

        <div class="flex items-center justify-center">
          <img
            class="max-h-16 w-auto lg:w-1/2 object-contain"
            src="/huffy.svg"
            alt="huffy-logo"
          />
        </div>

        <div class="flex items-center justify-center">
          <img
            class="max-h-16 w-3/4 lg:w-1/2 object-contain"
            src="/bachoco.svg"
            alt="bachoco-logo"
          />
        </div>

        <div class="flex items-center justify-center">
          <img
            class="max-h-16 w-3/4 lg:w-1/2 object-contain"
            src="/smart.svg"
            alt="smart-logo"
          />
        </div>

        
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguageStore } from '~/store/language'
const store = useLanguageStore()
</script>
