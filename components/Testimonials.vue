<template>
    <div class="isolate bg-white pb-32 pt-24 sm:pt-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-lg font-semibold leading-8 tracking-tight text-primary">Testimoniales</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lo que nuestros clientes dicen</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>"{{ featuredTestimonial.quote }}"</p>
            </blockquote>
            <figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img v-if="featuredTestimonial.imageUrl" class="h-10 w-auto" :src="featuredTestimonial.imageUrl" :alt="featuredTestimonial.company + ' logo'" />
              <div class="flex-auto">
                <div class="font-semibold">{{ featuredTestimonial.company }}</div>
                <div class="text-gray-600">{{ featuredTestimonial.position }}</div>
              </div>
            </figcaption>
          </figure>
          <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
            <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
              <figure v-for="testimonial in column" :key="testimonial.company" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote class="text-gray-900">
                  <p>"{{ testimonial.quote }}"</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <NuxtImg 
                    v-if="testimonial.imageUrl"
                    :src="testimonial.imageUrl"
                    :alt="testimonial.company + ' logo'"
                    class="h-10 w-auto"
                    preset="avatar"
                  />
                  <div>
                    <div class="font-semibold">{{ testimonial.company }}</div>
                    <div class="text-gray-600">{{ testimonial.position }}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const featuredTestimonial = {
    quote: "Es una agencia que puede ayudar a brindar soluciones a tu empresa de una manera innovadora. Muy buena atención.",
    company: "Chevron",
    position: "",
    imageUrl: "/chevron.svg" // Add the path to the Chevron logo
  }
  
  const testimonials = [
    [
      [
        {
          quote: "Son productivos, creativos, propositivos, sencillos, eficientes, atentos, colaborativos, abiertos, flexibles, dedicados, serviciales, ejecutivos, profesionales y puntuales.",
          company: "Consejo de Desarrollo de Tijuana",
          position: "",
          imageUrl: "" // Add the path to the CDT logo
        },
        {
          quote: "En el tiempo que tengo el gusto de conocer a Testa Marketing, siempre se han desempeñado con profesionalismo. Estamos contentos por el servicio brindado a nuestras compañías en materia de publicidad; se destaca por ser una agencia con gran conocimiento de medios. Además, sin lugar a dudas, es una agencia líder en nuestra comunidad, con un gran sentido de responsabilidad social.",
          company: "Grupo la Mesa",
          position: "",
          imageUrl: "" // Add the path to the Grupo la Mesa logo
        },
      ],
      [
        {
          quote: "Es una empresa con gran experiencia en el levantamiento de encuestas, da seguimiento continuo al cliente y agiliza tiempos para entregar antes de la fecha pactada.",
          company: "Atlantia Search",
          position: "",
          imageUrl: "" // Add the path to the Atlantia Search logo
        },
        {
          quote: "Dan muy buen servicio, flexibilidad para atender los requerimientos y entrega en tiempo y forma.",
          company: "Polilat",
          position: "",
          imageUrl: "" // Add the path to the Polilat logo
        },
      ],
    ],
    [
      [
        {
          quote: "Excelente, muy proactivos.",
          company: "GSE",
          position: "",
          imageUrl: "" // Add the path to the GSE logo
        },
        {
          quote: "Testa Marketing es el aliado estratégico ideal para identificar de manera práctica las necesidades del mercado. Realmente dominan con talento la investigaciones de mercado y son sumamente acertados en la manera de aprovechar los resultados obtenidos en favor del negocio.",
          company: "Nuevo Gas",
          position: "",
          imageUrl: "" // Add the path to the Nuevo Gas logo
        },
      ],
      [
        {
          quote: "Tengo el gusto de conocer a Testa Marketing desde sus inicios y siempre ha sido una agencia entusiasta, creativa y sumamente sincera. Testa Marketing es el reflejo del espíritu emprendedor, siempre innovando y logrando los ideales tanto propios como los de sus clientes. Además, es una empresa con altos estándares humanos.",
          company: "Motiva Contact Centers",
          position: "",
          imageUrl: "" // Add the path to the Motiva Contact Centers logo
        },
        {
          quote: "Muy cercana, con gran atención al detalle y con apoyo oportuno para ayudar a mi empresa a desarrollar sus proyectos.",
          company: "Sintec Consulting",
          position: "",
          imageUrl: "" // Add the path to the Sintec Consulting logo
        },
      ],
    ],
  ]
  </script>