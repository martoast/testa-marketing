<template>
    <div class="bg-white px-6 py-32 lg:px-8">
      <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p class="text-base font-semibold leading-7 text-primary">Investigación de Mercado</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Qué es el muestreo de snowball?</h1>
        <p class="mt-6 text-xl leading-8">Si buscas distribuir una encuesta entre personas con las características que buscas y pedirles que lo distribuyan a otras personas con perfiles similares, puedes hacer previamente un muestreo de snowball.</p>
        <div class="mt-10 max-w-2xl">
          <p>El muestreo snowball o muestreo bola de nieve se define como una técnica no probabilística en la cual las muestras tienen rasgos que son raros de encontrar y los sujetos existentes proporcionan referencias para reclutar muestras requeridas para un estudio de investigación.</p>
          <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900">Método en cadena.</strong> Este método de muestreo involucra una fuente de datos primaria que nomina otras fuentes de datos potenciales que podrán participar en los estudios de investigación.</span>
            </li>
            <li class="flex gap-x-3">
              <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900">Poblaciones desconocidas.</strong> El muestreo de snowball es un método popular en estudios de negocios cuando una población es desconocida y es difícil elegir sujetos para reunirlos como muestras para la investigación.</span>
            </li>
            <li class="flex gap-x-3">
              <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900">Crecimiento continuo.</strong> Esta técnica de muestreo puede seguir y seguir, al igual que una bola de nieve que aumenta de tamaño hasta el momento en que un investigador tenga suficientes datos para analizar.</span>
            </li>
          </ul>
          <p class="mt-8">El muestreo de snowball es especialmente útil cuando se trata de encontrar individuos con características particulares o muy específicas.</p>
          <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Ventajas del muestreo snowball</h2>
          <p class="mt-6">El muestreo snowball ofrece varias ventajas en la investigación de mercados:</p>
          <ul class="mt-6 list-disc list-inside space-y-2">
            <li><strong>Es más rápido encontrar muestras:</strong> Las referencias hacen que sea fácil y rápido encontrar sujetos, ya que provienen de fuentes confiables.</li>
            <li><strong>Rentable:</strong> Este método es rentable ya que las referencias se obtienen de una fuente de datos primaria.</li>
            <li><strong>Posibilita encontrar a sujetos indecisos:</strong> Ayuda a encontrar personas que normalmente no querrían participar en estudios de investigación.</li>
          </ul>
          <figure class="mt-10 border-l border-primary pl-9">
            <blockquote class="font-semibold text-gray-900">
              <p>"El muestreo de snowball ayuda en situaciones donde las personas no quieren presentarse y participar en estudios de investigación, porque no quieren que su identidad sea expuesta."</p>
            </blockquote>
            <figcaption class="mt-6 flex gap-x-4">
              <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">Humberto López</strong> – Director de Research LATAM en QuestionPro</div>
            </figcaption>
          </figure>
          <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Cómo realizar un muestreo snowball</h2>
          <p class="mt-6">El muestreo de snowball se lleva a cabo siguiendo estos pasos:</p>
          <ol class="mt-6 list-decimal list-inside space-y-2">
            <li>Identificar a una o dos personas que cumplan con los criterios de la investigación.</li>
            <li>Recopilar información de estas fuentes de datos primarias.</li>
            <li>Pedir a estos participantes que proporcionen referencias de otras personas con características similares.</li>
            <li>Contactar a las nuevas referencias y repetir el proceso.</li>
            <li>Continuar hasta tener suficientes datos para el estudio.</li>
          </ol>
          <p class="mt-8">Es importante recordar que la confianza es una parte fundamental de este método de muestreo, especialmente cuando se trata con poblaciones difíciles de alcanzar o identificar.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid'
  </script>