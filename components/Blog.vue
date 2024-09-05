<template>
    <div id="blog" class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">Aprende a hacer crecer tu negocio con nuestro asesoramiento experto.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
            <div class="relative w-full">
                <NuxtImg 
                  :src="post.imageUrl"
                  alt=""
                  class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-fill sm:aspect-[2/1] lg:aspect-[3/2]"
                  preset="blog-cover"
                />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
              <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a :href="post.author.href">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ post.author.role }}</p>
              </div>
            </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const posts = [
    {
      id: 1,
      title: '¿Qué es el muestreo de snowball?',
      href: '/blog/que-es-el-muestreo-de-snowball',
      description: 'Si buscas distribuir una encuesta entre personas con las características que buscas y pedirles que lo distribuyan a otras personas con perfiles similares, puedes hacer previamente un muestreo de snowball.',
      imageUrl: '/blog1.webp',
      date: 'May 23, 2023',
      datetime: '2023-05-23',
      author: {
        name: 'Ariosto Manrique',
        href: '#',
        imageUrl: '/ariosto-profile.webp'
      },
    },
    {
      id: 2,
      title: 'Las notas de Don Lorenzo',
      href: '/blog/las-notas-de-don-lorenzo',
      description: 'Conocí a Don Lorenzo Servitje hace varios años en una reunión de COPARMEX, tiempo después logré una entrevista privada con él donde le platiqué sobre un libro infantil que estaba haciendo y que lo estaba invitando a que escribiera el prólogo.',
      imageUrl: '/blog2.webp',
      date: 'Apr 30, 2023',
      datetime: '2023-04-30',
      author: {
        name: 'Ariosto Manrique',
        href: '#',
        imageUrl: '/ariosto-profile.webp'
      },
    },
    {
      id: 3,
      title: '¿Qué es Net Promoter Score?',
      href: '/blog/que-es-net-promoter-score',
      description: 'Uno de los errores que suelen cometer las empresas o dueños de negocios pequeños es el desconocimiento del Net Promoter Score, también conocido como "NPS".',
      imageUrl: '/blog3.webp',
      date: 'Mar 27, 2022',
      datetime: '2022-03-27',
      author: {
        name: 'Ariosto Manrique',
        href: '#',
        imageUrl: '/ariosto-profile.webp'
      },
    },
    // Add more posts here...
  ]
  </script>