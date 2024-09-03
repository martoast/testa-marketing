<template>
  <div id="nosotros" class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">El Equipo</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Mucho talento se ha formado en nuestra empresa durante 15 años, aquí parte de nuestro equipo coordinador. A ellos se le suma más de 100 encuestadores en todo México.</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full object-cover" :src="person.imageUrl" alt="" />
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
              <p class="text-sm font-semibold leading-6 text-primary">{{ person.role }}</p>
              <div class="mt-2 flex gap-x-3">
                <a v-if="person.cvUrl" :href="person.cvUrl" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">CV</span>
                  <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a v-if="person.linkedinUrl" :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Ariosto Manrique',
    role: 'Director General',
    imageUrl: 'https://testamarketing.com/storage/images/Ariosto-ManriqueV3.jpg',
    cvUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Viviana Juárez',
    role: 'Administración',
    imageUrl: 'https://testamarketing.com/storage/images/Equipo2.jpg',
    linkedinUrl: '#',
  },
  {
    name: 'José María Verdaguer',
    role: 'Partner - España',
    imageUrl: 'https://testamarketing.com/storage/images/Testa-Marketing-Espa%C3%B1a.jpg',
    linkedinUrl: '#',
  },
  {
    name: 'Moises Espitia',
    role: 'Análisis',
    imageUrl: 'https://testamarketing.com/storage/images/89735405-4d0c-49a1-9b11-3be2265a6f5a.jpg',
    linkedinUrl: '#',
  },
  {
    name: 'Francisco Estrada',
    role: 'Consultor',
    imageUrl: 'https://testamarketing.com/storage/images/imagen1.jpg',
    linkedinUrl: '#',
  },
]
</script>