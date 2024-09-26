<template>
    <div id="servicios" class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <!-- Decorative SVGs -->
        <svg class="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
            <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>
        
        <div class="relative">
          <h2 class="text-center md:text-5xl font-bold leading-8 tracking-tight text-gray-900 text-4xl">Servicios</h2>
          <p class="mx-auto mt-4 max-w-4xl text-center text-xl text-gray-500">
            Nuestra ventaja es la capacidad de traducir las gráficas y números en estrategias efectivas para nuestros clientes. La variedad de sectores que hemos atendido durante más de 20 años hablan por nosotros y a continuación te comentamos sobre nuestros servicios.
          </p>
        </div>
  
        <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div class="relative">
            <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">¿Qué es una agencia de investigación de mercados?</h3>
            <p class="mt-3 text-lg text-gray-500">
              Es una firma enfocada en generar y analizar información para que las empresas puedan tomar mejores decisiones. Mientras la publicidad es el "lado emocional" de la mercadotecnia, la investigación de mercados es el "lado racional" del marketing.
            </p>
  
            <dl class="mt-10 space-y-10">
              <div v-for="service in services.slice(0, 3)" :key="service.id" class="relative">
                <dt>
                  <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <component :is="service.icon" class="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ service.name }}</p>
                </dt>
                <dd class="ml-16 mt-2 text-base text-gray-500">{{ service.description }}</dd>
              </div>
            </dl>
          </div>
  
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
              <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Nuestros Servicios Especializados</h3>
              <p class="mt-3 text-lg text-gray-500">
                Ofrecemos una amplia gama de servicios de investigación de mercados para satisfacer las necesidades específicas de tu empresa.
              </p>
  
              <dl class="mt-10 space-y-10">
                <div v-for="service in services.slice(3)" :key="service.id" class="relative">
                  <dt>
                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                      <component :is="service.icon" class="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ service.name }}</p>
                  </dt>
                  <dd class="ml-16 mt-2 text-base text-gray-500">{{ service.description }}</dd>
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
  
  const services = [
    {
      id: 1,
      name: 'Encuestas Cara a Cara (CAPI)',
      description: 'Es una de las técnicas cuantitativas más usadas en marketing, se llevan a cabo en vivienda, plazas comerciales y puntos de aforo poblacional. Permite obtener información detallada y precisa directamente de los encuestados.',
      icon: UserGroupIcon,
    },
    {
      id: 2,
      name: 'Encuesta Telefónica (CATI)',
      description: 'Mejor conocida como Computer Assisted Telephone Interviewing (CATI), es un método ágil, preciso y económico de investigación de mercados. Facilita la recopilación rápida de datos de una amplia muestra geográfica.',
      icon: PhoneIcon,
    },
    {
      id: 3,
      name: 'Encuesta online',
      description: 'Las Encuestas por Email o CAWI (Computer Assisted Web Interview) es la misma técnica utilizada en CAPI o CATI solo que a través de links personalizados para que las personas respondan los cuestionarios. Ofrece flexibilidad y comodidad para los participantes, aumentando la tasa de respuesta.',
      icon: GlobeAltIcon,
    },
    {
      id: 4,
      name: 'Mystery Shopper',
      description: 'Un agente profesional se hace pasar por un consumidor para analizar la conducta, comportamiento y actitudes de los empleados en una empresa. Esta técnica proporciona una visión única de la experiencia real del cliente.',
      icon: ShoppingBagIcon,
    },
    {
      id: 5,
      name: 'Entrevistas a Profundidad',
      description: 'Es una técnica cualitativa muy específica, pues busca recolectar información de personas con perfiles definidos y generalmente con agendas muy saturadas. Permite obtener insights valiosos y detallados sobre temas complejos.',
      icon: UserCircleIcon,
    },
    {
      id: 6,
      name: 'Grupos Focales',
      description: 'Los grupos focales o focus groups pueden ser ONLINE o PRESENCIALES. Son una técnica cualitativa muy solicitada por empresas que lanzarán nuevos productos o campañas publicitarias. Permiten explorar las percepciones y opiniones de un grupo diverso de manera interactiva.',
      icon: UsersIcon,
    },
    {
      id: 7,
      name: 'Estudios de Gabinete',
      description: 'INEGI, bases de datos específicas, estudios especializados y nuestros vínculos con diversos centros universitarios nos dan un menú muy amplio de fuentes de calidad para fortalecer nuestros estudios de mercado. Esta metodología ofrece una visión integral basada en datos confiables y actualizados.',
      icon: BookOpenIcon,
    },
    {
      id: 8,
      name: 'Consultoría y Marketing',
      description: 'El mundo cambió y el marketing también. ¿Estás listo? Podemos ayudarte con tus planes y estrategias de marketing. Nuestro enfoque personalizado se adapta a las necesidades únicas de tu negocio en el entorno digital actual.',
      icon: ChartBarIcon,
    },
  ]
  </script>