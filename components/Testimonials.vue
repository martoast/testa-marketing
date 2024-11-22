<template>
  <div class="isolate bg-white pb-32 pt-24 sm:pt-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-primary">{{ store.text?.testimonials?.subtitle }}</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ store.text?.testimonials?.title }}</p>
      </div>
      <!-- Keep existing template structure, just update content sources -->
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
          <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
            <p>"{{ store.text?.testimonials?.featured?.quote }}"</p>
          </blockquote>
          <figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
            <img v-if="featuredTestimonial.imageUrl" class="h-10 w-auto" :src="featuredTestimonial.imageUrl" :alt="store.text?.testimonials?.featured?.company" />
            <div class="flex-auto">
              <div class="font-semibold">{{ store.text?.testimonials?.featured?.company }}</div>
              <div class="text-gray-600">{{ store.text?.testimonials?.featured?.position }}</div>
            </div>
          </figcaption>
        </figure>
        <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
          <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
            <figure v-for="(testimonial, index) in column" :key="testimonial.company" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote class="text-gray-900">
                <p>"{{ store.text?.testimonials?.items[`${columnGroupIdx}-${columnIdx}-${index}`]?.quote }}"</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <NuxtImg 
                  v-if="testimonial.imageUrl"
                  :src="testimonial.imageUrl"
                  :alt="store.text?.testimonials?.items[`${columnGroupIdx}-${columnIdx}-${index}`]?.company"
                  class="h-10 w-auto"
                  preset="avatar"
                />
                <div>
                  <div class="font-semibold">{{ store.text?.testimonials?.items[`${columnGroupIdx}-${columnIdx}-${index}`]?.company }}</div>
                  <div class="text-gray-600">{{ store.text?.testimonials?.items[`${columnGroupIdx}-${columnIdx}-${index}`]?.position }}</div>
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
import { useLanguageStore } from '~/store/language'
const store = useLanguageStore()

const featuredTestimonial = {
  imageUrl: "/chevron.svg"
}

const testimonials = [
  [
    [
      { imageUrl: "" },
      { imageUrl: "" }
    ],
    [
      { imageUrl: "" },
      { imageUrl: "" }
    ]
  ],
  [
    [
      { imageUrl: "" },
      { imageUrl: "" }
    ],
    [
      { imageUrl: "" },
      { imageUrl: "" }
    ]
  ]
]
</script>