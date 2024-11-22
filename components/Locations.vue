<template>
  <div id="locations" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"
      >
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">
              {{ store.text?.locations?.title }}
            </h2>
            <p class="mt-4 leading-7 text-gray-600">
              {{ store.text?.locations?.description }}
            </p>
          </div>
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
          >
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                Tijuana B.C.
              </h3>
              <address
                class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
              >
                <p>Sach - Edificio Torella Corporativo,</p>
                <p>Blvd. Agua Caliente 9955-Piso 5,</p>
                <p>Calete, 22044 Tijuana, B.C.</p>
                <p>+52 (664) 889-5909</p>
                <p>
                  <a href="mailto:info@testamarketing.com" class="text-primary"
                    >info@testamarketing.com</a
                  >
                </p>
              </address>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                Guadalajara
              </h3>
              <address
                class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
              >
                <p>Av. Acueducto 6075-A, local 04,</p>
                <p>Puerta de Hierro,</p>
                <p>45116 Zapopan, Jal.</p>
                <p>+52 (333) 610-2742</p>
                <p>
                  <a href="mailto:info@testamarketing.com" class="text-primary"
                    >info@testamarketing.com</a
                  >
                </p>
              </address>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                Ciudad de México
              </h3>
              <address
                class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
              >
                <p>Calz. Gral. Mariano Escobedo,</p>
                <p>476-piso 12, int. 1200-B,</p>
                <p>
                  Chapultepec Morales, Verónica Anzúres, Miguel Hidalgo, 11592
                  Miguel Hidalgo,
                </p>
                <p>Ciudad de México</p>
                <p>+52 (559) 417-5263</p>
                <p>
                  <a href="mailto:info@testamarketing.com" class="text-primary"
                    >info@testamarketing.com</a
                  >
                </p>
              </address>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                España, Barcelona
              </h3>
              <address
                class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
              >
                <p>Av. Diagonal, 211 – PL.27 LOOM,</p>
                <p>08018 - Barcelona</p>
                <p>+34 670 35-3214</p>
                <p>
                  <a
                    href="mailto:josepmaria@testamarketing.com"
                    class="text-primary"
                    >josepmaria@testamarketing.com</a
                  >
                </p>
              </address>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                San Diego
              </h3>
              <address
                class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
              >
                <p>482 W San Ysidro Blvd #767,</p>
                <p>San Ysidro, CA 92173, Estados Unidos</p>
                <p>+1 (619) 730-1871</p>
                <p>
                  <a href="mailto:info@testamarketing.com" class="text-primary"
                    >info@testamarketing.com</a
                  >
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguageStore } from "~/store/language";
const store = useLanguageStore();
</script>
